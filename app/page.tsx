import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Separator } from "@/components/ui/separator"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { ThemeToggle } from "@/components/theme-toggle"
import { BookOpen, CheckCircle, Github } from 'lucide-react'
import { SocialLinks } from "@/components/socials"
import { Highlight } from "@/components/ui/hero-hihglight";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <header className="px-4 lg:px-6 h-16 flex items-center sticky top-0 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50 border-b">
        <Link className="flex items-center justify-center" href="#">
          <BookOpen className="h-6 w-6 mr-2 text-primary" />
          <span className="font-bold text-lg">LeetCode Journal</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:text-primary" href="#features">
            Features
          </Link>
          <Link className="text-sm font-medium hover:text-primary" href="#testimonials">
            Testimonials
          </Link>
          <Link className="text-sm font-medium hover:text-primary" href="#pricing">
            Pricing
          </Link>
          <ThemeToggle />
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary overflow-hidden">
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl mb-9 font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                <p className='mb-5'>Master LeetCode</p>
                  <Highlight className="dark:bg-primary/20 bg-primary/10">
                    Track Your Progress
                  </Highlight>
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  LeetCode Journal helps you organize your problem-solving journey, track your progress, and achieve your coding interview goals.
                </p>
              </div>
              <div className="space-x-4">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">Get Started</Button>
                <Button variant="outline" size="lg">Learn More</Button>
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="w-full abo py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Features</h2>
            <Tabs defaultValue="track" className="w-full max-w-4xl mx-auto">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="track">Track</TabsTrigger>
                <TabsTrigger value="analyze">Analyze</TabsTrigger>
                <TabsTrigger value="improve">Improve</TabsTrigger>
              </TabsList>
              <TabsContent value="track" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Problem Tracking</CardTitle>
                    <CardDescription>Log and organize all the LeetCode problems you've attempted and solved.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p>Keep a detailed record of your LeetCode journey:</p>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Mark problems as solved, attempted, or to-do</li>
                      <li>Add notes and solutions for future reference</li>
                      <li>Tag problems by difficulty, topic, or company</li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="analyze" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Progress Analytics</CardTitle>
                    <CardDescription>Visualize your progress with detailed charts and statistics.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p>Gain insights into your LeetCode performance:</p>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Track solved problems over time</li>
                      <li>Analyze your performance by problem type and difficulty</li>
                      <li>Identify areas for improvement</li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="improve" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Skill Improvement</CardTitle>
                    <CardDescription>Enhance your problem-solving skills with targeted practice.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p>Boost your coding interview readiness:</p>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Get personalized problem recommendations</li>
                      <li>Access curated problem sets for specific topics</li>
                      <li>Track your improvement over time</li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>
        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">What Our Users Say</h2>
            <Carousel className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto">
              <CarouselContent>
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
                ].map((testimonial, index) => (
                  <CarouselItem key={index}>
                    <Card>
                      <CardHeader>
                        <CardTitle>{testimonial.name}</CardTitle>
                        <CardDescription>{testimonial.role}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p>{testimonial.content}</p>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </section>
        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Simple Pricing</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Free",
                  description: "For casual users",
                  price: "$0/mo",
                  features: ["Track up to 50 problems", "Basic progress analytics", "Community forums access"],
                },
                {
                  title: "Pro",
                  description: "For serious coders",
                  price: "$9.99/mo",
                  features: ["Unlimited problem tracking", "Advanced analytics and insights", "Priority support", "Custom study plans"],
                },
                {
                  title: "Team",
                  description: "For coding groups",
                  price: "$29.99/mo",
                  features: ["All Pro features", "Team collaboration tools", "Admin dashboard", "API access"],
                },
              ].map((plan, index) => (
                <Card key={index} className={index === 1 ? 'border-primary' : ''}>
                  <CardHeader>
                    <CardTitle>{plan.title}</CardTitle>
                    <CardDescription>{plan.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-4xl font-bold mb-4">{plan.price}</p>
                    <ul className="space-y-2">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-center">
                          <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button className={`w-full mt-6 ${index === 1 ? 'bg-primary text-primary-foreground hover:bg-primary/90' : ''}`}>
                      {index === 0 ? 'Get Started' : index === 1 ? 'Upgrade to Pro' : 'Contact Sales'}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full max-w-2xl mx-auto">
              <AccordionItem value="item-1">
                <AccordionTrigger>How does LeetCode Journal help me prepare for coding interviews?</AccordionTrigger>
                <AccordionContent>
                  LeetCode Journal provides a structured approach to your interview preparation by helping you track problems, analyze your progress, and focus on areas that need improvement. It also offers personalized recommendations and curated problem sets to enhance your skills efficiently.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Can I use LeetCode Journal with other coding platforms?</AccordionTrigger>
                <AccordionContent>
                  While LeetCode Journal is optimized for LeetCode, you can use it to track your progress on other coding platforms as well. You can manually add problems from other sources and categorize them according to your needs.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Is there a mobile app available?</AccordionTrigger>
                <AccordionContent>
                  Currently, LeetCode Journal is available as a web application optimized for both desktop and mobile browsers. We're working on dedicated mobile apps for iOS and Android, which will be released in the near future.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to Boost Your Coding Skills?</h2>
                <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl">
                  Join thousands of developers who are mastering LeetCode with our journal. Start your journey today!
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90" size="lg">Get Started for Free</Button>
              </div>
            </div>
          </div>
        </section>
      </main>
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
            href="https://github.com/yourusername/leetcode-journal"
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
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
      <div>
        <h3 className="font-semibold mb-3 text-lg">Product</h3>
        <ul className="space-y-2">
          <li><Link href="#features" className="text-sm hover:text-primary transition-colors">Features</Link></li>
          <li><Link href="#pricing" className="text-sm hover:text-primary transition-colors">Pricing</Link></li>
          <li><Link href="#" className="text-sm hover:text-primary transition-colors">FAQ</Link></li>
        </ul>
      </div>
      <div>
        <h3 className="font-semibold mb-3 text-lg">Company</h3>
        <ul className="space-y-2">
          <li><Link href="#" className="text-sm hover:text-primary transition-colors">About</Link></li>
          <li><Link href="#" className="text-sm hover:text-primary transition-colors">Blog</Link></li>
          <li><Link href="#" className="text-sm hover:text-primary transition-colors">Careers</Link></li>
        </ul>
      </div>
      <div>
        <h3 className="font-semibold mb-3 text-lg">Resources</h3>
        <ul className="space-y-2">
          <li><Link href="#" className="text-sm hover:text-primary transition-colors">Documentation</Link></li>
          <li><Link href="#" className="text-sm hover:text-primary transition-colors">Community</Link></li>
          <li><Link href="#" className="text-sm hover:text-primary transition-colors">Support</Link></li>
        </ul>
      </div>
      <div>
        <h3 className="font-semibold mb-3 text-lg">Legal</h3>
        <ul className="space-y-2">
          <li><Link href="#" className="text-sm hover:text-primary transition-colors">Privacy Policy</Link></li>
          <li><Link href="#" className="text-sm hover:text-primary transition-colors">Terms of Service</Link></li>
          <li><Link href="#" className="text-sm hover:text-primary transition-colors">Cookie Policy</Link></li>
        </ul>
      </div>
    </div>
    <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border">
      <p className="text-sm text-muted-foreground mb-4 md:mb-0">© 2023 LeetCode Journal. All rights reserved.</p>
      <Button
        variant="outline"
        size="sm"
        className="md:hidden"
        asChild
      >
        <a
          href="https://github.com/yourusername/leetcode-journal"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github className="mr-2 h-4 w-4" />
          Star on GitHub
        </a>
      </Button>
    </div>
  </div>
</footer>
    </div>
  )
}

