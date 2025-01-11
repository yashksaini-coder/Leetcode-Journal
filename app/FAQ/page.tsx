import { Metadata } from 'next'
import FAQComponent from './component/faq-component'
import ContactSection from './component/contact-section'
import Navbar1 from '@/components/navbar'
import { Github, BookOpen } from 'lucide-react'
import {Button} from '@/components/ui/button'
import { SocialLinks } from '@/components/SocialLinks'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'FAQ - Your Company Name',
  description: 'Frequently Asked Questions about our products and services',
}

export default function FAQPage() {
  return (
    <div className="min-h-screen space-y-12">
      <Navbar1 />
      <div className="text-center mb-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-purple-500" >Frequently Asked Questions</h1>
          <p className="text-xl text-purple-600">Find answers to common questions about our products and services</p>
        </div>
        <FAQComponent />
        <div className="rounded-lg text-center w-[50%] mx-auto">
          <ContactSection />
        </div>
      </div>
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
          {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
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
          </div> */}
        </div>
      </footer>
    </div>
  )
}

