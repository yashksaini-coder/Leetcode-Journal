"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useAuthStore } from "@/store/AuthStore/useAuthStore";
import { DashboardContentSkeleton } from "@/components/dashboardComponents/DashboardContentSkeleton";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement);

function DashboardContent({ authUser }: any) {
  return (
    <main className="container mx-auto space-y-6">
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
    </main>
  );
}

export default function Dashboard() {
  const { authUser, fetchAuthUser, authUserLoading } = useAuthStore();
  const [leetcodeStats, setLeetcodeStats] = useState<any>(null);

  useEffect(() => {
    fetchAuthUser();
  }, [fetchAuthUser]);

  useEffect(() => {
    if (authUser?.leetcodeUsername && authUser?.id) {
      const fetchStats = async () => {
        const res = await fetch(
          `/api/leetcode?username=${authUser.leetcodeUsername}&id=${authUser.id}`,
          { method: "POST" }
        );
        if (res.ok) {
          const data = await res.json();
          setLeetcodeStats(data.stats);
        }
      };
      fetchStats();
    }
  }, [authUser]);

  // Simple bar chart config
  const chartData = {
    labels: ["Easy", "Medium", "Hard"],
    datasets: [
      {
        label: "Solved",
        data: leetcodeStats?.submitStats.acSubmissionNum?.map((i: any) => i.count) || [0, 0, 0],
        backgroundColor: ["#4ade80", "#fbbf24", "#ef4444"],
      },
    ],
  };

  return (
    <div className="w-full">
      {authUserLoading ? (
        <DashboardContentSkeleton />
      ) : (
        <>
          <DashboardContent authUser={authUser} />
          {leetcodeStats && (
            <div className="container mx-auto bg-neutral-800 rounded-lg p-3 mt-6">
              <h2 className="text-xl font-semibold mb-4">Your LeetCode Progress</h2>
              <div className="max-w-xl">
                <Bar data={chartData} />
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}
