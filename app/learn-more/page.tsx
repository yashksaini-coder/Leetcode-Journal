'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, Code, Brain, TrendingUp, Users, Zap } from 'lucide-react'
import Navbar1 from '@/components/navbar'
import { SocialLinks } from '@/components/SocialLinks'
import { Github, BookOpen } from 'lucide-react'

export default function LearnMorePage() {
  const [activeTab, setActiveTab] = useState('features')

  const features = [
    { icon: <Code className="w-6 h-6" />, title: 'Track Progress', description: 'Log solved problems and track improvement over time.' },
    { icon: <Brain className="w-6 h-6" />, title: 'Enhance Learning', description: 'Write comprehensive notes and explanations for each problem.' },
    { icon: <TrendingUp className="w-6 h-6" />, title: 'Analyze Performance', description: 'Gain insights into problem-solving patterns and focus areas.' },
    { icon: <CheckCircle className="w-6 h-6" />, title: 'Interview Prep', description: 'Organize solutions by companies and topics for targeted review.' },
    { icon: <Users className="w-6 h-6" />, title: 'Collaborate', description: 'Share insights and learn from peers in the community.' },
    { icon: <Zap className="w-6 h-6" />, title: 'Boost Efficiency', description: 'Streamline your coding practice with powerful tools and analytics.' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-100 dark:from-zinc-900 dark:via-zinc-800 dark:to-purple-900 bg-texture">
      <Navbar1 />
      <div className="container mx-auto px-4 py-16">
        <motion.h1 
          className="text-5xl font-bold text-center mb-8 text-purple-800 dark:text-purple-300"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Discover LeetCode Journal
        </motion.h1>
        
        <motion.div 
          className="max-w-3xl mx-auto mb-16"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <p className="text-xl text-center mb-8 text-purple-700 dark:text-purple-200">
            Elevate your coding practice and ace technical interviews with LeetCode Journal - your ultimate companion for mastering coding challenges.
          </p>
          <div className="flex justify-center">
            <Button asChild size="lg" className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white dark:from-purple-500 dark:to-purple-600 dark:hover:from-purple-600 dark:hover:to-purple-700">
              <Link href="/signup">Start Your Coding Journey</Link>
            </Button>
          </div>
        </motion.div>

        <div className="text-left mb-16">
            <div className='mb-8'>
                <h2 id="features" className="text-3xl font-bold mb-8 text-purple-800 dark:text-purple-300">Key Features</h2>
            </div>
            <motion.div 
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
              {features.map((feature, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="bg-white/80 dark:bg-zinc-800/80 backdrop-blur-sm border-purple-200 dark:border-purple-700 shadow-purple-100 dark:shadow-purple-900/20 shadow-lg h-full">
                    <CardHeader>
                      <CardTitle className="flex items-center text-purple-700 dark:text-purple-300">
                        {feature.icon}
                        <span className="ml-2">{feature.title}</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-purple-600 dark:text-purple-200">
                        {feature.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
        </div>
        <div className="text-left mb-16">
            <div className='mb-8'>
                <h2 id="features" className="text-3xl font-bold mb-8 text-purple-800 dark:text-purple-300">Benefits</h2>
            </div>
            <motion.div 
              className="bg-gradient-to-r from-purple-100 to-purple-200 dark:from-zinc-800 dark:to-purple-900 rounded-lg p-8 shadow-lg"
              variants={containerVariants}
            >
              <h2 className="text-3xl font-bold mb-6 text-purple-800 dark:text-purple-300">Why Choose LeetCode Journal?</h2>
              <motion.ul className="space-y-4" variants={containerVariants}>
                {[
                  'Seamless integration with your LeetCode account',
                  'Customizable templates for consistent note-taking',
                  'Advanced search and filtering options',
                  'Progress visualization and performance analytics',
                  'Collaborative features for group study and peer review',
                  'Mobile-friendly interface for on-the-go learning'
                ].map((benefit, index) => (
                  <motion.li key={index} className="flex items-start" variants={itemVariants}>
                    <CheckCircle className="mr-2 mt-1 text-purple-600 dark:text-purple-400 flex-shrink-0" />
                    <span className="text-purple-700 dark:text-purple-200">{benefit}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
        </div>
        <motion.div 
          className="text-center bg-white/80 dark:bg-zinc-800/80 backdrop-blur-sm rounded-lg p-8 shadow-lg"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-4 text-purple-800 dark:text-purple-300">Ready to Elevate Your Coding Journey?</h2>
          <p className="text-xl mb-8 text-purple-700 dark:text-purple-200">Join thousands of developers who have transformed their LeetCode experience with LeetCode Journal.</p>
          <Button asChild size="lg" className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white dark:from-purple-500 dark:to-purple-600 dark:hover:from-purple-600 dark:hover:to-purple-700">
            <Link href="/signup">Start Your Free Trial</Link>
          </Button>
        </motion.div>
      </div>
      <footer className="w-full py-12 px-4 md:px-6 border-t bg-secondary">
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
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground mb-4 md:mb-0">
              © 2023 LeetCode Journal. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

