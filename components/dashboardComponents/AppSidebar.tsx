"use client";

import {
  Calendar,
  ChevronUp,
  Search,
  Settings,
  User,
  User2,
} from "lucide-react";
import { useState } from "react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { signout } from "@/app/actions/action";
import Dashboard from "@/app/dashboard/page";

// Menu items.
const items = [
  {
    title: "profile",
    url: "#",
    icon: User,
  },
  {
    title: "Problems",
    url: "#",
    icon: Dashboard,
  },
  {
    title: "Calendar",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
];

export function AppSidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  return (
    <Sidebar collapsible="icon" className="border-r">
      <SidebarTrigger
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="absolute right-[-12px] top-4 z-20 flex h-6 w-6 items-center justify-center rounded-full border bg-background text-foreground shadow-sm"
      >
        {isCollapsed ? "→" : "←"}
      </SidebarTrigger>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-lg font-semibold">
            Leetcode Journal
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="group relative">
                    <a
                      href={item.url}
                      className="flex items-center gap-3 rounded-md p-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
                    >
                      <item.icon className="h-5 w-5" />
                      <span
                        className={cn(
                          "transition-opacity",
                          isCollapsed ? "opacity-0" : "opacity-100"
                        )}
                      >
                        {item.title}
                      </span>
                      {isCollapsed && (
                        <span className="absolute left-full ml-2 hidden rounded-md bg-accent px-2 py-1 text-xs group-hover:block">
                          {item.title}
                        </span>
                      )}
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="border-t">
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton className="w-full">
                  <User2 className="h-5 w-5" />
                  <span
                    className={cn(
                      "ml-2 transition-opacity",
                      isCollapsed ? "opacity-0" : "opacity-100"
                    )}
                  >
                    Username
                  </span>
                  <ChevronUp
                    className={cn(
                      "ml-auto h-4 w-4 transition-transform",
                      isCollapsed ? "opacity-0" : "opacity-100"
                    )}
                  />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent side="top" align="start" className="w-56">
                <DropdownMenuItem>
                  <span>Account</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Billing</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={signout}>
                  <span className="text-red-500">Sign out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
