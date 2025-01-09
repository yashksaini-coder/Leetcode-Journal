import { notFound } from 'next/navigation'
import { Badge } from "@/components/ui/badge"
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

interface Post {
  slug: string
  title: string
  date: string
  content: string
  tags: string[]
}

const posts: Record<string, Post> = {
  'release-v2': {
    slug: 'release-v2',
    title: 'Release of Tailwind Nextjs Starter Blog v2.0',
    date: 'August 5, 2023',
    content: 'Release of Tailwind Nextjs Starter Blog template v2.0, refactored with Nextjs App directory and React Server Components setup.',
    tags: ['NEXT-JS', 'TAILWIND', 'GUIDE', 'FEATURE'],
  },
  'new-features-v1': {
    slug: 'new-features-v1',
    title: 'New features in v1',
    date: 'August 7, 2021',
    content: 'An overview of the new features released in v1 - code block copy, multiple authors, frontmatter layout and more',
    tags: ['NEXT-JS', 'TAILWIND', 'GUIDE'],
  },
  'multi-part-posts': {
    slug: 'multi-part-posts',
    title: 'Introducing Multi-part Posts with Nested Routing',
    date: 'May 2, 2021',
    content: 'The blog template supports posts in nested sub-folders. This can be used to group posts of similar content e.g. a multi-part course. This post is itself an example of a nested route!',
    tags: ['FEATURE', 'NEXT-JS'],
  },
  'seo-optimization-guide': {
    slug: 'seo-optimization-guide',
    title: 'SEO Optimization for Next.js Blogs',
    date: 'March 15, 2023',
    content: 'A step-by-step guide to optimizing your Next.js blog for search engines using dynamic metadata, Open Graph, and structured data.',
    tags: ['NEXT-JS', 'SEO', 'GUIDE'],
  },
  'tailwind-best-practices': {
    slug: 'tailwind-best-practices',
    title: 'Best Practices for Tailwind CSS',
    date: 'July 10, 2022',
    content: 'Learn how to use Tailwind CSS effectively with reusable components, themes, and responsive design techniques.',
    tags: ['TAILWIND', 'CSS', 'GUIDE'],
  },
  'performance-improvements': {
    slug: 'performance-improvements',
    title: 'Boosting Performance in Next.js Apps',
    date: 'November 22, 2023',
    content: 'Explore techniques to enhance the performance of your Next.js applications with lazy loading, dynamic imports, and more.',
    tags: ['NEXT-JS', 'PERFORMANCE', 'FEATURE'],
  },
  'markdown-integration': {
    slug: 'markdown-integration',
    title: 'Markdown Integration in Next.js',
    date: 'January 5, 2022',
    content: 'Understand how to use markdown files with Next.js to create a seamless blogging experience.',
    tags: ['NEXT-JS', 'MARKDOWN', 'GUIDE'],
  },
  'custom-themes': {
    slug: 'custom-themes',
    title: 'Creating Custom Themes with Tailwind CSS',
    date: 'February 18, 2023',
    content: 'Learn how to build and apply custom themes using Tailwind CSS for consistent branding across your web apps.',
    tags: ['TAILWIND', 'CUSTOMIZATION', 'GUIDE'],
  },
  'dynamic-routing': {
    slug: 'dynamic-routing',
    title: 'Understanding Dynamic Routing in Next.js',
    date: 'June 20, 2021',
    content: 'A comprehensive explanation of dynamic routing and how to implement it in Next.js projects.',
    tags: ['NEXT-JS', 'ROUTING', 'FEATURE'],
  },
  'accessibility-tips': {
    slug: 'accessibility-tips',
    title: 'Web Accessibility Tips for Tailwind CSS Users',
    date: 'October 10, 2022',
    content: 'Discover how to make your Tailwind CSS-based websites more accessible to all users.',
    tags: ['TAILWIND', 'ACCESSIBILITY', 'GUIDE'],
  },
};


export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = posts[params.slug]

  if (!post) {
    notFound()
  }

  return (
    <article className="max-w-2xl mx-auto">
      <Link href="/blog" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-8">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to all posts
      </Link>
      <div className="space-y-4">
        <div className="text-sm text-muted-foreground">{post.date}</div>
        <h1 className="text-4xl font-bold">{post.title}</h1>
        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
        <div className="prose dark:prose-invert mt-8">
          {post.content}
        </div>
      </div>
    </article>
  )
}

