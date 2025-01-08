import prisma from '@/lib/database/prismaClient';
import { supabase } from '@/lib/supabaseClient';
import axios from 'axios';
import { create } from 'zustand'

interface User {
    id?: string;
    email: string;
    password: string;
    gender: string;
    fullName: string;
    leetcodeUsername: string;
}

interface authStore {
    isSigningIn: boolean;
    signinError: string | null;
    signin: (signinMetaData: { email: string, password: string }, router: any) => void;
    logout: () => void;

    signupError: string | null;
    isSigningUp: boolean;
    signup: (signupMetaData: User, router: any) => void;
    user: User | null;

    authUserLoading: boolean;
    fetchAuthUser: () => void;
    authUser: User | null;
}

export const useAuthStore = create<authStore>((set) => ({
    signinError: null,
    isSigningIn: false,
    signin: async (signinMetaData, router) => {
        set({ isSigningIn: true })
        try {
            const { data, error: loginError } =
                await supabase.auth.signInWithPassword(signinMetaData);

            if (loginError) {
                set({ signinError: loginError.message })
                console.log(loginError.message);
                return
            }

            if (data.session) {
                router.push("/dashboard");
            } else {
                throw new Error("Unable to retrieve session after login.");
            }
        } catch (err: any) {
            console.error("Login Error:", err);
            set({ signinError: err.message || "Something went wrong. Please try again." });
        } finally {
            set({ isSigningIn: false })
        }
    },
    logout: () => {
        console.log('logout');
    },

    signupError: null,
    isSigningUp: false,
    signup: async (signupMetaData, router) => {
        set({ isSigningUp: true });
        try {
            const response = await axios.post('/api/auth/register', signupMetaData);
            if (response.status === 201) {
                set({ user: signupMetaData });
                router.push('/auth/verify');
                set({ signupError: null });
            }
        } catch (err: any) {
            console.error('Error:', err);
            set({ signupError: err.message || 'Something went wrong. Please try again.' });
        } finally {
            set({ isSigningUp: false });
        }
    },
    user: null,

    authUserLoading: false,
    authUser: null,
    fetchAuthUser: async () => {
        try {
            set({ authUserLoading: true });
            const { data: sessionData, error: sessionError } =
                await supabase.auth.getSession();
            const supabaseId = sessionData.session?.user.id;
            console.log("supabaseId", supabaseId);

            const response = await axios.post('/api/auth/user', {
                supabaseId,
            });
            if (response.status === 200) {
                set({ authUser: response.data.user });
            }
        } catch (err: any) {
            console.error('Error fetching user data:', err);
        } finally {
            set({ authUserLoading: false });
        }
    },
}));