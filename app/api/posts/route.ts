import { NextResponse } from "next/server"

// Sample LinkedIn posts data for fallback
const mockPosts = [
  {
    id: 1,
    title: "Marketing Insights",
    author: "Sarah Johnson",
    role: "Marketing Director",
    avatar: "/placeholder.svg?height=50&width=50",
    content:
      "Just released our Q2 marketing report! The data shows a 37% increase in engagement when using video content. #MarketingTips #DataDriven",
    date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: 2,
    title: "AI Revolution",
    author: "Michael Chen",
    role: "Tech Entrepreneur",
    avatar: "/placeholder.svg?height=50&width=50",
    content:
      "AI isn't just changing how we work—it's redefining what's possible. Today I shared how our startup leveraged GPT to reduce customer response time by 78%. #AIInnovation #StartupLife",
    date: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: 3,
    title: "Product Success Strategy",
    author: "Priya Patel",
    role: "Product Manager",
    avatar: "/placeholder.svg?height=50&width=50",
    content:
      "The key to product success? Listening to your users. We implemented a feedback loop that increased retention by 42% in just one quarter. Here's how we did it: (1/5)...",
    date: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: 4,
    title: "Sales Achievement",
    author: "David Wilson",
    role: "Sales Director",
    avatar: "/placeholder.svg?height=50&width=50",
    content:
      "Just closed our biggest deal of the year! The secret? Understanding the client's pain points before pitching solutions. #SalesTips #BusinessGrowth",
    date: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: 5,
    title: "Future of Work",
    author: "Emma Rodriguez",
    role: "HR Specialist",
    avatar: "/placeholder.svg?height=50&width=50",
    content:
      "Remote work is here to stay. Our latest employee survey shows 87% prefer a hybrid model. How is your company adapting to the new normal? #FutureOfWork #RemoteWork",
    date: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: 6,
    title: "Leadership Lessons",
    author: "James Thompson",
    role: "CEO",
    avatar: "/placeholder.svg?height=50&width=50",
    content:
      "The most important leadership lesson I've learned: Empathy drives results. When your team feels understood, they'll move mountains for you and your customers. #Leadership #CompanyCulture",
    date: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: 7,
    title: "Tech Transformation",
    author: "Sophia Lee",
    role: "CTO",
    avatar: "/placeholder.svg?height=50&width=50",
    content:
      "We migrated our entire infrastructure to the cloud in just 3 months. The result? 40% cost reduction and 99.99% uptime. Here's our approach: #CloudComputing #TechTransformation",
    date: new Date(Date.now() - 6 * 24 * 60 * 60 * 1000).toISOString(),
  },
]

export async function GET() {
  try {
    const response = await fetch(`${process.env.SUPABASE_URL}/rest/v1/linkedin_posts?select=*&order=created_at.desc`, {
      headers: {
        apikey: process.env.SUPABASE_ANON_KEY!,
        Authorization: `Bearer ${process.env.SUPABASE_ANON_KEY!}`,
      },
      cache: "no-store",
    })

    if (!response.ok) {
      throw new Error(`Supabase fetch error: ${response.statusText}`)
    }

    const data = await response.json()

  const mapped = data.map((p: any) => ({
  id: p.id,
  title: p.title,
  author: p.source || "AI Generator",
  role: p.format,
  avatar: "/placeholder.svg",
  content: p.content_text,
  date: p.created_at,
  imageUrl: p.image_url,
  videoUrl: p.video_url,
  audioUrl: p.audio_url,
}))

    return NextResponse.json(mapped)
  } catch (error) {
    console.error("API /api/posts error:", error)
    return NextResponse.json({ error: "Failed to load posts" }, { status: 500 })
  }
}
