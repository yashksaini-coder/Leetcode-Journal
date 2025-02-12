"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";

export const HeroSection = () => {
  const { theme } = useTheme();
  return (
    <section className="container w-full mx-auto">
      <div className="grid place-items-center lg:max-w-screen-xl gap-8 mx-auto py-20 md:py-32">
        <div className="text-center space-y-8">
          <Badge variant="outline" className="text-sm py-2">
            <span className="mr-2 text-primary">
              <Badge className="bg-indigo-400">New</Badge>
            </span>
            <span>Track Your Progress</span>
          </Badge>

          <div className="max-w-screen-md mx-auto text-center text-4xl md:text-6xl font-bold">
            <h1>
              Welcome to
              <span className="text-transparent px-2 bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text">
                LeetCode Journal
              </span>
              - Your Coding Companion
            </h1>
          </div>

          <p className="max-w-screen-sm mx-auto text-xl text-muted-foreground">
            {`LeetCode Journal helps you organize your problem-solving journey, track your progress, and achieve your coding interview goals.`}
          </p>

          <div className="space-y-4 md:space-y-0 md:space-x-4">
            <Link href="/dashboard">
              <Button className="w-5/6 md:w-1/4 font-bold group/arrow">
                Get Started
                <ArrowRight className="size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Button
              asChild
              variant="secondary"
              className="w-5/6 md:w-1/4 font-bold"
            >
              <Link
                href="https://github.com/yashksaini-coder/Leetcode-Journal"
                target="_blank"
              >
                Github respository
              </Link>
            </Button>
          </div>
        </div>

        <div className="relative group mt-14">
          <div className="absolute top-2 lg:-top-8 left-1/2 transform -translate-x-1/2 w-[90%] mx-auto h-24 lg:h-80 bg-indigo-500/50 rounded-full blur-3xl"></div>
          <Image
            width={1200}
            height={1200}
            className="w-full md:w-[1200px] mx-auto rounded-3xl relative leading-none flex items-center border-[7px] border-secondary"
            src={
              "https://media-hosting.imagekit.io//4b4efe3445654b3a/Screenshot%20(70).png?Expires=1833951335&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=HNAahPu-sVx5W-kJYp8u464sJkmi2sZlTHN-kLRiT47bkWVQCpCDcGkq24vVNWIQXG-mC67DPoT8xqsWAZZOc4~aoZaHAHsOFKdBuGqg15bwNhaH6a~MljHawD9eX74RYn6TwY8lMvsoh4m9NjpQ7VrJQ2Pcs5wCLS7wVcuXjuDMfmDagT2SFMiig45oVj1Fj0fZoPmio0DCAx2dQj7vX0g9yp6cB32-Y9B6jQrFrFTnaTZ5HViH5-Yvnxc7oYmVhc6sXQ8frZLRmGdqv2HC6SRZfMjPsviwTbXu~4R6YfsHbnDuKB6RWEssFG8lHSSu1uiBIJWJY3PFF~es79j9cw__"
            }
            alt="dashboard"
          />

          <div className="absolute bottom-0 left-0 w-full h-20 md:h-28 bg-gradient-to-b from-background/0 via-background/50 to-background rounded-lg"></div>
        </div>
      </div>
    </section>
  );
};
