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
import {
  BookA,
  FileQuestion,
  Github,
  Menu,
  Settings,
  User,
} from "lucide-react";
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
        <Button size={"sm"} variant="secondary" className="bg-opacity-50">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side={"left"}>
        <SheetHeader>
          <SheetTitle>
            <h1 className="font-ClashDisplayMedium text-xl">
              LeetCode Journal.
            </h1>
            <SheetDescription className="text-neutral-500 dark:text-neutral-400">
              Your personal coding companion.
            </SheetDescription>
          </SheetTitle>
        </SheetHeader>
        <nav className="flex-grow overflow-y-auto py-4">
          <ul className="space-y-2">
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
                        : "hover:bg-primary/10 dark:hover:bg-primary/20"
                    )}
                  >
                    <item.icon className={cn("h-6 w-6 mr-2")} />
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        {/* <NavItems /> */}
        <SheetFooter className="absolute p-2 gap-1 bg-secondary/50 rounded-t-xl flex-col text-neutral-500 dark:text-neutral-400 flex items-center justify-center bottom-0 left-0 w-full">
          <Button
            onClick={toggleTheme}
            size={"sm"}
            variant={"outline"}
            className="font-semibold w-full"
          >
            {theme === "dark" ? "Light Mode" : "Dark Mode"}
          </Button>
          <Button
            onClick={signout}
            variant={"outline"}
            size={"sm"}
            className="font-semibold w-full text-red-500"
          >
            Sign Out
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
