import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from 'next/link'
import Navbar1 from "@/components/navbar"
import { BlogSidebar } from "@/components/BlogSidebar"
import { BookOpen, Github } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { SocialLinks } from '@/components/SocialLinks'

interface Post {
  slug: string
  title: string
  date: string
  description: string
  tags: string[]
}

const posts: Post[] = [
    {
      slug: 'release-v2',
      title: 'Release of Tailwind Nextjs Starter Blog v2.0',
      date: 'August 5, 2023',
      description: 'Release of Tailwind Nextjs Starter Blog template v2.0, refactored with Nextjs App directory and React Server Components setup.',
      tags: ['NEXT-JS', 'TAILWIND', 'GUIDE', 'FEATURE'],
    },
    {
      slug: 'new-features-v1',
      title: 'New features in v1',
      date: 'August 7, 2021',
      description: 'An overview of the new features released in v1 - code block copy, multiple authors, frontmatter layout and more',
      tags: ['NEXT-JS', 'TAILWIND', 'GUIDE'],
    },
    {
      slug: 'multi-part-posts',
      title: 'Introducing Multi-part Posts with Nested Routing',
      date: 'May 2, 2021',
      description: 'The blog template supports posts in nested sub-folders. This can be used to group posts of similar content e.g. a multi-part course. This post is itself an example of a nested route!',
      tags: ['FEATURE', 'NEXT-JS'],
    },
    {
      slug: 'seo-optimization-guide',
      title: 'SEO Optimization for Next.js Blogs',
      date: 'March 15, 2023',
      description: 'A step-by-step guide to optimizing your Next.js blog for search engines using dynamic metadata, Open Graph, and structured data.',
      tags: ['NEXT-JS', 'SEO', 'GUIDE'],
    },
    {
      slug: 'tailwind-best-practices',
      title: 'Best Practices for Tailwind CSS',
      date: 'July 10, 2022',
      description: 'Learn how to use Tailwind CSS effectively with reusable components, themes, and responsive design techniques.',
      tags: ['TAILWIND', 'CSS', 'GUIDE'],
    },
    {
      slug: 'performance-improvements',
      title: 'Boosting Performance in Next.js Apps',
      date: 'November 22, 2023',
      description: 'Explore techniques to enhance the performance of your Next.js applications with lazy loading, dynamic imports, and more.',
      tags: ['NEXT-JS', 'PERFORMANCE', 'FEATURE'],
    },
    {
      slug: 'markdown-integration',
      title: 'Markdown Integration in Next.js',
      date: 'January 5, 2022',
      description: 'Understand how to use markdown files with Next.js to create a seamless blogging experience.',
      tags: ['NEXT-JS', 'MARKDOWN', 'GUIDE'],
    },
    {
      slug: 'custom-themes',
      title: 'Creating Custom Themes with Tailwind CSS',
      date: 'February 18, 2023',
      description: 'Learn how to build and apply custom themes using Tailwind CSS for consistent branding across your web apps.',
      tags: ['TAILWIND', 'CUSTOMIZATION', 'GUIDE'],
    },
    {
      slug: 'dynamic-routing',
      title: 'Understanding Dynamic Routing in Next.js',
      date: 'June 20, 2021',
      description: 'A comprehensive explanation of dynamic routing and how to implement it in Next.js projects.',
      tags: ['NEXT-JS', 'ROUTING', 'FEATURE'],
    },
    {
      slug: 'accessibility-tips',
      title: 'Web Accessibility Tips for Tailwind CSS Users',
      date: 'October 10, 2022',
      description: 'Discover how to make your Tailwind CSS-based websites more accessible to all users.',
      tags: ['TAILWIND', 'ACCESSIBILITY', 'GUIDE'],
    },
  ];
  
export default function BlogPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const tag = searchParams.tag as string | undefined
  
  const filteredPosts = tag
    ? posts.filter(post => post.tags.includes(tag))
    : posts

  return (
    <div className="space-y-10 bg-gradient-to-br from-purple-200 via-white to-purple-200 dark:from-purple-900 dark:via-black dark:to-purple-900 bg-texture">
        <Navbar1 />
        <div className="container mx-auto p-4 flex w-full bg-transperent">
            <div className="flex-1 w-[20%] mr-4">
                <BlogSidebar />
            </div> 
            <div className="space-y-10 w-[80%]">
            {tag && (
                <div className="text-lg font-semibold">
                Showing posts tagged with: <span className="text-primary">{tag}</span>
                </div>
            )}
            <div className="grid gap-6 sm:grid-cols-1">
                {filteredPosts.map((post) => (
                <Card key={post.slug} className="group relative overflow-hidden transition-shadow hover:shadow-lg bg-transperent border border-zinc-800 dark:border-zinc-500 hover:bg-white/80 dark:hover:bg-gray-800/80">
                    <Link href={`/blog/${post.slug}`} className="absolute inset-0 z-10">
                    <span className="sr-only">View {post.title}</span>
                    </Link>
                    <CardHeader className="space-y-2">
                    <div className="text-sm text-muted-foreground">
                        {post.date}
                    </div>
                    <CardTitle className="line-clamp-2 group-hover:text-primary transition-colors">
                        {post.title}
                    </CardTitle>
                    <div className="flex flex-wrap gap-2">
                        {post.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="bg-transperent border border-zinc-800 dark:border-zinc-500">
                            {tag}
                        </Badge>
                        ))}
                    </div>
                    </CardHeader>
                    <CardContent>
                    <p className="text-muted-foreground">{post.description}</p>
                    </CardContent>
                </Card>
                ))}
            </div>
            {filteredPosts.length === 0 && (
                <div className="text-center text-muted-foreground">
                No posts found for the selected tag.
                </div>
            )}
            </div>
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

