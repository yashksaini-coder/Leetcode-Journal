import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ThemeToggle } from "@/components/theme-toggle"
import { BookOpen, Code, LineChart, Users, CheckCircle } from 'lucide-react'

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center fixed w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
        <Link className="flex items-center justify-center" href="#">
          <BookOpen className="h-6 w-6 mr-2" />
          <span className="font-bold">LeetCode Journal</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#features">
            Features
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#testimonials">
            Testimonials
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#pricing">
            Pricing
          </Link>
          <ThemeToggle />
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 relative overflow-hidden">
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Master LeetCode, Track Your Progress
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  LeetCode Journal helps you organize your problem-solving journey, track your progress, and achieve your coding interview goals.
                </p>
              </div>
              <div className="space-x-4">
                <Button size="lg">Get Started</Button>
                <Button variant="outline" size="lg">Learn More</Button>
              </div>
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-20 dark:opacity-30" />
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
          <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-background to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <Code className="h-8 w-8 mb-2 text-primary" />
                  <CardTitle>Problem Tracking</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Log and organize all the LeetCode problems you've attempted and solved.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <LineChart className="h-8 w-8 mb-2 text-primary" />
                  <CardTitle>Progress Analytics</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Visualize your progress with detailed charts and statistics.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Users className="h-8 w-8 mb-2 text-primary" />
                  <CardTitle>Community Insights</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Compare your progress with others and get motivation from the community.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">What Our Users Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Alex Johnson",
                  role: "Software Engineer at Google",
                  content: "LeetCode Journal has been instrumental in my interview prep. It's like having a personal coding coach!"
                },
                {
                  name: "Sarah Lee",
                  role: "Recent CS Graduate",
                  content: "This tool helped me stay organized and motivated throughout my job search. Highly recommended!"
                },
                {
                  name: "Michael Chen",
                  role: "Senior Developer at Amazon",
                  content: "The progress tracking feature is a game-changer. It's satisfying to see my skills improve over time."
                }
              ].map((testimonial, i) => (
                <Card key={i}>
                  <CardHeader>
                    <CardTitle>{testimonial.name}</CardTitle>
                    <CardDescription>{testimonial.role}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>{testimonial.content}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Simple Pricing</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Free</CardTitle>
                  <CardDescription>For casual users</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-4xl font-bold mb-4">$0/mo</p>
                  <ul className="space-y-2">
                    <li className="flex items-center"><CheckCircle className="mr-2 h-4 w-4 text-primary" /> Track up to 50 problems</li>
                    <li className="flex items-center"><CheckCircle className="mr-2 h-4 w-4 text-primary" /> Basic progress analytics</li>
                    <li className="flex items-center"><CheckCircle className="mr-2 h-4 w-4 text-primary" /> Community forums access</li>
                  </ul>
                  <Button className="w-full mt-6">Get Started</Button>
                </CardContent>
              </Card>
              <Card className="border-primary">
                <CardHeader>
                  <CardTitle>Pro</CardTitle>
                  <CardDescription>For serious coders</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-4xl font-bold mb-4">$9.99/mo</p>
                  <ul className="space-y-2">
                    <li className="flex items-center"><CheckCircle className="mr-2 h-4 w-4 text-primary" /> Unlimited problem tracking</li>
                    <li className="flex items-center"><CheckCircle className="mr-2 h-4 w-4 text-primary" /> Advanced analytics and insights</li>
                    <li className="flex items-center"><CheckCircle className="mr-2 h-4 w-4 text-primary" /> Priority support</li>
                    <li className="flex items-center"><CheckCircle className="mr-2 h-4 w-4 text-primary" /> Custom study plans</li>
                  </ul>
                  <Button className="w-full mt-6">Upgrade to Pro</Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Team</CardTitle>
                  <CardDescription>For coding groups</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-4xl font-bold mb-4">$29.99/mo</p>
                  <ul className="space-y-2">
                    <li className="flex items-center"><CheckCircle className="mr-2 h-4 w-4 text-primary" /> All Pro features</li>
                    <li className="flex items-center"><CheckCircle className="mr-2 h-4 w-4 text-primary" /> Team collaboration tools</li>
                    <li className="flex items-center"><CheckCircle className="mr-2 h-4 w-4 text-primary" /> Admin dashboard</li>
                    <li className="flex items-center"><CheckCircle className="mr-2 h-4 w-4 text-primary" /> API access</li>
                  </ul>
                  <Button className="w-full mt-6">Contact Sales</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to Boost Your Coding Skills?</h2>
                <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  Join thousands of developers who are mastering LeetCode with our journal. Start your journey today!
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <Button className="w-full" size="lg">Get Started for Free</Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2023 LeetCode Journal. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}

