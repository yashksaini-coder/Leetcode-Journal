import { supabase } from '@/lib/supabaseClient';
import { NextRequest, NextResponse } from 'next/server';

const storeUserStats = async (userId: string, stats: any) => {
    const { data, error } = await supabase.from('user_info').upsert([
        {
            user_id: userId,
            name: stats.profile.realName,
            email: stats.profile.realName,  
            leetcode_username: stats.username,
            ranking: stats.profile.ranking,
            solved_easy: stats.submitStats.acSubmissionNum[0].count,
            solved_medium: stats.submitStats.acSubmissionNum[1].count,
            solved_hard: stats.submitStats.acSubmissionNum[2].count,
            total_contests: stats.contestRanking.attendedContestsCount || 0,
            rating: stats.contestRanking.rating || 0,
        },
    ]);

    if (error) {
        console.error('Error storing data in Supabase:', error);
    }

    return data;
};

export async function POST(req: NextRequest) {
    const { userId, stats } = await req.json();

    if (!userId || !stats) {
        return NextResponse.json({ error: "User ID and stats are required" }, { status: 400 });
    }

    const data = await storeUserStats(userId, stats);

    if (!data) {
        return NextResponse.json({ error: "Error storing data in Supabase" }, { status: 500 });
    }

    return NextResponse.json({ message: "Data successfully stored in Supabase" }, { status: 200 });
}
