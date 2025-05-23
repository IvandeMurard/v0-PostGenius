"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { formatDistanceToNow } from "date-fns"

interface Post {
  id: number
  title: string
  author: string
  role: string
  avatar: string
  content: string
  date: string
}

export default function PostCarousel() {
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [visiblePosts, setVisiblePosts] = useState<number[]>([])
  const [postsPerView, setPostsPerView] = useState(1)
  const [isAnimating, setIsAnimating] = useState(false)
  const carouselRef = useRef<HTMLDivElement>(null)

  // Fetch posts from API
  useEffect(() => {
    async function fetchPosts() {
      try {
        setLoading(true)
        const response = await fetch("/api/posts")

        if (!response.ok) {
          throw new Error(`Failed to fetch posts: ${response.status}`)
        }

        const data = await response.json()
        setPosts(data)
        setError(null)
      } catch (err) {
        console.error("Error fetching posts:", err)
        setError(err instanceof Error ? err.message : "Failed to load posts")
      } finally {
        setLoading(false)
      }
    }

    fetchPosts()
  }, [])

  // Handle responsive layout
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setPostsPerView(3)
      } else if (window.innerWidth >= 768) {
        setPostsPerView(2)
      } else {
        setPostsPerView(1)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Update visible posts when currentIndex or postsPerView changes
  useEffect(() => {
    if (posts.length === 0) return

    const indices = []
    for (let i = 0; i < postsPerView; i++) {
      indices.push((currentIndex + i) % posts.length)
    }
    setVisiblePosts(indices)
  }, [currentIndex, postsPerView, posts.length])

  const nextSlide = () => {
    if (isAnimating || posts.length === 0) return

    setIsAnimating(true)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % posts.length)

    // Reset animation state after transition completes
    setTimeout(() => {
      setIsAnimating(false)
    }, 500)
  }

  const prevSlide = () => {
    if (isAnimating || posts.length === 0) return

    setIsAnimating(true)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + posts.length) % posts.length)

    // Reset animation state after transition completes
    setTimeout(() => {
      setIsAnimating(false)
    }, 500)
  }

  // Format date to relative time (e.g., "2 days ago")
  const formatDate = (dateString: string) => {
    try {
      return formatDistanceToNow(new Date(dateString), { addSuffix: true })
    } catch (error) {
      return "recently"
    }
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-600"></div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-red-500">Error loading posts: {error}</div>
      </div>
    )
  }

  if (posts.length === 0) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-gray-500">No posts available</div>
      </div>
    )
  }

  return (
    <div className="relative">
      <div className="flex items-center justify-between mb-6">
        <Button
          variant="outline"
          size="icon"
          onClick={prevSlide}
          disabled={isAnimating}
          aria-label="Previous post"
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md hover:bg-gray-100 -ml-4 md:ml-0"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={nextSlide}
          disabled={isAnimating}
          aria-label="Next post"
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md hover:bg-gray-100 -mr-4 md:mr-0"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
      <div ref={carouselRef} className="flex gap-4 overflow-hidden px-4">
        {visiblePosts.map((index) => (
          <Card
            key={posts[index].id}
            className={`min-w-[300px] flex-1 border-none shadow-lg transition-all duration-500 ease-in-out ${
              isAnimating ? "transform scale-95 opacity-80" : "transform scale-100 opacity-100"
            }`}
          >
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-12 w-12 rounded-full overflow-hidden">
                  <img
                    src={posts[index].avatar || "/placeholder.svg?height=50&width=50"}
                    alt={posts[index].author}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold">{posts[index].author}</h4>
                  <p className="text-sm text-gray-500">{posts[index].role}</p>
                </div>
              </div>
              <h3 className="text-lg font-bold mb-2">{posts[index].title}</h3>
              <p className="mb-4 text-gray-700">{posts[index].content}</p>
              {/* Affichage du contenu média en fonction du format */}
{posts[index].role === "image" && posts[index].imageUrl && (
  <img
    src={posts[index].imageUrl}
    alt="Post image"
    className="w-full rounded-lg mt-4"
  />
)}

{posts[index].role === "video" && posts[index].videoUrl && (
  <video
    src={posts[index].videoUrl}
    controls
    className="w-full rounded-lg mt-4"
  />
)}

{posts[index].role === "audio" && posts[index].audioUrl && (
  <audio
    controls
    className="w-full mt-4"
  >
    <source src={posts[index].audioUrl} type="audio/mpeg" />
    Audio not supported by your browser. Try Chrome, Firefox, or Safari.
  </audio>
)}

              <div className="text-sm text-gray-500">{formatDate(posts[index].date)}</div>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="flex justify-center mt-6">
        {posts.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (!isAnimating) {
                setIsAnimating(true)
                setCurrentIndex(index)
                setTimeout(() => setIsAnimating(false), 500)
              }
            }}
            className={`h-2 w-2 rounded-full mx-1 transition-all duration-300 ${
              visiblePosts.includes(index) ? "bg-purple-600 w-4" : "bg-gray-300"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
