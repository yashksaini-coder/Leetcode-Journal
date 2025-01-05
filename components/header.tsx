'use client'
import { FC, useState } from "react";
import Link from "next/link"; 
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";

const Navbar: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header>
     
      <nav className="flex justify-between items-center px-6 py-4 bg-gray-900 text-white dark:bg-gray-800">
        <div className="flex items-center space-x-2">
          <span className="text-2xl font-bold">📓</span>
          <span className="text-xl font-semibold">LeetCodeJournal</span>
        </div>
        <div className="hidden lg:flex space-x-6">
          <Link href="#" className="hover:text-purple-400 hover:animate-spin">
            Home
          </Link>
          <Link href="#" className="hover:text-purple-400 hover:animate-pulse">
            Features
          </Link>
          <Link href="#" className="hover:text-purple-400 hover:animate-bounce">
            How it Works
          </Link>
          <Link href="#" className="hover:text-purple-400 hover:animate-ping">
            FAQs
          </Link>
          <Link href="#" className="hover:text-purple-400 hover:animate-bounce">
            Blog
          </Link>
        </div>
        <div className="hidden lg:flex items-center space-x-4">
          <Link href="#" className="hover:text-gray-400">
            Log in
          </Link>
          <Button className="bg-purple-500 hover:bg-purple-600">Sign up</Button>
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
