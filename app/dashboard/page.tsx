"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useLeetcodeStore } from "@/store/LeetcodeStore/useLeetcodeStore";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Line, Bar, Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  BarElement,
  ArcElement,
} from "chart.js";
import {
  Github,
  Linkedin,
  Twitter,
  Trophy,
  TrendingUp,
  Zap,
  Code,
  Target,
  Award,
  Hash
} from "lucide-react";

import LeetCodeCalendar from "leetcode-calendar";
import { exampleTheme } from "../../lib/leetcode-calendar-theme";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  BarElement,
  ArcElement
);

export default function Dashboard() {
  const { fetchLeetcodeData, data, isLoading, error } = useLeetcodeStore();

  React.useEffect(() => {
    fetchLeetcodeData();
  }, [fetchLeetcodeData]);

  if (isLoading || !data) {
    return <DashboardSkeleton />;
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  const { userDetails, recentSubmissions, userContestRanking } = data;

  interface ContestHistoryItem {
    date: string;
    rating: number;
  }
  
  // Extract contest history data
  const contestHistory = (userContestRanking?.contestHistory || []) as ContestHistoryItem[];
  const ratingHistoryData = {
    labels: contestHistory.map(contest => new Date(contest.date).toLocaleDateString()),
    datasets: [{
      label: 'Contest Rating',
      data: contestHistory.map(contest => contest.rating),
      borderColor: '#3b82f6',
      tension: 0.3,
      pointRadius: 2,
      pointHoverRadius: 5,
    }],
  };

  const difficultyData = {
    labels: ['Easy', 'Medium', 'Hard'],
    datasets: [{
      data: [
        userDetails.submitStats.acSubmissionNum[1].count,
        userDetails.submitStats.acSubmissionNum[2].count,
        userDetails.submitStats.acSubmissionNum[3].count,
      ],
      backgroundColor: ['#4ade80', '#fbbf24', '#ef4444'],
      borderWidth: 0,
    }],
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Profile Header */}
      <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
        <div className="relative w-20 h-20">
          <Image
            src={userDetails.profile.userAvatar}
            alt="Profile"
            fill
            className="rounded-full object-cover border-2 border-white shadow-lg"
          />
        </div>
        <div className="text-center md:text-left flex-1">
          <h1 className="text-xl font-bold text-gray-900 dark:text-white">
            {userDetails.profile.realName}
          </h1>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            @{userDetails.username} • Global Rank #{userDetails.profile.ranking}
          </p>
          <div className="flex gap-4 mt-2 justify-center md:justify-start">
            <SocialLink href={userDetails.githubUrl} icon={<Github size={18} />} />
            <SocialLink href={userDetails.linkedinUrl} icon={<Linkedin size={18} />} />
            <SocialLink href={userDetails.twitterUrl || undefined} icon={<Twitter size={18} />} />
          </div>
        </div>
        <div className="flex gap-4 flex-wrap justify-center">
          <QuickStat 
            icon={<Target className="w-4 h-4" />}
            label="Contest Rating"
            value={userContestRanking?.rating || 0}
          />
          <QuickStat 
            icon={<Award className="w-4 h-4" />}
            label="Top"
            value={`${userContestRanking?.topPercentage}%`}
          />
          <QuickStat 
            icon={<Hash className="w-4 h-4" />}
            label="Global Rank"
            value={userContestRanking?.globalRanking || 0}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Leetcode calendar to show up here */}
        <div className="lg:col-span-2">
          <LeetCodeCalendar username="yashksaini"
          blockSize={11} // Optional: Size of each block in pixels (default: 15)
          blockMargin={3} // Optional: Margin between blocks in pixels (default: 5)
          fontSize={11} // Optional: Font size of the text within blocks (default: 16)
          theme={exampleTheme} // Optional: A custom theme object to style the calendar
          style={{ maxWidth: '950px' }}
           />
        </div>

        {/* Recent Submissions */}
        <Card className="h-[300px] overflow-hidden">
          <CardHeader className="p-4">
            <div className="flex items-center gap-2">
              <Code className="w-5 h-5 text-green-600" />
              <h3 className="font-semibold">Recent Submissions</h3>
            </div>
          </CardHeader>
          <CardContent className="p-4 overflow-y-auto">
            <div className="space-y-2">
              {recentSubmissions.map((submission, idx) => (
                <Link 
                  href={`https://leetcode.com/problems/${submission.titleSlug}`}
                  key={idx} 
                  className="flex items-center justify-between p-2 hover:bg-gray-50 rounded transition-colors group"
                >
                  <span className="text-sm truncate group-hover:text-blue-600 transition-colors">
                    {submission.title}
                  </span>
                  <span className={`text-xs px-2 py-1 rounded ${
                    submission.status === 'Accepted' 
                      ? 'bg-green-100 text-green-700' 
                      : 'bg-red-100 text-red-700'
                  }`}>
                    {submission.status}
                  </span>
                </Link>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Additional Stats */}
        <div className="lg:col-span-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <DetailCard 
              title="Problem Solving"
              icon={<Zap className="w-5 h-5 text-yellow-600" />}
              stats={[
                { label: 'Total Solved', value: userDetails.submitStats.acSubmissionNum[0].count },
                { label: 'Easy', value: userDetails.submitStats.acSubmissionNum[1].count },
                { label: 'Medium', value: userDetails.submitStats.acSubmissionNum[2].count },
                { label: 'Hard', value: userDetails.submitStats.acSubmissionNum[3].count },
              ]}
            />

            <DetailCard 
              title="Submissions"
              icon={<TrendingUp className="w-5 h-5 text-purple-600" />}
              stats={[
                { 
                  label: 'Acceptance Rate', 
                  value: `${(userDetails.submitStats.acSubmissionNum[0].count / 
                    userDetails.submitStats.totalSubmissionNum[0].count * 100).toFixed(1)}%` 
                },
                { label: 'Total Submissions', value: userDetails.submitStats.totalSubmissionNum[0].count },
                { label: 'Points', value: userDetails.contributions.points },
                { label: 'Contests', value: userContestRanking?.attendedContestsCount || 0 },
              ]}
            />
          </div>
        </div>

        <Card>
          <CardHeader className="p-4">
            <div className="flex items-center gap-2">
              <Trophy className="w-5 h-5 text-orange-600" />
              <h3 className="font-semibold">Difficulty Distribution</h3>
            </div>
          </CardHeader>
          <CardContent className="p-4">
            <div className="h-48">
              <Doughnut 
                data={difficultyData} 
                options={{
                  cutout: '70%',
                  plugins: { 
                    legend: { position: 'bottom' },
                    tooltip: {
                      callbacks: {
                        label: (item) => `${item.label}: ${item.raw} solved`
                      }
                    }
                  }
                }} 
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function QuickStat({ icon, label, value }:
  {
  icon: React.ReactNode;
  label: string;
  value: string | number;
  }) {
    return (
      <div className="flex items-center space-x-3 bg-secondary/50 rounded-lg p-4 hover:bg-secondary/70 transition-colors">
        <div className="p-2 bg-background rounded-full">{icon}</div>
        <div>
          <div className="text-2xl font-bold">{value.toLocaleString()}</div>
          <div className="text-sm font-medium">{label}</div>
        </div>
      </div>
    );
}

interface DetailStats {
  label: string;
  value: string | number;
}

function DetailCard({ title, icon, stats }: { title: string; icon: React.ReactNode; stats: DetailStats[] }) {
  return (
    <Card>
      <CardHeader className="p-4">
        <div className="flex items-center gap-2">
          {icon}
          <h3 className="font-semibold">{title}</h3>
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <div className="grid grid-cols-2 gap-4">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
              <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
              <div className="text-lg font-semibold">{stat.value}</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

function SocialLink({ href, icon }: { href: string | undefined, icon: React.ReactNode }) {
  if (!href) return null;
  return (
    <a
      href={href}
      className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
    </a>
  );
}

function DashboardSkeleton() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
        <Skeleton className="w-20 h-20 rounded-full" />
        <div className="space-y-2 text-center md:text-left">
          <Skeleton className="h-6 w-48" />
          <Skeleton className="h-4 w-32" />
          <div className="flex gap-4 justify-center md:justify-start">
            <Skeleton className="w-6 h-6 rounded-full" />
            <Skeleton className="w-6 h-6 rounded-full" />
            <Skeleton className="w-6 h-6 rounded-full" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Skeleton className="h-[300px] rounded-xl" />
        </div>
        <Skeleton className="h-[300px] rounded-xl" />
        <div className="lg:col-span-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Skeleton className="h-64 rounded-xl" />
            <Skeleton className="h-64 rounded-xl" />
          </div>
        </div>
        <Skeleton className="h-64 rounded-xl" />
      </div>
    </div>
  );
}