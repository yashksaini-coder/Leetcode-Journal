"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useLeetcodeStore } from "@/store/LeetcodeStore/useLeetcodeStore";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Doughnut } from "react-chartjs-2";

import CalendarHeatmap from "react-calendar-heatmap";
import "../styles/style.css";
import 'react-calendar-heatmap/dist/styles.css';

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
  Badge,
  Calendar,
  CheckCircle,
  Star,
  Timer
} from "lucide-react";

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
      <div className="flex justify-center items-center min-h-[50vh]">
        <p className="text-red-500 text-center px-4">{error}</p>
      </div>
    );
  }

  const { userDetails, recentSubmissions, userContestRanking } = data;

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

  const processLeetCodeData = (submissionCalendar: string) => {
    const parsedData = JSON.parse(submissionCalendar);
    
    return Object.entries(parsedData).map(([timestamp, count]) => ({
      date: new Date(Number(timestamp) * 1000).toISOString().split("T")[0],
      count: count as number
    }));
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-6 md:py-8 space-y-4 sm:space-y-6 md:space-y-8">
      {/* Profile Header Card */}
      <Card className="bg-white dark:bg-neutral-800 shadow-md rounded-lg overflow-hidden">
        <CardContent className="p-4 sm:p-6">
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 flex-shrink-0">
              <Image
                src={userDetails.profile.userAvatar}
                alt="Profile"
                fill
                className="rounded-full object-cover border-4 border-white shadow-lg"
              />
            </div>
            <div className="text-center sm:text-left flex-1 space-y-2 sm:space-y-3">
              <h1 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                {userDetails.profile.realName}
              </h1>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                @{userDetails.username} • Rank #{userDetails.profile.ranking}
              </p>
              <div className="flex gap-4 justify-center sm:justify-start">
                <SocialLink href={userDetails.githubUrl} icon={<Github size={22} />} />
                <SocialLink href={userDetails.linkedinUrl} icon={<Linkedin size={22} />} />
                <SocialLink href={userDetails.twitterUrl || undefined} icon={<Twitter size={22} />} />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2 sm:gap-4 w-full sm:w-auto mt-4 sm:mt-0">
              <QuickStat 
                icon={<Target />}
                label="Rating"
                value={userContestRanking?.rating || 0}
                color="blue"
              />
              <QuickStat 
                icon={<Trophy />}
                label="Top"
                value={`${userContestRanking?.topPercentage}%`}
                color="yellow"
              />
              <QuickStat 
                icon={<Award />}
                label="Rank"
                value={userContestRanking?.globalRanking || 0}
                color="purple"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {/* Activity Calendar Section */}
        <Card className="md:col-span-2 overflow-hidden shadow-md rounded-lg bg-white dark:bg-neutral-800">
          <CardHeader className="p-3 sm:p-4 border-b">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
                <h3 className="font-semibold text-sm sm:text-base">Contribution Calendar</h3>
              </div>
              <span className="text-xs sm:text-sm text-gray-500">
                {userDetails.submitStats.totalSubmissionNum[0].count} total submissions
              </span>
            </div>
          </CardHeader>
          <CardContent className="p-2 sm:p-4 md:p-6 overflow-x-auto">
            <div className="min-w-[600px]">
              <CalendarHeatmap
                values={processLeetCodeData(userDetails.submissionCalendar)}
                startDate={new Date(new Date().setFullYear(new Date().getFullYear() - 1))}
                endDate={new Date()}
                classForValue={(value) => {
                  if (!value) {
                    return 'color-empty';
                  }
                  return `color-scale-${(value.count)}`;
                }}
              />
            </div>
          </CardContent>
          <div className="p-3 sm:p-4 border-t">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Badge className="w-4 h-4 sm:w-5 sm:h-5 text-sky-600" />
                <h3 className="font-semibold text-sm sm:text-base">Badges</h3>
              </div>
              <span className="text-xs sm:text-sm text-gray-500">
                {(userDetails.badges).length} total badges
              </span>
            </div>
            <CardContent className="p-0">
              <div className="flex justify-center items-center gap-2 sm:gap-4 px-2 sm:px-4 py-2 overflow-x-auto">
                {userDetails.badges.slice(0, 5).map((badge, idx) => (
                  <div key={idx} className="flex flex-col items-center bg-gray-200 dark:bg-gray-700 rounded-lg p-2 sm:p-3 min-w-[50px] sm:min-w-[60px] max-w-[80px] sm:max-w-[100px] flex-shrink-0">
                    <img src={badge.icon} alt={`Badge ${idx + 1}`} className="w-full h-auto object-contain" />
                  </div>
                ))}
              </div>
            </CardContent>
          </div>
        </Card>

        {/* Recent Submissions Card */}
        <Card className="h-[350px] sm:h-[400px] overflow-hidden shadow-md rounded-lg bg-white dark:bg-neutral-800">
          <CardHeader className="p-3 sm:p-4 border-b">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Code className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
                <h3 className="font-semibold text-sm sm:text-base">Recent Activity</h3>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-0 overflow-y-auto h-[calc(350px-3rem)] sm:h-[calc(400px-4rem)]">
            <div className="divide-y">
              {recentSubmissions.map((submission, idx) => (
                <Link 
                  href={`https://leetcode.com/problems/${submission.titleSlug}`}
                  key={idx} 
                  target="_blank"
                  className="flex items-center p-3 sm:p-4 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors group"
                >
                  <div className="flex-1 min-w-0">
                    <p className="text-xs sm:text-sm font-medium text-gray-900 dark:text-gray-100 truncate group-hover:text-blue-600">
                      {submission.title}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5 sm:mt-1">
                      {new Date(Number(submission.timestamp) * 1000).toISOString().split("T")[0]}
                    </p>
                  </div>
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 ml-2 sm:ml-4 flex-shrink-0" />
                </Link>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Statistics Cards */}
        <div className="md:col-span-2 max-h-[400px] sm:max-h-[450px] lg:max-h-[500px] overflow-hidden">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <DetailCard 
              title="Problem Solving Stats"
              icon={<Star className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-600" />}
              stats={[
                { 
                  label: 'Total Solved',
                  value: userDetails.submitStats.acSubmissionNum[0].count,
                  icon: <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-500" />
                },
                { 
                  label: 'Easy Problems',
                  value: userDetails.submitStats.acSubmissionNum[1].count,
                  icon: <Zap className="w-3 h-3 sm:w-4 sm:h-4 text-green-500" />
                },
                { 
                  label: 'Medium Problems',
                  value: userDetails.submitStats.acSubmissionNum[2].count,
                  icon: <Zap className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-500" />
                },
                { 
                  label: 'Hard Problems',
                  value: userDetails.submitStats.acSubmissionNum[3].count,
                  icon: <Zap className="w-3 h-3 sm:w-4 sm:h-4 text-red-500" />
                },
              ]}
            />
            <DetailCard 
              title="Performance Metrics"
              icon={<Timer className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600" />}
              stats={[
                { 
                  label: 'Acceptance Rate',
                  value: `${(userDetails.submitStats.acSubmissionNum[0].count / 
                    userDetails.submitStats.totalSubmissionNum[0].count * 100).toFixed(1)}%`,
                  icon: <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 text-blue-500" />
                },
                { 
                  label: 'Total Submissions',
                  value: userDetails.submitStats.totalSubmissionNum[0].count,
                  icon: <Code className="w-3 h-3 sm:w-4 sm:h-4 text-green-500" />
                },
                { 
                  label: 'Contribution Points',
                  value: userDetails.contributions.points,
                  icon: <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-500" />
                },
                { 
                  label: 'Contest Count',
                  value: userContestRanking?.attendedContestsCount || 0,
                  icon: <Trophy className="w-3 h-3 sm:w-4 sm:h-4 text-orange-500" />
                },
              ]}
            />
          </div>
        </div>

        {/* Problem Distribution Chart */}
        <Card className="bg-white dark:bg-neutral-800 shadow-md rounded-lg max-h-[400px] sm:max-h-[450px] lg:max-h-[500px] h-full flex flex-col">
          <CardHeader className="p-3 sm:p-4 border-b flex-shrink-0">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Trophy className="w-4 h-4 sm:w-5 sm:h-5 text-orange-600" />
                <h3 className="font-semibold text-sm sm:text-base">Problem Distribution</h3>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-2 sm:p-4 flex justify-center items-center flex-1 overflow-hidden">
            <div className="h-full w-full flex items-center justify-center">
              <div className="h-48 w-48 sm:h-56 sm:w-56 md:h-64 md:w-64">
                <Doughnut 
                  data={difficultyData} 
                  options={{
                    cutout: '65%',
                    responsive: true,
                    maintainAspectRatio: true,
                    plugins: {
                      legend: {
                        position: 'bottom',
                        labels: {
                          padding: window.innerWidth < 640 ? 5 : 10,
                          usePointStyle: true,
                          font: {
                            size: window.innerWidth < 640 ? 10 : 12,
                            weight: 'bold'
                          }
                        }
                      },
                      tooltip: {
                        backgroundColor: 'rgba(0, 0, 0, 0.8)',
                        padding: window.innerWidth < 640 ? 8 : 12,
                        titleFont: {
                          size: window.innerWidth < 640 ? 12 : 14,
                          weight: 'bold'
                        },
                        bodyFont: {
                          size: window.innerWidth < 640 ? 11 : 13
                        },
                        callbacks: {
                          label: (context) => {
                            const total = context.dataset.data.reduce((a: number, b: number) => a + b, 0);
                            const percentage = ((context.raw as number / total) * 100).toFixed(1);
                            return `${context.label}: ${context.raw} (${percentage}%)`;
                          }
                        }
                      }
                    }
                  }} 
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function QuickStat({ icon, label, value, color = "blue" }: { icon: React.ReactNode; label: string; value: string | number; color?: "blue" | "yellow" | "purple" }) {
  const colorVariants = {
    blue: "bg-blue-100/80 dark:bg-blue-900/30",
    yellow: "bg-yellow-100/80 dark:bg-yellow-900/30",
    purple: "bg-purple-100/80 dark:bg-purple-900/30"
  };

  return (
    <div className={`${colorVariants[color]} rounded-lg p-1.5 sm:p-2 md:p-3 lg:p-4 transition-all duration-300 hover:scale-105 w-full flex items-stretch`}>
      <div className="flex items-center gap-1 sm:gap-2 w-full">
        <div className="p-1 sm:p-1.5 lg:p-2 bg-white dark:bg-gray-800 rounded-full shadow-sm flex-shrink-0">
          <div className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5">
            {icon}
          </div>
        </div>
        <div className="min-w-0 flex-1">
          <div className="text-sm sm:text-base md:text-lg lg:text-xl font-bold truncate">
            {typeof value === 'number' ? value.toLocaleString() : value}
          </div>
          <div className="text-[10px] sm:text-xs md:text-sm text-gray-600 dark:text-gray-400 truncate">
            {label}
          </div>
        </div>
      </div>
    </div>
  );
}

function DetailCard({ title, icon, stats }: { title: string; icon: React.ReactNode; stats: any[] }) {
  return (
    <Card className="hover:shadow-lg transition-shadow duration-300 bg-white dark:bg-neutral-800 h-full">
      <CardHeader className="p-3 sm:p-4 border-b">
        <div className="flex items-center gap-2">
          {icon}
          <h3 className="font-semibold text-sm sm:text-base">{title}</h3>
        </div>
      </CardHeader>
      <CardContent className="p-2 sm:p-4">
        <div className="grid grid-cols-2 gap-2 sm:gap-4">
          {stats.map((stat, idx) => (
            <div key={idx} 
              className="bg-gray-100/80 dark:bg-gray-700/50 p-2 sm:p-4 rounded-lg hover:bg-gray-200/80 dark:hover:bg-gray-700/80 transition-colors flex flex-col justify-between h-full"
            >
              <div className="flex items-center gap-1 sm:gap-2 mb-1 sm:mb-2">
                {stat.icon}
                <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
              </div>
              <div className="text-sm sm:text-base md:text-lg font-semibold">
                {typeof stat.value === 'number' ? stat.value.toLocaleString() : stat.value}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

function SocialLink({ href, icon }: { href?: string; icon: React.ReactNode }) {
  if (!href) return null;
  return (
    <a
      href={href}
      className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-all duration-300 hover:scale-110"
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
    </a>
  );
}

function DashboardSkeleton() {
  return (
    <div className="w-full max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-6 md:py-8">
      <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mb-4 sm:mb-6 md:mb-8">
        <Skeleton className="w-16 h-16 sm:w-20 sm:h-20 rounded-full" />
        <div className="space-y-1 sm:space-y-2 text-center sm:text-left">
          <Skeleton className="h-4 sm:h-6 w-32 sm:w-48" />
          <Skeleton className="h-3 sm:h-4 w-24 sm:w-32" />
          <div className="flex gap-2 sm:gap-4 justify-center sm:justify-start">
            <Skeleton className="w-5 h-5 sm:w-6 sm:h-6 rounded-full" />
            <Skeleton className="w-5 h-5 sm:w-6 sm:h-6 rounded-full" />
            <Skeleton className="w-5 h-5 sm:w-6 sm:h-6 rounded-full" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        <div className="md:col-span-2">
          <Skeleton className="h-[200px] sm:h-[250px] md:h-[300px] rounded-xl" />
        </div>
        <Skeleton className="h-[200px] sm:h-[250px] md:h-[300px] rounded-xl" />
        <div className="md:col-span-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <Skeleton className="h-48 sm:h-56 md:h-64 rounded-xl" />
            <Skeleton className="h-48 sm:h-56 md:h-64 rounded-xl" />
          </div>
        </div>
        <Skeleton className="h-48 sm:h-56 md:h-64 rounded-xl" />
      </div>
    </div>
  );
}