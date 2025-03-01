import { AppSidebar } from "@/components/dashboardComponents/AppSidebar";
import { DashboardNavbar } from "@/components/dashboardComponents/DashboardNavbar";
import MobileSidear from "@/components/dashboardComponents/MobileSidebar";
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
    <main className="min-h-screen max-w-7xl mx-auto px-3">
      <DashboardNavbar />
      <div className="md:hidden block fixed top-1 left-1 w-full z-50">
        <MobileSidear/>
      </div>
      <div className="w-full dark:bg-neutral-900 dark: text-white bg-neutral-200 md:rounded-xl rounded-sm">{children}</div>
    </main>
  );
}
