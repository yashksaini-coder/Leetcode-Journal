"use client";

import React from "react";
import Image from "next/image";
import { useLeetcodeStore } from "@/store/LeetcodeStore/useLeetcodeStore";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import {
  Github,
  Linkedin,
  Twitter,
  Award,
  Book,
  Star,
  Target,
  Timer,
  Trophy,
  TrendingUp,
  CheckCircle,
  Clock,
} from "lucide-react";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
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

  const contestData = {
    labels: ["Rating", "Global Rank", "Contests Attended"],
    datasets: [
      {
        label: "Contest Performance",
        data: [
          userContestRanking?.rating || 0,
          userContestRanking?.globalRanking || 0,
          userContestRanking?.attendedContestsCount || 0,
        ],
        borderColor: "#4caf50",
        backgroundColor: "rgba(76, 175, 80, 0.2)",
        fill: true,
      },
    ],
  };

  return (
    <div className="flex flex-col p-4 sm:p-6 md:p-8">
      <Card className="w-full max-w-4xl mx-auto shadow-xl border-none">
        <CardHeader className="flex flex-col sm:flex-row items-center gap-6 pb-6 border-b">
          <div className="relative w-32 h-32 sm:w-40 sm:h-40">
            <Image
              src={userDetails.profile.userAvatar || "profile.png"}
              alt="Profile Image"
              fill
              className="rounded-full object-cover border-4 border-primary shadow-md"
              priority
            />
          </div>
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <CardTitle className="text-3xl font-bold mb-2">
              {userDetails.profile.realName}
            </CardTitle>
            <p className="text-xl text-muted-foreground mb-4">
              @{userDetails.username}
            </p>
            <div className="flex flex-wrap justify-center sm:justify-start gap-2">
              {userDetails.profile.skillTags.map((skill, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="text-sm px-3 py-1"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="flex justify-center mb-6">
            <div className="w-full max-w-2xl">
              <h3 className="text-xl font-semibold mb-3 flex items-center justify-center">
                <Award className="w-5 h-5 mr-2 text-primary" />
                Contest Performance
              </h3>
              <div className="bg-secondary/30 p-6 rounded-lg">
                <Line data={contestData} />
              </div>
            </div>
          </div>
          <div className="mt-8">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold mb-3 flex items-center">
                  <Trophy className="w-5 h-5 mr-2 text-primary" />
                  Solving Statistics
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <StatItem
                    icon={<Book className="w-5 h-5 text-blue-500" />}
                    value={userDetails.submitStats.acSubmissionNum[0].count || 0}
                    label="Total Solved"
                    subtitle={`${(
                      (userDetails.submitStats.acSubmissionNum[0].count /
                        userDetails.submitStats.totalSubmissionNum[0].count) *
                      100
                    ).toFixed(1)}% success rate`}
                  />
                  <StatItem
                    icon={<Target className="w-5 h-5 text-green-500" />}
                    value={userDetails.submitStats.acSubmissionNum[1].count || 0}
                    label="Easy Problems"
                    subtitle={`${userDetails.submitStats.acSubmissionNum[1].submissions} submissions`}
                  />
                  <StatItem
                    icon={<Target className="w-5 h-5 text-yellow-500" />}
                    value={userDetails.submitStats.acSubmissionNum[2].count || 0}
                    label="Medium Problems"
                    subtitle={`${userDetails.submitStats.acSubmissionNum[2].submissions} submissions`}
                  />
                  <StatItem
                    icon={<Target className="w-5 h-5 text-red-500" />}
                    value={userDetails.submitStats.acSubmissionNum[3].count || 0}
                    label="Hard Problems"
                    subtitle={`${userDetails.submitStats.acSubmissionNum[3].submissions} submissions`}
                  />
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold mb-3 flex items-center">
                  <TrendingUp className="w-5 h-5 mr-2 text-primary" />
                  Performance Metrics
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <StatItem
                    icon={<TrendingUp className="w-5 h-5 text-purple-500" />}
                    value={userDetails.profile.ranking}
                    label="Global Ranking"
                    subtitle="Current Position"
                  />
                  <StatItem
                    icon={<Star className="w-5 h-5 text-yellow-500" />}
                    value={userDetails.profile.starRating}
                    label="Contest Rating"
                    subtitle={`Level ${Math.floor(userDetails.profile.starRating / 500) + 1}`}
                  />
                  <StatItem
                    icon={<CheckCircle className="w-5 h-5 text-green-500" />}
                    value={userDetails.contributions.points}
                    label="Contribution Points"
                    subtitle="Community Impact"
                  />
                </div>
              </div>
            </div>
            <br></br>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold mb-6">Recent Badges</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {(userDetails?.badges || []).slice(0, 5).map((badge) => (
                    <div
                      key={badge.id}
                      className="flex flex-col items-center p-2 bg-secondary rounded-lg"
                    >
                      <div className="relative w-12 h-12 mb-2">
                        <Image
                          src={badge.icon}
                          alt={badge.displayName}
                          fill
                          className="object-contain"
                        />
                      </div>
                      <span className="text-xs text-center">
                        {badge.displayName}
                      </span>
                    </div>
                  ))}
                  {(!userDetails?.badges || userDetails.badges.length === 0) && (
                    <p className="text-muted-foreground">No badges earned yet</p>
                  )}
                </div>
              </div>
            </div>
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Timer className="w-5 h-5 mr-2 text-primary" />
                Submission Timeline
              </h3>
              <div className="bg-secondary/30 rounded-lg p-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <TimelineStat
                    label="All Time"
                    value={userDetails.submitStats.totalSubmissionNum[0].count}
                    total={userDetails.submitStats.totalSubmissionNum[0].count}
                  />
                </div>
              </div>
            </div>
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Clock className="w-5 h-5 mr-2 text-primary" />
                Recent Submissions
              </h3>
              <div className="bg-secondary/30 rounded-lg p-4">
                <div className="space-y-2">
                  {(recentSubmissions || []).slice(0, 5).map((submission, idx) => (
                    <div key={idx} className="flex justify-between">
                      <span>{submission.title}</span>
                      <span className={`text-sm ${submission.status === 'Accepted' ? 'text-green-500' : 'text-red-500'}`}>
                        {submission.status}
                      </span>
                    </div>
                  ))}
                  {(!recentSubmissions || recentSubmissions.length === 0) && (
                    <p className="text-muted-foreground">No recent submissions</p>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center gap-6 mt-8">
            <SocialLink
              href={userDetails?.githubUrl || ''}
              icon={<Github className="w-6 h-6" />}
            />
            <SocialLink
              href={userDetails?.linkedinUrl || ''}
              icon={<Linkedin className="w-6 h-6" />}
            />
            <SocialLink
              href={userDetails?.twitterUrl || ''}
              icon={<Twitter className="w-6 h-6" />}
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function StatItem({
  icon,
  value,
  label,
  subtitle,
}: {
  icon: React.ReactNode;
  value: number;
  label: string;
  subtitle?: string;
}) {
  return (
    <div className="flex items-center space-x-3 bg-secondary/50 rounded-lg p-4 hover:bg-secondary/70 transition-colors">
      <div className="p-2 bg-background rounded-full">{icon}</div>
      <div>
        <div className="text-2xl font-bold">{value.toLocaleString()}</div>
        <div className="text-sm font-medium">{label}</div>
        {subtitle && (
          <div className="text-xs text-muted-foreground">{subtitle}</div>
        )}
      </div>
    </div>
  );
}

function TimelineStat({
  label,
  value,
  total,
}: {
  label: string;
  value: number;
  total: number;
}) {
  const percentage = ((value / total) * 100).toFixed(1);
  return (
    <div className="text-center">
      <div className="text-sm font-medium text-muted-foreground">{label}</div>
      <div className="text-xl font-bold">{value.toLocaleString()}</div>
      <div className="text-xs text-muted-foreground">
        {percentage}% of total
      </div>
    </div>
  );
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  if (!href) return null;
  return (
    <a
      href={href}
      className="text-muted-foreground hover:text-primary transition-colors"
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
    </a>
  );
}

function DashboardSkeleton() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 p-4 sm:p-6 md:p-8">
      <Card className="w-full max-w-4xl mx-auto shadow-xl">
        <CardHeader className="flex flex-col sm:flex-row items-center gap-6 pb-6 border-b">
          <Skeleton className="w-32 h-32 sm:w-40 sm:h-40 rounded-full" />
          <div className="flex flex-col items-center sm:items-start space-y-4 w-full">
            <Skeleton className="h-8 w-48" />
            <Skeleton className="h-6 w-36" />
            <div className="flex flex-wrap justify-center sm:justify-start gap-2">
              {[1, 2, 3].map((i) => (
                <Skeleton key={i} className="h-6 w-20" />
              ))}
            </div>
          </div>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="grid gap-6 md:grid-cols-2">
            {[1, 2].map((section) => (
              <div key={section} className="space-y-4">
                <Skeleton className="h-7 w-32" />
                <div className="grid grid-cols-2 gap-4">
                  {[1, 2, 3, 4].map((item) => (
                    <Skeleton key={`${section}-${item}`} className="h-20 w-full" />
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-6 mt-8">
            {[1, 2, 3].map((icon) => (
              <Skeleton key={icon} className="w-6 h-6 rounded-full" />
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}