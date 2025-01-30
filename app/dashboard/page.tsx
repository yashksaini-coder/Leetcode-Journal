"use client";
import React from "react";
import Image from "next/image";
import { useLeetcodeStore } from "@/store/LeetcodeStore/useLeetcodeStore";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Github, Linkedin, Twitter, Award, Book, Star } from "lucide-react";
export default function Dashboard() {
  const { fetchLeetcodeUserProfile, leetcodeUserProfile } = useLeetcodeStore();
  React.useEffect(() => {
    fetchLeetcodeUserProfile();
  }, [fetchLeetcodeUserProfile]);
  if (!leetcodeUserProfile) {
    return <DashboardSkeleton />;
  }
  return (
    <div className="flex flex-col min-h-screen p-4 sm:p-6 md:p-8">
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
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-3">Statistics</h3>
              <div className="grid grid-cols-2 gap-4">
                <StatItem
                  icon={<Book className="w-5 h-5" />}
                  value={
                    leetcodeUserProfile.submitStats.acSubmissionNum[0].count ||
                    0
                  }
                  label="Problems Solved"
                />
                <StatItem
                  icon={<Award className="w-5 h-5" />}
                  value={leetcodeUserProfile.contributions.points}
                  label="Contribution Points"
                />
                <StatItem
                  icon={<Star className="w-5 h-5" />}
                  value={leetcodeUserProfile.profile.starRating}
                  label="Star Rating"
                />
                <StatItem
                  icon={<Award className="w-5 h-5" />}
                  value={leetcodeUserProfile.profile.ranking}
                  label="Global Ranking"
                />
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-3">Recent Badges</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {leetcodeUserProfile.badges.slice(0, 6).map((badge) => (
                  <div
                    key={badge.id}
                    className="flex flex-col items-center p-2 bg-secondary rounded-lg"
                  >
                    <div className="relative w-12 h-12 mb-2">
                      <Image
                        src={badge.icon || "/placeholder.svg"}
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
}: {
  icon: React.ReactNode;
  value: number;
  label: string;
}) {
  return (
    <div className="flex items-center space-x-3 bg-secondary/50 rounded-lg p-3">
      {icon}
      <div>
        <div className="text-2xl font-bold">{value}</div>
        <div className="text-sm text-muted-foreground">{label}</div>
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