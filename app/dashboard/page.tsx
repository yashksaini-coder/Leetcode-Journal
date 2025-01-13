"use client";

import { useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { useAuthStore } from "@/store/AuthStore/useAuthStore";
import DashboardNavbar from "@/components/dashboardComponents/DashboardNavbar";
import { DashboardContentSkeleton } from "@/components/dashboardComponents/DashboardContentSkeleton";

function DashboardContent({ authUser }: any) {
  return (
    <main className="container mx-auto p-4 space-y-6">
      <h1 className="text-3xl font-bold">Welcome, {authUser?.fullName}</h1>
      <Card>
        <CardHeader>
          <CardTitle>Your Profile</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <p>
            <span className="font-medium">LeetCode Username:</span>{" "}
            {authUser?.leetcodeUsername}
          </p>
          <p>
            <span className="font-medium">Gender:</span> {authUser?.gender}
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>LeetCode Stats</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            LeetCode stats are coming soon!
          </p>
        </CardContent>
      </Card>
    </main>
  );
}

export default function Dashboard() {
  const { authUser, fetchAuthUser, authUserLoading } = useAuthStore();

  useEffect(() => {
    fetchAuthUser();
  }, [fetchAuthUser]);
  return (
    <div className="min-h-screen w-full">
      <DashboardNavbar isLoading={authUserLoading} userId={authUser?.id} />
      {authUserLoading ? (
        <DashboardContentSkeleton />
      ) : (
        <DashboardContent authUser={authUser} />
      )}
    </div>
  );
}
