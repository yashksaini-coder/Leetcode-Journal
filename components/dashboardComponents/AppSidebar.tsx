"use client";

import * as React from "react";
import {
  Moon,
  Sun,
  LogOut,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { SidebarData } from "@/data/SidebarData";

export function AppSidebar() {
  const { setTheme, theme } = useTheme();
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = React.useState(false);

  return (
    <aside
      className={cn(
        "h-full bg-neutral-200 dark:bg-neutral-900 rounded-sm md:rounded-xl flex flex-col transition-all duration-300 ease-in-out",
        isCollapsed ? "md:w-16 w-14" : "w-60"
      )}
    >
      <div className="p-4 border-b flex items-center justify-between">
        {!isCollapsed && <h2 className="text-lg font-semibold">Dashboard</h2>}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="ml-auto"
        >
          {isCollapsed ? (
            <ChevronRight className="h-4 w-4" />
          ) : (
            <ChevronLeft className="h-4 w-4" />
          )}
        </Button>
      </div>
      <nav className="flex-grow overflow-y-auto py-4">
        <ul className="space-y-2 px-2">
          {SidebarData.map((item, index) => {
            const isActive = pathname === item.href;
            return (
              <li key={index}>
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center p-2 rounded-lg transition-colors duration-200",
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "hover:bg-primary/10 dark:hover:bg-primary/20",
                    isCollapsed ? "justify-center" : "justify-start"
                  )}
                >
                  <item.icon
                    className={cn("h-6 w-6", isCollapsed ? "" : "mr-2")}
                  />
                  {!isCollapsed && <span>{item.title}</span>}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className={cn("p-3 border-t")}>
        <div
          className={cn(
            "flex",
            isCollapsed ? "flex-col space-y-2" : "justify-between"
          )}
        >
          <Button
            className="rounded-full"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
          <Button variant="outline" size="icon">
            <LogOut className="h-[1.2rem] w-[1.2rem]" />
            <span className="sr-only">Logout</span>
          </Button>
        </div>
      </div>
    </aside>
  );
}
