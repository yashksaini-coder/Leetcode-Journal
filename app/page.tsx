"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Navbar1 from "@/components/navbar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Footer from "@/components/footer";
import { useRouter } from "next/navigation";
import { SparklesText } from "@/components/ui/sparkles-text";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import SupportSection from "@/components/ui/support-section";

//@ts-ignore
const Highlight = ({ children, className }) => {
  const words = children.split(" ");
  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "relative inline-block pb-1 px-1 py-2",
        "rounded-lg",
        className
      )}
    >
      <motion.div
        className="absolute inset-0 rounded-lg"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        style={{
          background:
            "linear-gradient(to right, rgb(129 140 248), rgb(192 132 252), rgb(244 114 182))",
          originX: 0,
        }}
      />

      {words.map((word: any, i: any) => (
        <motion.span
          key={i}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.5,
            delay: 0.4,
            ease: "easeOut",
          }}
          className="relative inline-block mx-1"
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
};

//@ts-ignore
const Star = ({ style }) => (
  <div
    className="star-wrapper"
    style={{
      position: "absolute",
      ...style,
    }}
  >
    <svg
      className="star"
      viewBox="0 0 24 24"
      width="100%"
      height="100%"
      fill="currentColor"
    >
      <path d="M12 2L7 12L12 22L17 12L12 2Z M2 12L12 7L22 12L12 17L2 12Z" />
    </svg>
  </div>
);

export default function LandingPage() {
  const router = useRouter();
  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Header */}
      <Navbar1 />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden bg-background">
        <BackgroundBeamsWithCollision>
          {/* <NetworkBackground /> */}
          <div className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col items-center justify-center h-full text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-7xl/none">
              <div className="relative font-medium text-[3rem] sm:text-[4rem] md:text-[5rem] leading-none text-foreground">
                <span className="relative inline-block">
                  <SparklesText text="LeetCode Journal" className="text-8xl"  sparklesCount={20}/>
                </span>
              </div>
              <p></p>
              <span className="inline-block mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl/none">
                <Highlight className="px-2 sm:px-4 md:px-6 lg:px-10 py-3">
                  Track Your Progress
                </Highlight>
              </span>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl/none relative"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-transparent" />
              </motion.div>
            </h1>

            <p className="mx-auto max-w-[700px] text-muted-foreground text-xl mt-6">
              LeetCode Journal helps you organize your problem-solving journey,
              track your progress, and achieve your coding interview goals.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <Button
                size="lg"
                className="rounded-full text-md px-10 py-6 font-bold transform transition-all duration-200 hover:scale-105 bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600"
                onClick={() => router.push("/auth/register")}
              >
                Get Started
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-full text-md px-10 py-6 font-bold transform transition-all duration-200 hover:scale-105 border-purple-500/50 hover:bg-purple-500/10"
                onClick={() => router.push("/learn-more")}
              >
                Learn More
              </Button>
            </div>
          </div>
          </BackgroundBeamsWithCollision>
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
        <SupportSection />
        <Footer />
      </main>
    </div>
  );
}

// if (typeof document !== "undefined") {
//   const style = document.createElement("style");
//   style.textContent = starStyles;
//   document.head.appendChild(style);
// }
