import fs from "fs";
import path from "path";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css"; // Using a dark theme for syntax highlighting
import { Metadata } from "next";
import { ClockIcon } from "lucide-react";

const BLOG_DIR = path.join(process.cwd(), "content/blog");

async function getBlogContent(year: string, slug: string) {
  const filePath = path.join(BLOG_DIR, year, `${slug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf8");
  const { content, data } = matter(fileContent);
  return { content, meta: data };
}

export async function generateMetadata({
  params,
}: {
  params: { year: string; slug: string };
}): Promise<Metadata> {
  const { meta } = await getBlogContent(params.year, params.slug);
  return {
    title: meta.title,
    description: meta.description || `Read ${meta.title} on our blog`,
  };
}

export default async function BlogPage({
  params: { year, slug },
}: {
  params: { year: string; slug: string };
}) {
  const { content, meta } = await getBlogContent(year, slug);

  const minuteRead = content.length / 200;

  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-50 to-white dark:from-neutral-900 dark:to-neutral-800 py-12">
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 dark:text-white mb-2">
            {meta.title}
          </h1>
          <div className="flex flex-wrap items-center text-xs text-neutral-500 dark:text-neutral-400 space-x-4">
            {content && (
              <div className="flex items-center">
                <ClockIcon className="w-4 h-4 mr-1" />
                <span>{minuteRead} min read</span>
              </div>
            )}
          </div>
        </header>
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw, rehypeHighlight]}
            components={{
              a: ({ href, children }) => (
                <a
                  href={href}
                  className="text-blue-600 dark:text-blue-400 hover:underline"
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
                  className="rounded-lg shadow-md w-full h-auto"
                />
              ),
              code: ({
                node,
                inline,
                className,
                children,
                ...props
              }: {
                node?: any;
                inline?: boolean;
                className?: string;
                children?: React.ReactNode;
                [key: string]: any;
              }) => {
                const match = /language-(\w+)/.exec(className || "");
                return !inline && match ? (
                  <div className="relative">
                    <pre
                      className={`${className} rounded-lg p-4 overflow-x-auto`}
                    >
                      <code className={`language-${match[1]}`} {...props}>
                        {children}
                      </code>
                    </pre>
                    <div className="absolute top-2 right-2 text-xs text-neutral-400 dark:text-neutral-500 uppercase">
                      {match[1]}
                    </div>
                  </div>
                ) : (
                  <code
                    className="bg-neutral-100 dark:bg-neutral-800 rounded px-1 py-0.5"
                    {...props}
                  >
                    {children}
                  </code>
                );
              },
              blockquote: ({ children }) => (
                <blockquote className="border-l-4 border-blue-500 pl-4 italic">
                  {children}
                </blockquote>
              ),
            }}
          >
            {content}
          </ReactMarkdown>
        </div>
      </article>
    </div>
  );
}
