import { createClient } from '@/utils/supabase/client'
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
    signin: (signinMetaData: { email: string, password: string },router: any) => void;
    logout: (router: any) => void;
    signupError: string | null;
    isSigningUp: boolean;
    signup: (signupMetaData: User,router: any) => void;
    user: User | null;
    authUserLoading: boolean;
    fetchAuthUser: () => void;
    authUser: User | null;
}

export const useAuthStore = create<authStore>((set) => ({
    signinError: null,
    isSigningIn: false,
    signin: async (signinMetaData,router) => {
        const supabase = createClient()
        set({ isSigningIn: true, signinError: null })
        try {
            const { data, error: loginError } =
                await supabase.auth.signInWithPassword(signinMetaData);

            if (loginError) {
                set({ signinError: loginError.message })
                console.log(loginError.message);
                return
            }

            if (data.session) {
                // Ensure we have a session before redirecting
                await router.push('/dashboard');
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

    logout: async (router) => {
        const supabase = createClient()
        try {
            await supabase.auth.signOut();
            router.push('/auth/signin');
        } catch (error) {
            console.error('Logout error:', error);
        }
    },

    signupError: null,
    isSigningUp: false,
    signup: async (signupMetaData,router) => {

        set({ isSigningUp: true });
        try {
            const response = await axios.post('/api/auth/register', signupMetaData);
            if (response.status === 201) {
                set({ user: signupMetaData });
                router.push('/auth/signin');
                set({ signupError: null });
            }
        } catch (error: any) {
            let err = error.response.data;
            console.error('Error:', err.message);
            set({ signupError: err.message || 'Something went wrong. Please try again.' });
        } finally {
            set({ isSigningUp: false });
        }
    },
    user: null,

    authUserLoading: true,
    authUser: null,
    fetchAuthUser: async () => {
        try {
            set({ authUserLoading: true });
            const response = await axios.get('/api/auth/user');
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