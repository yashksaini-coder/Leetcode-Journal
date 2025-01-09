import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

// Mock data for blog posts (same as in the blog listing page)
export const blogPosts = [
    {
      id: '1',
      title: 'Getting Started with Next.js',
      content: "Learn how to build modern web applications with Next.js and React. Dive into the world of server-side rendering, static site generation, and API routes with this powerful framework. This blog will guide you through setting up your first Next.js project, understanding its folder structure, and leveraging its built-in features to create high-performance, SEO-friendly web applications. Whether you're new to web development or transitioning from traditional React applications, this guide will give you a strong foundation. Topics include installing dependencies, working with dynamic routes, creating reusable components, and deploying your project to platforms like Vercel. By the end, you'll have a fully functional app and the knowledge to build more complex applications.",
      date: 'May 1, 2023'
    },
    {
      id: '2',
      title: 'Mastering Tailwind CSS',
      content: "Discover the power of utility-first CSS with Tailwind. Tailwind CSS has revolutionized the way developers approach styling by providing a robust utility-first framework that minimizes CSS files while maximizing design flexibility. This blog explores how to integrate Tailwind into your projects, leverage its utility classes for rapid UI development, and customize themes to match your brand. Learn about responsive design principles, how to use Tailwind’s JIT (Just-In-Time) compiler for faster builds, and best practices for creating maintainable styles. By mastering Tailwind CSS, you can significantly speed up your workflow and achieve visually appealing results with less effort. Whether you’re building a small project or a complex application, this guide has you covered.",
      date: 'May 15, 2023'
    },
    {
      id: '3',
      title: 'The Future of Web Development',
      content: 'Explore upcoming trends and technologies in web development. The web development landscape is constantly evolving, with new tools and methodologies emerging at a rapid pace. In this blog, we delve into the future of web development by examining trends such as WebAssembly, AI-driven development, JAMstack architecture, and advancements in progressive web apps (PWAs). Discover how these technologies are reshaping how websites are built and consumed. We’ll also discuss the growing importance of accessibility, ethical coding practices, and the role of machine learning in automating web development processes. Stay ahead of the curve and prepare for what’s next in the ever-changing world of the web.',
      date: 'June 1, 2023'
    },
    {
      id: '4',
      title: 'Building Accessible Web Applications',
      content: 'Learn best practices for creating inclusive and accessible web experiences. Accessibility is no longer optional in modern web development; it’s a necessity. This blog explains why accessibility matters and how to ensure your applications are usable by everyone, including individuals with disabilities. Topics include implementing semantic HTML, using ARIA (Accessible Rich Internet Applications) roles effectively, ensuring keyboard navigability, and testing with tools like Lighthouse and screen readers. By adopting accessibility practices, you can reach a broader audience, comply with regulations, and create a more inclusive internet. Whether you’re a seasoned developer or a beginner, this guide provides actionable insights and techniques to improve the accessibility of your projects.',
      date: 'June 15, 2023'
    },
    {
      id: '5',
      title: 'Optimizing Performance in React Apps',
      content: 'Techniques and tools for improving the performance of your React applications. Performance is a critical aspect of any application, directly impacting user experience and retention. This blog focuses on the best practices for optimizing React apps, including techniques like code splitting, lazy loading, memoization with React.memo, and using hooks such as useCallback and useMemo effectively. You’ll also learn about performance monitoring tools, such as React Developer Tools and browser profiling, to identify and resolve bottlenecks. Explore advanced strategies like server-side rendering with Next.js and optimizing state management with libraries like Redux Toolkit or Zustand. By following these practices, you can ensure your React apps remain fast, responsive, and scalable.',
      date: 'July 1, 2023'
    },
    {
      id: '6',
      title: 'Introduction to TypeScript',
      content: 'Get started with TypeScript and improve your JavaScript development. TypeScript is a superset of JavaScript that adds static typing, making your code more predictable and easier to debug. In this beginner-friendly blog, we introduce TypeScript, guide you through setting up your development environment, and cover core concepts such as types, interfaces, classes, and generics. Discover how TypeScript integrates seamlessly with popular frameworks like React and Node.js, and explore real-world examples that demonstrate its power. By adopting TypeScript, you’ll reduce bugs, improve code maintainability, and gain a deeper understanding of your projects. This guide is perfect for developers looking to elevate their JavaScript skills and write more robust code.',
      date: 'July 15, 2023'
    }
  ];

export default function BlogPost({ params }: { params: { id: string } }) {
  const post = blogPosts.find(p => p.id === params.id)

  if (!post) {
    return <div>Post not found</div>
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-white">
      <div className="container mx-auto px-4 py-12">
        <Link href="/blog" className="text-purple-600 hover:text-purple-800 flex items-center mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to blog
        </Link>
        <article className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold mb-4 text-purple-900">{post.title}</h1>
          <p className="text-gray-600 mb-8">{post.date}</p>
          <div className="prose max-w-none">
            <p>{post.content}</p>
          </div>
        </article>
      </div>
    </div>
  )
}

