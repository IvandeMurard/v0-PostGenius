import { createClient } from "@supabase/supabase-js"

// Create a single supabase client for the entire app
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL || ""
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || process.env.SUPABASE_ANON_KEY || ""

// For server components
export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// For client components (singleton pattern)
let clientSingleton: ReturnType<typeof createClient> | null = null

export function getSupabaseBrowser() {
  if (clientSingleton) return clientSingleton

  clientSingleton = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL || "",
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "",
  )

  return clientSingleton
}
