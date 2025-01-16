import Link from 'next/link';
import { getBlogsByYear } from '@/lib/getBlogs';

export default async function BlogsPage() {
  const blogsByYear = getBlogsByYear();

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Blogs</h1>
      {Object.keys(blogsByYear)
        .sort((a, b) => parseInt(b) - parseInt(a))
        .map((year) => (
          <div key={year} className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{year}</h2>
            <ul className="space-y-2">
              {blogsByYear[year].map((blog) => (
                <li key={blog.slug}>
                  <Link href={`/blogs/${blog.slug}`} className="text-blue-600 hover:underline">
                    {blog.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
    </div>
  );
}
