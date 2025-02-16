"use client";

import React from "react";
import Image from "next/image";
import { useLeetcodeStore } from "@/store/LeetcodeStore/useLeetcodeStore";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Line,
  Bar,
  Doughnut
} from "react-chartjs-2";
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
  CheckCircle,
  Clock,
  Zap,
  Calendar,
  Code,
  AlertCircle,
} from "lucide-react";

// Register Chart.js components
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

  // Problem Difficulty Distribution
  const difficultyData = {
    labels: ['Easy', 'Medium', 'Hard'],
    datasets: [
      {
        data: [
          userDetails.submitStats.acSubmissionNum[1].count,
          userDetails.submitStats.acSubmissionNum[2].count,
          userDetails.submitStats.acSubmissionNum[3].count,
        ],
        backgroundColor: [
          '#4ade80',
          '#fbbf24',
          '#ef4444'
        ],
        borderWidth: 0,
      },
    ],
  };

  // Rating History Chart
  const ratingHistoryData = {
    labels: ['6m ago', '5m', '4m', '3m', '2m', '1m', 'Current'],
    datasets: [
      {
        label: 'Rating',
        data: [1200, 1350, 1450, 1520, 1650, 1750, userContestRanking?.rating || 0],
        borderColor: '#3b82f6',
        tension: 0.3,
        pointRadius: 0,
      },
    ],
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Profile Header */}
      <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
        <div className="relative w-24 h-24">
          <Image
            src={userDetails.profile.userAvatar}
            alt="Profile"
            fill
            className="rounded-full object-cover border-2 border-white shadow-lg"
          />
        </div>
        <div className="text-center md:text-left">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            {userDetails.profile.realName}
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            @{userDetails.username} • Rank #{userDetails.profile.ranking}
          </p>
          <div className="flex gap-4 mt-3 justify-center md:justify-start">
            <SocialLink href={userDetails.githubUrl} icon={<Github />} />
            <SocialLink href={userDetails.linkedinUrl} icon={<Linkedin />} />
            <SocialLink href={userDetails.twitterUrl ?? undefined} icon={<Twitter />} />
          </div>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* Rating Card */}
          <Card className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <Trophy className="w-5 h-5 text-blue-600" />
                Contest Rating
              </h3>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                Top {userContestRanking?.topPercentage}%
              </span>
            </div>
            <Line data={ratingHistoryData} options={{
              responsive: true,
              plugins: {
                legend: { display: false },
              },
              scales: {
                y: { grid: { color: '#e5e7eb' } },
                x: { grid: { display: false } }
              }
            }} />
          </Card>

          {/* Problem Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Zap className="w-5 h-5 text-green-600" />
                Solved Problems
              </h3>
              <div className="flex justify-center h-48">
                <Doughnut data={difficultyData} options={{
                  cutout: '70%',
                  plugins: { legend: { position: 'bottom' } }
                }} />
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-purple-600" />
                Activity
              </h3>
              <div className="h-48">
                <HeatMapCalendar submissions={recentSubmissions} />
              </div>
            </Card>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Quick Stats */}
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-orange-600" />
              Performance
            </h3>
            <div className="space-y-4">
              <StatItem
                label="Total Solved"
                value={userDetails.submitStats.acSubmissionNum[0].count}
                trend="+12% from last month"
              />
              <StatItem
                label="Acceptance Rate"
                value={`${(userDetails.submitStats.acSubmissionNum[0].count / userDetails.submitStats.totalSubmissionNum[0].count * 100).toFixed(1)}%`}
                trend="92nd percentile"
              />
              <StatItem
                label="Contests Attended"
                value={userContestRanking?.attendedContestsCount}
                trend={`${userContestRanking?.topPercentage}% top`}
              />
            </div>
          </Card>

          {/* Recent Submissions */}
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Code className="w-5 h-5 text-green-600" />
              Recent Submissions
            </h3>
            <div className="space-y-3">
              {recentSubmissions.slice(0, 5).map((submission, idx) => (
                <div key={idx} className="flex items-center justify-between p-2 hover:bg-gray-50 rounded">
                  <span className="text-sm">{submission.title}</span>
                  <span className={`text-sm ${submission.status === 'Accepted' ? 'text-green-600' : 'text-red-600'}`}>
                    {submission.status}
                  </span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

// Improved Stat Item Component
function StatItem({ label, value, trend }: { label: string; value: string | number; trend?: string }) {
  return (
    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
      <div>
        <div className="text-sm text-gray-600">{label}</div>
        <div className="text-xl font-semibold">{value}</div>
      </div>
      {trend && <span className="text-sm text-gray-500">{trend}</span>}
    </div>
  );
}

// Heatmap Calendar Component (Simplified)
function HeatMapCalendar({ submissions }: { submissions: any[] }) {
  // Implement a simplified heatmap based on submission dates
  return (
    <div className="text-center text-gray-500">
      <AlertCircle className="w-12 h-12 mx-auto text-gray-300 mb-2" />
      <p className="text-sm">Submission heatmap (placeholder)</p>
    </div>
  );
}

// Social Link Component
function SocialLink({ href, icon }: { href?: string; icon: React.ReactNode }) {
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

// Updated Skeleton Loader
function DashboardSkeleton() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Profile Skeleton */}
      <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
        <Skeleton className="w-24 h-24 rounded-full" />
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

      {/* Main Content Skeleton */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Skeleton className="h-64 rounded-xl" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Skeleton className="h-64 rounded-xl" />
            <Skeleton className="h-64 rounded-xl" />
          </div>
        </div>
        <div className="space-y-6">
          <Skeleton className="h-64 rounded-xl" />
          <Skeleton className="h-64 rounded-xl" />
        </div>
      </div>
    </div>
  );
}