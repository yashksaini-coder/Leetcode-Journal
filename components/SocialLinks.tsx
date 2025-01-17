"use client";

import React from 'react'
import { motion } from 'framer-motion'
import { Github, Twitter, Linkedin } from 'lucide-react'

const socialLinks = [
  { name: 'GitHub', icon: Github, url: "https://github.com/yashksaini-coder" },
  { name: 'Twitter', icon: Twitter, url: "https://twitter.com/EasycodesDev" },
  { name: 'LinkedIn', icon: Linkedin, url: "https://linkedin.com/in/yashksaini" },
]

export function SocialLinks() {
  return (
    <div className="flex space-x-4">
      {socialLinks.map((link, index) => (
        <motion.a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className=" hover:text-primary"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          <link.icon className="h-6 w-6" />
          <span className="sr-only">{link.name}</span>
        </motion.a>
      ))}
    </div>
  )
}

