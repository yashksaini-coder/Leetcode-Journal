import { AppSidebar } from "@/components/dashboardComponents/AppSidebar";
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
      <main className="flex min-h-screen overflow-hidden md:gap-3 gap-1 md:p-3 p-1 h-full">
        <div>
          <AppSidebar />
        </div>
        <div className="w-full dark:bg-neutral-900 md:p-6 p-3 bg-neutral-200 md:rounded-xl rounded-sm">{children}</div>
      </main>
    </body>
  );
}
