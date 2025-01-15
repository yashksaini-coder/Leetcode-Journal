import { AppSidebar } from "@/components/dashboardComponents/AppSidebar";
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
    <body>
      <main className="flex min-h-screen overflow-hidden md:gap-3 md:p-3 h-full">
        <div className="md:block hidden">
          <AppSidebar />
        </div>
        <div className="md:hidden block fixed top-1 left-1 w-full z-50">
          <MobileSidear/>
        </div>
        <div className="w-full dark:bg-neutral-900 md:p-6 p-3 bg-neutral-200 md:rounded-xl rounded-sm">{children}</div>
      </main>
    </body>
  );
}
