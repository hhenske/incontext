import { createClient } from '@supabase/supabase-js'

// Replace these with your actual Supabase project credentials
// Store in .env as VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY
// Get them from: https://app.supabase.com → your project → Settings → API
const supabaseUrl     = import.meta.env.VITE_SUPABASE_URL     || 'https://your-project.supabase.co'
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'your-anon-key'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)