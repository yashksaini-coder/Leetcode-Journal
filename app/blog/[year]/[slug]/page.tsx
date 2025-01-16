import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';

const BLOG_DIR = path.join(process.cwd(), 'content/blog');

async function getBlogContent(year: string, slug: string) {
  const filePath = path.join(BLOG_DIR, year, `${slug}.md`);
  const fileContent = fs.readFileSync(filePath, 'utf8');
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
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
}
