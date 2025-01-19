"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Navbar1 from "@/components/navbar";
import PricingCard from "@/components/LandingComponents/PriceCard";
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
import "./starStyles.css";

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
            delay: 0.4 + i * 0.1,
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
          {/* <NetworkBackground /> */}
          <div className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col items-center justify-center h-full text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-7xl/none">
              <div className="relative font-medium text-[3rem] sm:text-[4rem] md:text-[5rem] leading-none text-foreground">
                <span className="relative inline-block">
                  LeetCodeJournal
                  {/* <Star
                    style={{
                      top: "-30px",
                      left: "10%",
                      width: "20px",
                      height: "20px",
                      color: "foreground",
                    }}
                  />
                  <Star
                    style={{
                      top: "20%",
                      right: "-30px",
                      width: "24px",
                      height: "24px",
                      color: "text-foreground",
                      animationDelay: "0.3s",
                    }}
                  />
                  <Star
                    style={{
                      bottom: "-20px",
                      left: "30%",
                      width: "16px",
                      height: "16px",
                      color: "text-foreground",
                      animationDelay: "0.6s",
                    }}
                  />
                  <Star
                    style={{
                      top: "40%",
                      left: "-25px",
                      width: "20px",
                      height: "20px",
                      color: "text-foreground",
                      animationDelay: "0.9s",
                    }}
                  />
                  <Star
                    style={{
                      bottom: "30%",
                      right: "20%",
                      width: "18px",
                      height: "18px",
                      color: "text-foreground",
                      animationDelay: "1.2s",
                    }}
                  /> */}
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
