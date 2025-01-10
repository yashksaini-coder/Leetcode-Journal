"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Github } from "lucide-react";
import { SocialLinks } from "@/components/SocialLinks";
import { Highlight } from "@/components/ui/hero-hihglight";
import PricingCard from "@/components/LandingComponents/PriceCard";
import Navbar1 from "@/components/navbar";
import { useEffect, useState } from "react";

export default function LandingPage() {
  const [currentYear, setCurrentYear] = useState<number>(
    new Date().getFullYear()
  );

  useEffect(() => {
    // Set the current year dynamically on mount
    setCurrentYear(new Date().getFullYear());
  }, []);
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar1 />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary overflow-hidden">
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl mb-9 font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  <p className="mb-5">Master LeetCode</p>
                  <Highlight className="dark:bg-primary/20 bg-primary/10">
                    Track Your Progress
                  </Highlight>
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  LeetCode Journal helps you organize your problem-solving
                  journey, track your progress, and achieve your coding
                  interview goals.
                </p>
              </div>
              <div className="space-x-4">
                <Link href={"/auth/register"}>
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  Get Started
                </Button>
                </Link>
                <Button variant="outline" size="lg">
                  Learn More
                  <a href=""></a>
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="w-full abo py-12 md:py-20 lg:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              Features
            </h2>
            <Tabs defaultValue="track" className="w-full max-w-4xl mx-auto">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="track">Track</TabsTrigger>
                <TabsTrigger value="analyze">Analyze</TabsTrigger>
                <TabsTrigger value="improve">Improve</TabsTrigger>
              </TabsList>
              <TabsContent value="track" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Problem Tracking</CardTitle>
                    <CardDescription>
                      Log and organize all the LeetCode problems you've
                      attempted and solved.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p>Keep a detailed record of your LeetCode journey:</p>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Mark problems as solved, attempted, or to-do</li>
                      <li>Add notes and solutions for future reference</li>
                      <li>Tag problems by difficulty, topic, or company</li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="analyze" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Progress Analytics</CardTitle>
                    <CardDescription>
                      Visualize your progress with detailed charts and
                      statistics.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p>Gain insights into your LeetCode performance:</p>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Track solved problems over time</li>
                      <li>
                        Analyze your performance by problem type and difficulty
                      </li>
                      <li>Identify areas for improvement</li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="improve" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Skill Improvement</CardTitle>
                    <CardDescription>
                      Enhance your problem-solving skills with targeted
                      practice.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p>Boost your coding interview readiness:</p>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Get personalized problem recommendations</li>
                      <li>Access curated problem sets for specific topics</li>
                      <li>Track your improvement over time</li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>
        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32">
          <section
            id="pricing"
            className="w-full max-w-5xl px-4 mx-auto pb-12 md:pb-24 lg:pb-32"
          >
            <div className="mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-2">
                Affordable Plans for Every Developer
              </h2>
              <p className="text-muted-foreground md:text-base text-center max-w-2xl mx-auto">
                Choose a plan that fits your needs and start enhancing your
                coding skills today. Whether you're a beginner or Pro, we have
                the right plan for you.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
              {[
                {
                  title: "Starter",
                  description:
                    "Perfect for beginners who are just starting their coding journey and want to keep track of their progress without any cost.",
                  price: "Free",
                  features: [
                    "Track up to 50 problems",
                    "Basic progress analytics",
                    "Access to community forums",
                    "Email support",
                    "Weekly coding tips",
                  ],
                },
                {
                  title: "Pro Coder",
                  description:
                    "Designed for dedicated developers who want to take their problem-solving skills to the next level with advanced features and insights.",
                  price: "$9.99/mo",
                  features: [
                    "Unlimited problem tracking",
                    "Advanced analytics and insights",
                    "Priority email support",
                    "Custom study plans",
                    "Access to exclusive problem sets",
                    "Monthly coding challenges",
                  ],
                },
                {
                  title: "Team Leader",
                  description:
                    "Ideal for coding groups and teams, offering collaboration tools and administrative features to manage and track team performance effectively.",
                  price: "$29.99/mo",
                  features: [
                    "All Pro features",
                    "Team collaboration tools",
                    "Admin dashboard",
                    "API access",
                    "Dedicated account manager",
                    "Team performance reports",
                    "Customizable problem sets",
                  ],
                },
              ].map((plan, index) => (
                <PricingCard
                  classname={
                    index === 1 ? "bg-emerald-800/60 md:scale-110" : ""
                  }
                  key={index}
                  description={plan.description}
                  features={plan.features}
                  price={plan.price}
                  title={plan.title}
                />
              ))}
            </div>
          </section>
        </section>
        <section className="w-full pb-12 md:pb-24 lg:pb-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Ready to Boost Your Coding Skills?
                </h2>
                <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl">
                  Join thousands of developers who are mastering LeetCode with
                  our journal. Start your journey today!
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <Button
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                  size="lg"
                >
                  Get Started for Free
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full pt-8 pb-4 px-4 md:px-6 border-t bg-secondary">
        {/* <-- Changed pt-12 into pt-8 and pb-4 to reduce unnecessary padding */}

        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <BookOpen className="h-6 w-6 text-primary" />
              <span className="font-bold text-lg">LeetCode Journal</span>
            </div>
            <div className="flex items-center space-x-4 -ml-2">
              <Button
                variant="outline"
                size="sm"
                className="hidden md:flex"
                asChild
              >
                <a
                  href="https://github.com/yashksaini-coder/leetcode-journal"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="mr-2 h-4 w-4" />
                  Star on GitHub
                </a>
              </Button>
              <SocialLinks />
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-semibold mb-3 text-lg">Product</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#features"
                    className="text-sm hover:text-primary transition-colors"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    href="#pricing"
                    className="text-sm hover:text-primary transition-colors"
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm hover:text-primary transition-colors"
                  >
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3 text-lg">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="text-sm hover:text-primary transition-colors"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm hover:text-primary transition-colors"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm hover:text-primary transition-colors"
                  >
                    Careers
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3 text-lg">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="text-sm hover:text-primary transition-colors"
                  >
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm hover:text-primary transition-colors"
                  >
                    Community
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm hover:text-primary transition-colors"
                  >
                    Support
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3 text-lg">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="text-sm hover:text-primary transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm hover:text-primary transition-colors"
                  >
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm hover:text-primary transition-colors"
                  >
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center pt-8 border-t border-border">
            {/* <-- Changed justify-between into justify-center to center the copyright statement*/}
            <p className="text-sm text-muted-foreground mb-4 md:mb-0">
              © {currentYear} LeetCode Journal. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
