import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const BLOG_DIR = path.join(process.cwd(), 'content/blog');

export function getBlogsByYear() {
  const years = fs.readdirSync(BLOG_DIR);
  const blogs: Record<string, { title: string; slug: string; content: string }[]> = {};

  years.forEach((year) => {
    const yearDir = path.join(BLOG_DIR, year);

    if (fs.statSync(yearDir).isDirectory()) {
      const files = fs.readdirSync(yearDir);

      blogs[year] = files.map((file) => {
        const filePath = path.join(yearDir, file);
        const fileContent = fs.readFileSync(filePath, 'utf8');
        const { data, content } = matter(fileContent); // Parse front matter and content
        const slug = `${year}/${file.replace(/\.md$/, '')}`;
        return {
          title: data.title || 'Untitled',
          slug,
          content,
        };
      });
    }
  });

  return blogs;
}
