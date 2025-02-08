"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { TabContainer } from "./components/TabContainer";
// import Navbar1 from "@/components/navbar";
import Footer from "@/components/footer";
import ShinyButton from "@/components/ui/shiny-button";
// Removed the old navbar componet raising the conflict
// by: Yash Kumar Saini
export default function LearnMorePage() {
  return (
    <div className="">
      {/* <Navbar1 /> */}
      <div className="min-h-screen bg-grey-500 bg-texture">
        <div className="container mx-auto px-4 md:px-32 pb-16 pt-8 md:pt-16">
          {/* Changed the x-padding for small devices + reduced y-padding-top for small devices */}
          <motion.h1
            className="text-5xl font-bold text-center mb-8 text-white-800 dark:text-grey-300"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Discover LeetCode Journal
          </motion.h1>

          <TabContainer />

          <motion.div
            className="text-center bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg p-8 shadow-lg mt-16"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-4 text-grey-800 dark:text-grey-300">
              Want to Contribute ?
            </h2>
            <p className="text-xl mb-8 text-grey-700 dark:text-grey-200">
              Join hundreds of developers who have contributed to making
              LeetCode Journal better for everyone.
            </p>
            <ShinyButton>
              <Link
                href="https://github.com/yashksaini-coder/Leetcode-Journal"
                target="_blank"
              >
                Contribute Now
              </Link>
            </ShinyButton>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
