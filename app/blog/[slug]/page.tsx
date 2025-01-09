import { notFound } from 'next/navigation'
import { Badge } from "@/components/ui/badge"
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import Navbar1 from '@/components/navbar'
import { BookOpen, Github } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SocialLinks } from '@/components/SocialLinks'

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
    content: 'The latest version of the Tailwind Nextjs Starter Blog template comes with some exciting changes and improvements. One of the major updates is the adoption of Next.js App directory, which has revolutionized the way we handle routing and data fetching. The App directory structure is more organized, making it easier to manage the application code. Moreover, React Server Components have been incorporated, allowing for server-side rendering without sacrificing performance. These updates are tailored to streamline the development process, making it easier to build, maintain, and scale your blog. The new features in version 2.0 also include improved layout flexibility, better responsiveness across devices, and optimizations for faster load times. Whether you are a seasoned developer or just starting with Next.js and Tailwind CSS, version 2.0 offers the tools and features you need to create a high-performance, SEO-friendly blog.',
    tags: ['NEXT-JS', 'TAILWIND', 'GUIDE', 'FEATURE'],
  },
  'new-features-v1': {
    slug: 'new-features-v1',
    title: 'New features in v1',
    date: 'August 7, 2021',
    content: 'The first version of the Tailwind Nextjs Starter Blog introduced several new features aimed at enhancing the blogging experience for developers. One of the most notable additions is the ability to easily copy code blocks with a single click. This simple yet effective feature allows readers to quickly grab code snippets for their own projects without the hassle of manually selecting and copying the text. The template also introduces the concept of multiple authors, which makes it ideal for collaborative blogging projects. You can now easily assign posts to different authors, and the blog will display their respective profiles and attribution. Another major improvement is the customizable frontmatter layout, which provides more control over how blog metadata such as title, description, and tags are displayed. These updates aim to create a smoother user experience while also offering more flexibility in terms of design and functionality.',
    tags: ['NEXT-JS', 'TAILWIND', 'GUIDE'],
  },
  'multi-part-posts': {
    slug: 'multi-part-posts',
    title: 'Introducing Multi-part Posts with Nested Routing',
    date: 'May 2, 2021',
    content: "The blog template supports posts in nested sub-folders. This can be used to group posts of similar content e.g. a multi-part course. This post is itself an example of a nested route! One of the most powerful features introduced in the Tailwind Nextjs Starter Blog is support for multi-part posts using nested routing. This is particularly useful for creating content that spans multiple parts, such as a series of blog posts, a tutorial, or even an entire online course. By organizing posts into nested sub-folders, you can group related content together and provide a seamless navigation experience for your readers. This feature also supports deep linking, which allows readers to jump directly to a specific part of the series without having to scroll through unrelated posts. For developers, implementing this feature is straightforward thanks to Next.js’s built-in support for dynamic routing. You can easily create nested routes by adding folders within the pages directory and referencing them with a dynamic path. The flexibility of nested routing makes it easy to structure your content and keep it organized, especially as your blog grows.",
    tags: ['FEATURE', 'NEXT-JS'],
  },
  'seo-optimization-guide': {
    slug: 'seo-optimization-guide',
    title: 'SEO Optimization for Next.js Blogs',
    date: 'March 15, 2023',
    content: 'SEO optimization is essential for any blog or website aiming to reach a wider audience, and the Next.js ecosystem offers powerful tools to help you achieve this. In this comprehensive guide, we walk you through the best practices for optimizing your Next.js blog for search engines. One of the key features of Next.js is the ability to dynamically generate metadata for each page, which is crucial for SEO. By using dynamic meta tags, you can ensure that your blog posts are optimized for search engines and shareable on social media platforms. Additionally, we dive into Open Graph tags, which enhance the way your content appears when shared on platforms like Facebook and Twitter. Structured data, such as schema.org markup, is also covered in this guide, as it allows search engines to better understand the content of your blog posts, improving the chances of ranking higher in search results. This guide is perfect for developers looking to take their Next.js blog to the next level and improve its visibility online.',
    tags: ['NEXT-JS', 'SEO', 'GUIDE'],
  },
  'tailwind-best-practices': {
    slug: 'tailwind-best-practices',
    title: 'Best Practices for Tailwind CSS',
    date: 'July 10, 2022',
    content: 'Tailwind CSS has quickly become one of the most popular CSS frameworks due to its utility-first approach, which allows developers to style websites faster and more efficiently. In this post, we explore the best practices for using Tailwind CSS in your projects. One of the core concepts in Tailwind is the use of utility classes to style elements directly in your HTML. However, for larger projects, it’s essential to create reusable components to avoid repetitive code. We also discuss how to implement a consistent design by creating custom themes and color schemes using Tailwind’s configuration file. Responsive design is another important aspect, and Tailwind’s mobile-first approach makes it easy to create layouts that look great on any device. By using Tailwind CSS effectively, you can improve your workflow, maintainability, and scalability, while also achieving a sleek, modern design for your website or app.',
    tags: ['TAILWIND', 'CSS', 'GUIDE'],
  },
  'performance-improvements': {
    slug: 'performance-improvements',
    title: 'Boosting Performance in Next.js Apps',
    date: 'November 22, 2023',
    content: 'Performance is a critical factor in the success of any web application, and Next.js provides a variety of tools and techniques to ensure that your app runs efficiently. In this post, we explore several strategies for boosting performance in Next.js applications. One of the most effective methods is lazy loading, which allows you to load only the content that is visible to the user, reducing initial page load time. Dynamic imports are another key feature in Next.js that can help improve performance by splitting your code into smaller chunks and loading them on demand. This reduces the size of your initial JavaScript bundle, leading to faster load times and a better user experience. Additionally, we cover other performance optimization techniques such as image optimization, caching strategies, and server-side rendering. By implementing these techniques, you can create high-performance Next.js applications that deliver a seamless user experience.',
    tags: ['NEXT-JS', 'PERFORMANCE', 'FEATURE'],
  },
  'markdown-integration': {
    slug: 'markdown-integration',
    title: 'Markdown Integration in Next.js',
    date: 'January 5, 2022',
    content: 'Understand how to use markdown files with Next.js to create a seamless blogging experience. Markdown is a popular choice for writing content due to its simplicity and ease of use. Next.js makes it incredibly easy to integrate markdown files into your blog, allowing you to focus on writing while handling the heavy lifting of rendering and displaying the content. This post explains how to set up markdown integration in your Next.js project, from configuring the necessary dependencies to rendering markdown content as HTML. We also cover advanced topics such as syntax highlighting for code blocks, creating custom components for specific content types, and handling frontmatter data. By combining the flexibility of markdown with the power of Next.js, you can create a fast, efficient, and scalable blogging platform that is easy to maintain and update.',
    tags: ['NEXT-JS', 'MARKDOWN', 'GUIDE'],
  },
  'custom-themes': {
    slug: 'custom-themes',
    title: 'Creating Custom Themes with Tailwind CSS',
    date: 'February 18, 2023',
    content: 'One of the greatest strengths of Tailwind CSS is its ability to be easily customized to fit the specific needs of your project. In this post, we delve into how you can create custom themes using Tailwind CSS. From selecting color schemes and typography to defining spacing and layout rules, Tailwind provides a flexible configuration system that allows you to tailor the design to your brand’s identity. We also discuss the importance of consistent branding across your web app and how Tailwind’s utility-first approach can help maintain that consistency throughout the design. Whether you’re building a personal portfolio or a full-fledged web app, creating a custom theme with Tailwind CSS ensures that your project not only looks great but also aligns with your brand’s visual identity.',
    tags: ['TAILWIND', 'CUSTOMIZATION', 'GUIDE'],
  },
  'dynamic-routing': {
    slug: 'dynamic-routing',
    title: 'Understanding Dynamic Routing in Next.js',
    date: 'June 20, 2021',
    content: 'Dynamic routing is one of the most powerful features in Next.js, allowing developers to create pages with variable paths based on the content of the application. This is particularly useful for building blogs, e-commerce sites, or any project where the content is dynamically generated. In this post, we explain how dynamic routing works in Next.js and walk you through how to implement it in your projects. From defining dynamic routes using brackets in the file system to using Next.js’s getStaticPaths and getStaticProps functions for static site generation, this guide covers all you need to know. We also provide examples of how to use dynamic routing for different types of content, such as blog posts, product pages, and user profiles. Understanding dynamic routing in Next.js will give you the flexibility to create more complex and feature-rich applications.',
    tags: ['NEXT-JS', 'ROUTING', 'FEATURE'],
  },
  'accessibility-tips': {
    slug: 'accessibility-tips',
    title: 'Web Accessibility Tips for Tailwind CSS Users',
    date: 'October 10, 2022',
    content: 'Accessibility is a crucial aspect of web design that ensures all users, including those with disabilities, can access and interact with your website. In this post, we explore how to make your Tailwind CSS-based websites more accessible. We begin by discussing the importance of semantic HTML and how it helps screen readers and other assistive technologies interpret the content. Tailwind’s utility classes can also be used to enhance accessibility, such as adding focus styles for keyboard navigation, ensuring proper contrast ratios, and providing accessible text for images using alt attributes. Additionally, we cover how to create accessible forms, buttons, and other interactive elements using Tailwind’s built-in utilities. By following these tips, you can ensure that your website is inclusive and user-friendly for everyone.',
    tags: ['TAILWIND', 'ACCESSIBILITY', 'GUIDE'],
  },
};


export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = posts[params.slug]

  if (!post) {
    notFound()
  }

  return (
    <div className="bg-gradient-to-br from-purple-50 via-white to-purple-100 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900 bg-texture">
      <Navbar1 />
      <article className="max-w-2xl mx-auto m-8 border rounded-lg shadow-lg p-8 bg-blur border-zinc-800 dark:border-zinc-500">
        <Link href="/blog" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to all posts
        </Link>
        <div className="space-y-4">
          <div className="text-sm text-muted-foreground">{post.date}</div>
          <h1 className="text-4xl font-bold">{post.title}</h1>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className='bg-transparent text-primary border border-primary'>
                {tag}
              </Badge>
            ))}
          </div>
          <div className="prose dark:prose-invert mt-8">
            {post.content}
          </div>
        </div>
      </article>
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

