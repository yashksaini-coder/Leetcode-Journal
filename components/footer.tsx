import { BookOpen, Github } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {SocialLinks} from "./SocialLinks"

const Footer = () => {
  return (
    <footer className="w-full py-12 px-4 md:px-6 border-t bg-secondary">
      <div className="container mx-auto">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <BookOpen className="h-6 w-6 text-primary" />
            <span className="font-bold text-lg">LeetCode Journal</span>
          </div>
          <div className="flex items-center space-x-4 -ml-2">
            <Button variant="outline" size="sm" className="hidden md:flex" asChild>
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

        {/* Links Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {[
            {
              title: "Product",
              links: [
                { href: "features", label: "Features" },
                { href: "pricing", label: "Pricing" },
                { href: "FAQ", label: "FAQ" },
              ],
            },
            {
              title: "Company",
              links: [
                { href: "about", label: "About" },
                { href: "blog", label: "Blog" },
                { href: "careers", label: "Careers" },
              ],
            },
            {
              title: "Resources",
              links: [
                { href: "documentation", label: "Documentation" },
                { href: "community", label: "Community" },
                { href: "support", label: "Support" },
              ],
            },
            {
              title: "Legal",
              links: [
                { href: "privacy", label: "Privacy Policy" },
                { href: "terms", label: "Terms of Service" },
                { href: "cookie", label: "Cookie Policy" },
              ],
            },
          ].map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold mb-3 text-lg">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, idx) => (
                  <li key={idx}>
                    <Link
                      href={link.href}
                      className="text-sm hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            © {new Date().getFullYear()} LeetCode Journal. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

