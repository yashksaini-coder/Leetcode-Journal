"use client";

import { RainbowButton } from "@/components/ui/rainbow-button";
import { SocialLinks } from "@/components/SocialLinks";
import { BookOpen, Github } from "lucide-react";
import { useEffect, useState } from "react";
import { Separator } from "./ui/separator";

export default function Footer() {
    const [currentYear, setCurrentYear] = useState<number>(new Date().getFullYear());

    useEffect(() => {
        setCurrentYear(new Date().getFullYear());
    }, []);

    return (
        <footer className="w-full pt-12 pb-12 px-4 md:px-32 border-t bg-card DEFAULT text-white">
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
                <p className="text-sm text-muted-foreground mb-4 md:mb-0">
                        © 2025 LeetCode Journal. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
