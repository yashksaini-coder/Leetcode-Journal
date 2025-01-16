"use client";

import { RainbowButton } from "@/components/ui/rainbow-button";
import { SocialLinks } from "@/components/SocialLinks";
import { BookOpen, Github } from "lucide-react";
import { useEffect, useState } from "react";
import { Separator } from "./ui/separator";
import Link from "next/link";

export default function Footer() {
    const [currentYear, setCurrentYear] = useState<number>(new Date().getFullYear());

    useEffect(() => {
        setCurrentYear(new Date().getFullYear());
    }, []);

    return (
        <footer className="w-full pt-8 pb-4 px-4 md:px-6 border-t bg-secondary">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center mb-8">
                    <div className="space-y-2 ">
                        <div className="flex items-center space-x-4 mb-4 md:mb-0">
                            <BookOpen className="h-6 w-6 text-primary" />
                            <span className="font-bold text-lg">LeetCode Journal</span>

                        </div>
                        <p className="text-gray-400">The Journey to Coding Mastery Begins Now</p>
                    </div>

                    <div className="flex items-center space-x-4 -ml-2">
                        <RainbowButton className="hidden md:inline-flex items-center space-x-2">
                            <a
                                href="https://github.com/yashksaini-coder/leetcode-journal"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center"
                            >
                                <Github className="mr-2 h-4 w-4" />
                                <span>Star on GitHub</span>
                            </a>
                        </RainbowButton>
                        <SocialLinks />
                    </div>
                </div>
                <div className="flex justify-between items-center ">
                    <div className="">
                        <div className="text-md">
                            <div className="">Quick Links</div>
                            <ul className="space-y-2 text-muted-foreground mt-4 ">
                                <li>
                                    <Link href="/">Home</Link>
                                </li>
                                <li>
                                    <Link href="/learn-more">About Us</Link>
                                </li>
                                <li>
                                    <Link href="/FAQ">FAQ</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="">
                        <div className="text-md text-right">
                            <div className="">Support</div>
                            <ul className="space-y-2 text-muted-foreground mt-4">
                                <li>
                                    <Link href="#">Contact Us</Link>
                                </li>
                                <li>
                                    <Link href="#">Privacy Policy</Link>
                                </li>
                                <li>
                                    <Link href="#">Terms of Service</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <Separator className="my-4 bg-muted-foreground" />
                <div className="flex flex-col md:flex-row justify-start items-center border-t border-border">
                    <p className="text-sm text-muted-foreground mb-4 md:mb-0">
                        © 2025 LeetCode Journal. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
