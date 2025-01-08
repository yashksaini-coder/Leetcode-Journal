"use client"
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabaseClient';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/header';
import StatsCard from '@/components/Stats';
import { fetchLeetCodeStats } from '@/lib/utils';

export default function Dashboard() {
    const [userData, setUserData] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data, error } = await supabase.auth.getSession();

                if (error) throw new Error("Error fetching session.");

                const session = data.session;
                if (!session) {
                    router.push('/login');
                    return;
                }
                // Fetch user-specific data in a single call
                const { data: userInfo, error: userInfoError } = await supabase
                    .from('user_info')
                    .select('*')
                    .eq('user_id', session.user.id)
                    .single(); 

                if (userInfoError) throw userInfoError;

                setUserData(userInfo);

            } catch (err: any) {
                console.error(err);
                setError(err.message || 'An error occurred.');
                router.push('/login');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [router]);

    if (loading) return <p>Loading...</p>;

    if (error) {
        return (
            <div>
                <Navbar />
                <p className="text-red-500">{error}</p>
            </div>
        );
    }

    return (
        <div>
            <Navbar />
            <div className="container mx-auto p-4">
                <h1 className="text-xl font-bold mb-4">Welcome, {userData.name}</h1>
                <div className="mb-4">
                    <p>LeetCode Username: {userData.leetcode_username}</p>
                    <p>Gender: {userData.gender}</p>
                    <p>User ID: {userData.user_id}</p>
                </div>
                <button
                    className="px-4 py-2 bg-red-500 text-white rounded"
                    onClick={() => supabase.auth.signOut().then(() => router.push('/login'))}
                >
                    Sign Out
                </button>
                <div className="mt-6">
                    <h2 className="text-lg font-bold mb-2">LeetCode Stats</h2>
                    <StatsCard leetcodeUsername={userData.leetcode_username} userId={userData.user_id} />
                </div>
            </div>
        </div>
    );
}
