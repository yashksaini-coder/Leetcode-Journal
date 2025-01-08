"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/store/AuthStore/useAuthStore";
import Navbar from "@/components/header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function Dashboard() {
  const router = useRouter();
  const { authUser, fetchAuthUser, authUserLoading } = useAuthStore();

  useEffect(() => {
    fetchAuthUser();
  }, [fetchAuthUser]);

  useEffect(() => {
    if (!authUserLoading && !authUser) {
      router.push("/auth/signin");
    }
  }, [authUserLoading, authUser, router]);

  if (authUserLoading) {
    return <DashboardSkeleton />;
  }

  if (!authUser) {
    return null;
  }

  return (
    <div className="min-h-screen">
      <Navbar userId={authUser.id} />
      <main className="container mx-auto p-4 space-y-6">
        <h1 className="text-3xl font-bold">Welcome, {authUser.fullName}</h1>

        <Card>
          <CardHeader>
            <CardTitle>Your Profile</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <p>
              <span className="font-medium">LeetCode Username:</span>{" "}
              {authUser.leetcodeUsername}
            </p>
            <p>
              <span className="font-medium">Gender:</span> {authUser.gender}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>LeetCode Stats</CardTitle>
          </CardHeader>
          <CardContent>
            {/* LeetCode stats component will go here */}
            <p className="text-muted-foreground">
              LeetCode stats are coming soon!
            </p>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}

function DashboardSkeleton() {
  return (
    <div className="min-h-screen">
      {/* <Navbar userId={} /> */}
      <main className="container mx-auto p-4 space-y-6">
        <Skeleton className="h-10 w-[250px]" />

        <Card>
          <CardHeader>
            <Skeleton className="h-7 w-[100px]" />
          </CardHeader>
          <CardContent className="space-y-2">
            <Skeleton className="h-5 w-full" />
            <Skeleton className="h-5 w-full" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <Skeleton className="h-7 w-[120px]" />
          </CardHeader>
          <CardContent>
            <Skeleton className="h-20 w-full" />
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
