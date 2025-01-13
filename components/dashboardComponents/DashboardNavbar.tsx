"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { signout } from "@/app/actions/action";

const Navbar = ({
  userId,
  isLoading,
}: {
  userId?: string;
  isLoading: boolean;
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="p-2">
      <nav className="flex justify-between items-center px-6 py-4 bg-secondary/30 backdrop-blur-3xl rounded-xl ">
        <div className="flex items-center space-x-2">
          <span className="text-2xl font-bold">📓</span>
          <span className="text-xl font-semibold">LeetCodeJournal</span>
        </div>
        {/* <div className="hidden lg:flex space-x-6">
          <Link href="/" className="hover:text-purple-400 ">
            Home
          </Link>
          <Link href="/learn-more" className="hover:text-purple-400 ">
            How it Works
          </Link>
          <Link href="/FAQ" className="hover:text-purple-400 ">
            FAQs
          </Link>
        </div> */}
        <div className="hidden lg:flex items-center space-x-4">
          {!isLoading ? (
            userId ? (
              <Button variant="destructive" onClick={signout}>
                Sign Out
              </Button>
            ) : (
              <>
                <Link href="/auth/signin" className="hover:text-neutral-400">
                  Log in
                </Link>
                <Button className="bg-purple-500 hover:bg-purple-600">
                  <Link href="/auth/register" className="">
                    Sign up
                  </Link>
                </Button>
              </>
            )
          ) : (
            ""
          )}
          <ThemeToggle />
        </div>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden focus:outline-none"
        >
          {isMenuOpen ? "✖️" : "☰"}
        </button>
      </nav>

      {isMenuOpen && (
        <div className="fixed inset-x-0 top-[65px] z-50 border-b bg-background p-6 lg:hidden">
          <nav className="flex flex-col space-y-4">
            <Link
              href="#"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="#"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              href="#"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              How it Works
            </Link>
            <Link
              href="#"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQs
            </Link>
            <Link
              href="#"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
