"use client";

import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { SidebarData } from "@/data/SidebarData";
import { signout } from "@/app/actions/action";

export default function MobileSidear() {
  const { setTheme, theme } = useTheme();
  const pathname = usePathname();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  
  return (
    <Sheet>
      <SheetTrigger asChild>
      <SheetContent 
        side={"left"} 
        className="w-[280px] border-r border-secondary/20"
      >
        <SheetHeader className="space-y-2 pb-6 border-b border-secondary/20">
          <SheetTitle>
            <h1 className="font-ClashDisplayMedium text-2xl bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              LeetCode Journal
            </h1>
            <SheetDescription className="text-sm text-muted-foreground mt-1">
              Your personal coding companion
            </SheetDescription>
          </SheetTitle>
        </SheetHeader>
        
        <nav className="flex-grow overflow-y-auto py-6">
          <ul className="space-y-1.5">
            {SidebarData.map((item, index) => {
              const isActive = pathname === item.href;
              return (
                <li key={index}>
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center p-3 rounded-lg transition-all duration-200 group hover:scale-[0.98]",
                      isActive
                        ? "bg-primary text-primary-foreground font-medium shadow-sm"
                        : "hover:bg-secondary/80 dark:hover:bg-secondary/20"
                    )}
                  >
                    <item.icon className={cn(
                      "h-5 w-5 mr-3 transition-transform group-hover:scale-110",
                      isActive ? "text-primary-foreground" : "text-muted-foreground"
                    )} />
                    <span className="text-sm">{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <SheetFooter className="absolute p-4 gap-2 bg-secondary/30 backdrop-blur-sm rounded-t-xl flex-col border-t border-secondary/20 flex items-center justify-center bottom-0 left-0 w-full">
          <Button
            onClick={toggleTheme}
            size={"sm"}
            variant={"outline"}
            className="font-medium w-full hover:bg-secondary/70 transition-colors"
          >
            {theme === "dark" ? "Switch to Light" : "Switch to Dark"}
          </Button>
          <Button
            onClick={signout}
            variant={"outline"}
            size={"sm"}
            className="font-medium w-full text-destructive hover:bg-destructive/10 hover:text-destructive transition-colors"
          >
            Sign Out
          </Button>
        </SheetFooter>
      </SheetContent>
      </SheetTrigger>
    </Sheet>
  );
}
