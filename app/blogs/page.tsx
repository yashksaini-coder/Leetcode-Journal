import { getBlogsByYear } from "@/lib/getBlogs";
import { Timeline } from "@/components/ui/timeline";

export default async function BlogsPage() {
  const blogsByYear = getBlogsByYear();
  //covert object to array
  const blogsByYearArray = Object.keys(blogsByYear).map((year) => ({
    year,
    blogs: blogsByYear[year],
  }));

  return (
    <div className="max-w-700 mx-auto p-4">
      {/* {Object.keys(blogsByYear)
        .sort((a, b) => parseInt(b) - parseInt(a))
        .map((year) => (
          <div key={year} className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{year}</h2>
            <ul className="space-y-2">
              {blogsByYear[year].map((blog) => (
                <li key={blog.slug}>
                  <Link
                    href={`/blogs/${blog.slug}`}
                    className="text-blue-600 hover:underline"
                  >
                    {blog.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))} */}
      <div className="w-full">
        <Timeline data={blogsByYearArray} />
      </div>
    </div>
  );
}
