import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { fetchLeetCodeStats } from '@/lib/utils';

interface StatsCardProps {
    leetcodeUsername: string;
    id:string
}

const StatsCard: React.FC<StatsCardProps> = ({ leetcodeUsername, id }) => {
    const [stats, setStats] = useState<any | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const {stats} = await fetchLeetCodeStats(leetcodeUsername, id);
                setStats(stats);
            } catch (err: any) {
                setError(err.message || 'Error fetching LeetCode stats.');
            } finally {
                setLoading(false);
            }
        };
        
        fetchStats();
    }, [leetcodeUsername]);

    if (loading) {
        return (
            <Card className="p-4 shadow-md rounded-lg flex justify-center items-center">
                <p>Loading stats...</p>
            </Card>
        );
    }

    if (error) {
        return (
            <Card className="p-4 shadow-md rounded-lg text-center">
                <p className="text-red-500">{error}</p>
            </Card>
        );
    }

    if (!stats) {
        return null;
    }
    
    const { profile, submitStats } = stats;
    const ranking = profile?.ranking || 'N/A';
    const solvedEasy = submitStats?.acSubmissionNum?.find((item: any) => item.difficulty === 'Easy')?.count || 0;
    const solvedMedium = submitStats?.acSubmissionNum?.find((item: any) => item.difficulty === 'Medium')?.count || 0;
    const solvedHard = submitStats?.acSubmissionNum?.find((item: any) => item.difficulty === 'Hard')?.count || 0;


    return (
        <Card className="p-4 shadow-md rounded-lg">
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <p>Ranking:</p>
                    <Badge>{ranking}</Badge>
                </div>
                <div>
                    <p>Solved Easy:</p>
                    <Badge>{solvedEasy}</Badge>
                </div>
                <div>
                    <p>Solved Medium:</p>
                    <Badge>{solvedMedium}</Badge>
                </div>
                <div>
                    <p>Solved Hard:</p>
                    <Badge>{solvedHard}</Badge>
                </div>
            </div>
        </Card>
    );
};

export default StatsCard;
