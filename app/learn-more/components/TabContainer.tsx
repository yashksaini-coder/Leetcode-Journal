'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, Code, Brain, TrendingUp, Users, Zap } from 'lucide-react'

const features = [
  { icon: <Code className="w-6 h-6" />, title: 'Track Progress', description: 'Log solved problems and track improvement over time.' },
  { icon: <Brain className="w-6 h-6" />, title: 'Enhance Learning', description: 'Write comprehensive notes and explanations for each problem.' },
  { icon: <TrendingUp className="w-6 h-6" />, title: 'Analyze Performance', description: 'Gain insights into problem-solving patterns and focus areas.' },
  { icon: <CheckCircle className="w-6 h-6" />, title: 'Interview Prep', description: 'Organize solutions by companies and topics for targeted review.' },
  { icon: <Users className="w-6 h-6" />, title: 'Collaborate', description: 'Share insights and learn from peers in the community.' },
  { icon: <Zap className="w-6 h-6" />, title: 'Boost Efficiency', description: 'Streamline your coding practice with powerful tools and analytics.' },
]

const benefits = [
  'Seamless integration with your LeetCode account',
  'Customizable templates for consistent note-taking',
  'Advanced search and filtering options',
  'Progress visualization and performance analytics',
  'Collaborative features for group study and peer review',
  'Mobile-friendly interface for on-the-go learning'
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

export function TabContainer() {
  const [activeTab, setActiveTab] = useState('features')

  return (
    <Tabs defaultValue="features" className="mb-16">
      <TabsList className="grid w-full grid-cols-2 mb-8  bg-gradient-to-r from-purple-100 to-purple-200 dark:from-gray-800 dark:to-purple-900">
        <TabsTrigger value="features" onClick={() => setActiveTab('features')}>Key Features</TabsTrigger>
        <TabsTrigger value="benefits" onClick={() => setActiveTab('benefits')}>Benefits</TabsTrigger>
      </TabsList>
      <TabsContent value="features">
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={activeTab === 'features' ? "visible" : "hidden"}
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-purple-200 dark:border-purple-700 shadow-purple-100 dark:shadow-purple-900/20 shadow-lg h-full">
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
      </TabsContent>
      <TabsContent value="benefits">
        <motion.div 
          className="bg-gradient-to-r from-purple-100 to-purple-200 dark:from-gray-800 dark:to-purple-900 rounded-lg p-8 shadow-lg"
          variants={containerVariants}
          initial="hidden"
          animate={activeTab === 'benefits' ? "visible" : "hidden"}
        >
          <h2 className="text-3xl font-bold mb-6 text-purple-800 dark:text-purple-300">Why Choose LeetCode Journal?</h2>
          <motion.ul className="space-y-4" variants={containerVariants}>
            {benefits.map((benefit, index) => (
              <motion.li key={index} className="flex items-start" variants={itemVariants}>
                <CheckCircle className="mr-2 mt-1 text-purple-600 dark:text-purple-400 flex-shrink-0" />
                <span className="text-purple-700 dark:text-purple-200">{benefit}</span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </TabsContent>
    </Tabs>
  )
}

