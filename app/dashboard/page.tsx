"use client";
import React from "react";
import Image from "next/image";
import { useLeetcodeStore } from "@/store/LeetcodeStore/useLeetcodeStore";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
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
} from "lucide-react";

export default function Dashboard() {
  const { fetchLeetcodeUserProfile, leetcodeUserProfile } = useLeetcodeStore();
  React.useEffect(() => {
    fetchLeetcodeUserProfile();
  }, [fetchLeetcodeUserProfile]);

  if (!leetcodeUserProfile) {
    return <DashboardSkeleton />;
  }
  return (
    <div className="flex flex-col p-4 sm:p-6 md:p-8">
      <Card className="w-full max-w-4xl mx-auto shadow-xl border-none">
        <CardHeader className="flex flex-col sm:flex-row items-center gap-6 pb-6 border-b">
          <div className="relative w-32 h-32 sm:w-40 sm:h-40">
            <Image
              src={leetcodeUserProfile.profile.userAvatar || "/placeholder.svg"}
              alt="Profile Image"
              fill
              className="rounded-full object-cover border-4 border-primary shadow-md"
              priority
            />
          </div>
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <CardTitle className="text-3xl font-bold mb-2">
              {leetcodeUserProfile.profile.realName}
            </CardTitle>
            <p className="text-xl text-muted-foreground mb-4">
              @{leetcodeUserProfile.username}
            </p>
            <div className="flex flex-wrap justify-center sm:justify-start gap-2">
              {leetcodeUserProfile.profile.skillTags.map((skill, index) => (
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
          {/* New Additional Dashboard Sections */}
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
                    value={
                      leetcodeUserProfile.submitStats.acSubmissionNum[0].count ||
                      0
                    }
                    label="Total Solved"
                    subtitle={`${(
                      (leetcodeUserProfile.submitStats.acSubmissionNum[0].count /
                        leetcodeUserProfile.submitStats.totalSubmissionNum[0].count) *
                      100
                    ).toFixed(1)}% success rate`}
                  />
                  <StatItem
                    icon={<Target className="w-5 h-5 text-green-500" />}
                    value={
                      leetcodeUserProfile.submitStats.acSubmissionNum[1].count ||
                      0
                    }
                    label="Easy Problems"
                    subtitle={`${leetcodeUserProfile.submitStats.acSubmissionNum[1].submissions} submissions`}
                  />
                  <StatItem
                    icon={<Target className="w-5 h-5 text-yellow-500" />}
                    value={
                      leetcodeUserProfile.submitStats.acSubmissionNum[2].count ||
                      0
                    }
                    label="Medium Problems"
                    subtitle={`${leetcodeUserProfile.submitStats.acSubmissionNum[2].submissions} submissions`}
                  />
                  <StatItem
                    icon={<Target className="w-5 h-5 text-red-500" />}
                    value={
                      leetcodeUserProfile.submitStats.acSubmissionNum[3].count ||
                      0
                    }
                    label="Hard Problems"
                    subtitle={`${leetcodeUserProfile.submitStats.acSubmissionNum[3].submissions} submissions`}
                  />
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold mb-3 flex items-center">
                  <Award className="w-5 h-5 mr-2 text-primary" />
                  Performance Metrics
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <StatItem
                    icon={<TrendingUp className="w-5 h-5 text-purple-500" />}
                    value={leetcodeUserProfile.profile.ranking}
                    label="Global Ranking"
                    subtitle="Current Position"
                  />
                  <StatItem
                    icon={<Star className="w-5 h-5 text-yellow-500" />}
                    value={leetcodeUserProfile.profile.starRating}
                    label="Contest Rating"
                    subtitle={`Level ${Math.floor(leetcodeUserProfile.profile.starRating / 500) + 1}`}
                  />
                  <StatItem
                    icon={<CheckCircle className="w-5 h-5 text-green-500" />}
                    value={leetcodeUserProfile.contributions.points}
                    label="Contribution Points"
                    subtitle="Community Impact"
                  />
                </div>
              </div>
            </div>
            <br></br>
          {/* Original Badges */}
          <div className="grid gap-6 md:grid-cols-3">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-6">Recent Badges</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {leetcodeUserProfile.badges.slice(0, 5).map((badge) => (
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
              </div>
            </div>
          </div>
            {/* Submission Timeline */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Timer className="w-5 h-5 mr-2 text-primary" />
                Submission Timeline
              </h3>
              <div className="bg-secondary/30 rounded-lg p-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <TimelineStat
                    label="All Time"
                    value={leetcodeUserProfile.submitStats.totalSubmissionNum[0].count}
                    total={leetcodeUserProfile.submitStats.totalSubmissionNum[0].count}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mt-8">
            <SocialLink
              href={leetcodeUserProfile.githubUrl}
              icon={<Github className="w-6 h-6" />}
            />
            <SocialLink
              href={leetcodeUserProfile.linkedinUrl}
              icon={<Linkedin className="w-6 h-6" />}
            />
            <SocialLink
              href={leetcodeUserProfile.twitterUrl!}
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
                    <Skeleton key={item} className="h-20 w-full" />
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