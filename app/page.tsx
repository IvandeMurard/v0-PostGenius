import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import PostCarousel from "@/components/post-carousel"
import FeatureCard from "@/components/feature-card"
import { ArrowRight, Clock, DollarSign, TrendingUp, Zap } from "lucide-react"

export default function Home() {
  // This would be replaced with your actual webhook URL
  const webhookUrl = "https://your-webhook-url.com"

  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-2">
            <Zap className="h-6 w-6 text-purple-600" />
            <span className="text-xl font-bold">PostGenius</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#features" className="text-sm font-medium hover:underline underline-offset-4">
              Features
            </Link>
            <Link href="#how-it-works" className="text-sm font-medium hover:underline underline-offset-4">
              How It Works
            </Link>
            <Link href="#posts" className="text-sm font-medium hover:underline underline-offset-4">
              Latest Posts
            </Link>
            <Link href="#pricing" className="text-sm font-medium hover:underline underline-offset-4">
              Pricing
            </Link>
          </nav>
          <div>
            <Button asChild variant="outline" className="hidden md:inline-flex mr-2">
              <Link href="#login">Login</Link>
            </Button>
            <Button asChild>
              <Link href={webhookUrl}>Get Started</Link>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-purple-50 to-blue-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    AI-Powered LinkedIn Posts That Drive Engagement
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl">
                    Generate trending, relevant LinkedIn content in seconds with our AI automation system powered by
                    Perplexity AI and GPT.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild size="lg" className="bg-purple-600 hover:bg-purple-700">
                    <Link href={webhookUrl}>
                      Generate Your First Post <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link href="#how-it-works">Learn More</Link>
                  </Button>
                </div>
              </div>
              <div className="mx-auto lg:ml-auto">
                <div className="relative h-[350px] w-[350px] sm:h-[400px] sm:w-[400px] lg:h-[500px] lg:w-[500px]">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full blur-[100px] opacity-20"></div>
                  <img
                    src="/placeholder.svg?height=500&width=500"
                    alt="AI LinkedIn Post Generator"
                    className="relative z-10 mx-auto h-auto max-w-full rounded-lg object-cover"
                    width={500}
                    height={500}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-purple-100 px-3 py-1 text-sm text-purple-600">Features</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Why Choose PostGenius?</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our AI-powered system delivers exceptional results with these key features
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
              <FeatureCard
                icon={<Clock className="h-10 w-10 text-purple-600" />}
                title="Time-Saving Automation"
                description="Generate weeks of content in minutes with our AI-powered system. Save hours of manual content creation."
              />
              <FeatureCard
                icon={<DollarSign className="h-10 w-10 text-purple-600" />}
                title="Cost-Effective Content"
                description="Reduce content creation costs by up to 80% compared to hiring professional writers or agencies."
              />
              <FeatureCard
                icon={<TrendingUp className="h-10 w-10 text-purple-600" />}
                title="Trend Analysis"
                description="Our AI analyzes real-time LinkedIn trends to create content that resonates with your audience."
              />
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section
          id="how-it-works"
          className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-blue-50 to-purple-50"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-purple-100 px-3 py-1 text-sm text-purple-600">Process</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">How PostGenius Works</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our advanced AI system leverages multiple technologies for intelligent content creation
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-5xl mt-12">
              <div className="relative">
                <div className="absolute top-0 bottom-0 left-[50%] w-0.5 bg-purple-200"></div>

                {/* Step 1 */}
                <div className="relative flex items-center mb-12">
                  <div className="flex-1 mr-4 md:mr-12 text-right">
                    <div className="text-purple-600 font-bold mb-1">Step 1</div>
                    <h3 className="text-xl font-bold mb-2">Custom WebHook Entry Point</h3>
                    <p className="text-gray-600">
                      Our system begins with a custom webhook that receives data from external sources, initiating the
                      content generation process.
                    </p>
                  </div>
                  <div className="z-10 flex items-center justify-center w-12 h-12 rounded-full bg-purple-600 text-white shadow-lg">
                    1
                  </div>
                  <div className="flex-1 ml-4 md:ml-12 hidden md:block"></div>
                </div>

                {/* Step 2 */}
                <div className="relative flex items-center mb-12">
                  <div className="flex-1 mr-4 md:mr-12 hidden md:block"></div>
                  <div className="z-10 flex items-center justify-center w-12 h-12 rounded-full bg-purple-600 text-white shadow-lg">
                    2
                  </div>
                  <div className="flex-1 ml-4 md:ml-12">
                    <div className="text-purple-600 font-bold mb-1">Step 2</div>
                    <h3 className="text-xl font-bold mb-2">Perplexity AI Analysis</h3>
                    <p className="text-gray-600">
                      Perplexity AI analyzes current trends and emotional narratives to generate valuable insights for
                      your content.
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="relative flex items-center mb-12">
                  <div className="flex-1 mr-4 md:mr-12 text-right">
                    <div className="text-purple-600 font-bold mb-1">Step 3</div>
                    <h3 className="text-xl font-bold mb-2">GPT-3 Post Idea Generation</h3>
                    <p className="text-gray-600">
                      OpenAI's GPT-3 generates multiple relevant post ideas based on the insights from Perplexity AI.
                    </p>
                  </div>
                  <div className="z-10 flex items-center justify-center w-12 h-12 rounded-full bg-purple-600 text-white shadow-lg">
                    3
                  </div>
                  <div className="flex-1 ml-4 md:ml-12 hidden md:block"></div>
                </div>

                {/* Step 4 */}
                <div className="relative flex items-center mb-12">
                  <div className="flex-1 mr-4 md:mr-12 hidden md:block"></div>
                  <div className="z-10 flex items-center justify-center w-12 h-12 rounded-full bg-purple-600 text-white shadow-lg">
                    4
                  </div>
                  <div className="flex-1 ml-4 md:ml-12">
                    <div className="text-purple-600 font-bold mb-1">Step 4</div>
                    <h3 className="text-xl font-bold mb-2">Viral Topic Selection</h3>
                    <p className="text-gray-600">
                      Another GPT-3 module selects the most viral post topic from the generated ideas to maximize
                      engagement.
                    </p>
                  </div>
                </div>

                {/* Step 5 */}
                <div className="relative flex items-center mb-12">
                  <div className="flex-1 mr-4 md:mr-12 text-right">
                    <div className="text-purple-600 font-bold mb-1">Step 5</div>
                    <h3 className="text-xl font-bold mb-2">Complete Post Creation</h3>
                    <p className="text-gray-600">
                      A final GPT-3 module crafts a complete LinkedIn post designed to maximize reach and conversions.
                    </p>
                  </div>
                  <div className="z-10 flex items-center justify-center w-12 h-12 rounded-full bg-purple-600 text-white shadow-lg">
                    5
                  </div>
                  <div className="flex-1 ml-4 md:ml-12 hidden md:block"></div>
                </div>

                {/* Step 6 */}
                <div className="relative flex items-center">
                  <div className="flex-1 mr-4 md:mr-12 hidden md:block"></div>
                  <div className="z-10 flex items-center justify-center w-12 h-12 rounded-full bg-purple-600 text-white shadow-lg">
                    6
                  </div>
                  <div className="flex-1 ml-4 md:ml-12">
                    <div className="text-purple-600 font-bold mb-1">Step 6</div>
                    <h3 className="text-xl font-bold mb-2">Content Distribution</h3>
                    <p className="text-gray-600">
                      Our router updates your Notion database with the generated content and posts it to your LinkedIn
                      profile.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-16 bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 text-center">The Future of Content Creation</h3>
                <p className="text-gray-700">
                  Our ultimate goal is to provide you with fully automated text, audio, and video content creation.
                  Imagine having your ideas transformed into engaging LinkedIn posts, professional audio recordings, and
                  compelling video content—all generated automatically and optimized for maximum engagement.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Latest Posts Carousel */}
        <section id="posts" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-purple-100 px-3 py-1 text-sm text-purple-600">Showcase</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Latest Generated Posts</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  See examples of high-performing content created by our AI system
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-5xl mt-12">
              <PostCarousel />
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-purple-50 to-blue-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-purple-100 px-3 py-1 text-sm text-purple-600">Pricing</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Simple, Transparent Pricing</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Choose the plan that works best for your content needs
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 mt-8">
              <Card className="border-2 border-gray-200">
                <CardContent className="p-6">
                  <div className="mb-4 space-y-2 text-center">
                    <h3 className="text-2xl font-bold">Starter</h3>
                    <div className="text-4xl font-bold">
                      $29<span className="text-sm font-normal text-gray-500">/month</span>
                    </div>
                  </div>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2 h-4 w-4 text-green-500"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>10 AI-generated posts per month</span>
                    </li>
                    <li className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2 h-4 w-4 text-green-500"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>Basic trend analysis</span>
                    </li>
                    <li className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2 h-4 w-4 text-green-500"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>Email support</span>
                    </li>
                  </ul>
                  <Button asChild className="w-full">
                    <Link href={webhookUrl}>Get Started</Link>
                  </Button>
                </CardContent>
              </Card>
              <Card className="border-2 border-purple-600 shadow-lg relative">
                <div className="absolute -top-4 left-0 right-0 mx-auto w-fit rounded-full bg-purple-600 px-3 py-1 text-xs font-medium text-white">
                  Most Popular
                </div>
                <CardContent className="p-6">
                  <div className="mb-4 space-y-2 text-center">
                    <h3 className="text-2xl font-bold">Professional</h3>
                    <div className="text-4xl font-bold">
                      $79<span className="text-sm font-normal text-gray-500">/month</span>
                    </div>
                  </div>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2 h-4 w-4 text-green-500"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>30 AI-generated posts per month</span>
                    </li>
                    <li className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2 h-4 w-4 text-green-500"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>Advanced trend analysis</span>
                    </li>
                    <li className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2 h-4 w-4 text-green-500"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>Priority support</span>
                    </li>
                    <li className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2 h-4 w-4 text-green-500"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>Content calendar</span>
                    </li>
                  </ul>
                  <Button asChild className="w-full bg-purple-600 hover:bg-purple-700">
                    <Link href={webhookUrl}>Get Started</Link>
                  </Button>
                </CardContent>
              </Card>
              <Card className="border-2 border-gray-200">
                <CardContent className="p-6">
                  <div className="mb-4 space-y-2 text-center">
                    <h3 className="text-2xl font-bold">Enterprise</h3>
                    <div className="text-4xl font-bold">
                      $199<span className="text-sm font-normal text-gray-500">/month</span>
                    </div>
                  </div>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2 h-4 w-4 text-green-500"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>Unlimited AI-generated posts</span>
                    </li>
                    <li className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2 h-4 w-4 text-green-500"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>Premium trend analysis</span>
                    </li>
                    <li className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2 h-4 w-4 text-green-500"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>Dedicated account manager</span>
                    </li>
                    <li className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2 h-4 w-4 text-green-500"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>Custom AI training</span>
                    </li>
                  </ul>
                  <Button asChild className="w-full">
                    <Link href={webhookUrl}>Contact Sales</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-purple-600 text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Ready to Transform Your LinkedIn Presence?
                </h2>
                <p className="max-w-[900px] text-purple-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join thousands of professionals who are saving time and increasing engagement with AI-powered content.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
                  <Link href={webhookUrl}>
                    Generate Your First Post <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t bg-gray-50">
        <div className="container flex flex-col gap-4 py-10 md:flex-row md:gap-8 px-4 md:px-6">
          <div className="flex flex-col gap-2 md:gap-4 md:w-1/3">
            <div className="flex items-center gap-2">
              <Zap className="h-6 w-6 text-purple-600" />
              <span className="text-xl font-bold">PostGenius</span>
            </div>
            <p className="text-gray-500 text-sm">
              AI-powered LinkedIn content generation that saves time and drives engagement.
            </p>
          </div>
          <div className="grid flex-1 grid-cols-2 gap-8 sm:grid-cols-3">
            <div className="space-y-3">
              <h4 className="font-medium">Product</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#features" className="text-sm text-gray-500 hover:text-gray-900">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#pricing" className="text-sm text-gray-500 hover:text-gray-900">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-500 hover:text-gray-900">
                    Testimonials
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="font-medium">Company</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm text-gray-500 hover:text-gray-900">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-500 hover:text-gray-900">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-500 hover:text-gray-900">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="font-medium">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm text-gray-500 hover:text-gray-900">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-500 hover:text-gray-900">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-500 hover:text-gray-900">
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t py-6">
          <div className="container flex flex-col items-center justify-between gap-4 md:flex-row px-4 md:px-6">
            <p className="text-xs text-gray-500">© 2025 PostGenius. All rights reserved.</p>
            <div className="flex gap-4">
              <Link href="#" className="text-gray-500 hover:text-gray-900">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-gray-900">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-gray-900">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-gray-900">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
