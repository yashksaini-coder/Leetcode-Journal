import { DashboardNavbar } from "@/components/dashboardComponents/DashboardNavbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "LeetCode Journal",
  description: "Track your LeetCode progress and boost your coding skills",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6">
        {/* Top navbar */}
        <DashboardNavbar />
        
        {/* Main content with minimal spacing */}
        <div className="mt-2 sm:mt-3 md:mt-4">
          <div className="rounded-lg overflow-hidden shadow-sm">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
