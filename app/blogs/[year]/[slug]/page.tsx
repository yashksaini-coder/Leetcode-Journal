import fs from "fs";
import path from "path";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import rehypeHighlight from 'rehype-highlight';
import 'highlight.js/styles/github.css'; // Import a syntax highlight theme

const BLOG_DIR = path.join(process.cwd(), "content/blog");

async function getBlogContent(year: string, slug: string) {
  const filePath = path.join(BLOG_DIR, year, `${slug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf8");
  const { content, data } = matter(fileContent);
  return { content, meta: data };
}

export default async function BlogPage({
  params: { year, slug },
}: {
  params: { year: string; slug: string };
}) {
  const { content, meta } = await getBlogContent(year, slug);

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">{meta.title}</h1>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]} // Enable GitHub Flavored Markdown
        rehypePlugins={[rehypeRaw, rehypeHighlight]} // Enable raw HTML & syntax highlighting
        components={{
          a: ({ href, children }) => (
            <a
              href={href}
              className="text-blue-500 underline hover:text-blue-600"
              target="_blank"
              rel="noopener noreferrer"
            >
              {children}
            </a>
          ),
          img: ({ src, alt }) => (
            <img
              src={src || ""}
              alt={alt || ""}
              className="rounded-lg border border-gray-300 shadow-md"
            />
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
