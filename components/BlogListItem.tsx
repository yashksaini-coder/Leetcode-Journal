'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { getBlogsByYear } from '@/lib/getBlogs'

export function BlogListItem({ blog, index }: { blog: any; index: number }) {
  return (
    <motion.li
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
    >
      <Link
        href={`/blogs/${blog.slug}`}
        className="block p-4 rounded-lg bg-card text-card-foreground shadow-sm hover:shadow-md transition-shadow"
      >
        <h3 className="text-lg font-semibold mb-2">{blog.title}</h3>
        <p className="text-sm text-muted-foreground">{blog.date}</p>
      </Link>
    </motion.li>
  )
}

