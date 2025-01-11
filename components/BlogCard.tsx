import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface BlogPost {
  id: string
  title: string
  excerpt: string
  date: string
}

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-105">
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-2 text-purple-800">{post.title}</h2>
        <p className="text-gray-600 mb-4">
            {post.excerpt.split(' ').slice(0, 10).join(' ')}...
        </p>
        <div className="flex justify-between items-center">
          <span className="text-sm text-purple-600">{post.date}</span>
          <Link href={`/blog/${post.id}`} className="text-purple-600 hover:text-purple-800 flex items-center">
            Read more
            <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}

