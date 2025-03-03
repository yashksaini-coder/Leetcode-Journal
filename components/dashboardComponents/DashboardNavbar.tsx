"use client";
import { Menu } from "lucide-react";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { ToggleTheme } from "../DashboardV2/ToggleTheme";
import Logout from "../AuthComponent/Logout";
import { SidebarData } from "@/data/SidebarData";

export const DashboardNavbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <header className="shadow-inner w-full my-3 lg:max-w-screen-xl top-5 mx-auto border border-secondary z-40 rounded-2xl flex justify-between items-center p-2 bg-secondary/30 backdrop-blur-md">
      <Link href="/" className="flex items-center font-semibold">
        <Avatar>
          <AvatarImage src="/logo.png" />
          <AvatarFallback>LC</AvatarFallback>
        </Avatar>
        Leetcode Journal
      </Link>

      {/* <!-- Mobile --> */}
      <div className="flex items-center lg:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Menu
              onClick={() => setIsOpen(!isOpen)}
              className="cursor-pointer lg:hidden"
            />
          </SheetTrigger>

            <SheetContent
            side="left"
            className="flex flex-col justify-between rounded-tr-2xl rounded-br-2xl bg-card border-secondary"
            >
            <div>
              <SheetHeader className="mb-4 ml-4">
              <SheetTitle className="flex items-center">
                <Link href="/" className="flex items-center">
                <Avatar>
                  <AvatarImage src="/logo.png" />
                  <AvatarFallback>LC</AvatarFallback>
                </Avatar>
                Leetcode Journal
                </Link>
              </SheetTitle>
              </SheetHeader>

              <div className="flex flex-col gap-2 px-2 md:px-4">
              {SidebarData.map(({ href, title }) => (
                <Button
                key={href}
                onClick={() => setIsOpen(false)}
                asChild
                variant="ghost"
                className="justify-start text-base w-full md:w-auto"
                >
                <Link href={href}>{title}</Link>
                </Button>
              ))}
              </div>
            </div>
            <div className="flex gap-2 px-2 md:px-4 mt-2 md:mt-0 w-full md:w-auto justify-between items-center sm:items-start sm:justify-start">
                <ToggleTheme />
                <Logout variant="destructive" />
              </div>
            </SheetContent>
        </Sheet>
      </div>

      {/* <!-- Desktop --> */}
      <div className="hidden lg:flex gap-2">
        {SidebarData.map(({ href, title }) => (
          <Button
            key={href}
            onClick={() => setIsOpen(false)}
            asChild
            variant="ghost"
            className="justify-start text-base"
          >
            <Link href={href}>{title}</Link>
          </Button>
        ))}
      </div>
      <div className="hidden lg:flex gap-2">
        <ToggleTheme />
        <Logout />
      </div>
    </header>
  );
};
