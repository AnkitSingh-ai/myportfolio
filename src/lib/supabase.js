// Version 3.0 - Complete fix for environment variable handling
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

console.log('Supabase Config Check v3.0:', { 
  hasUrl: !!supabaseUrl, 
  hasKey: !!supabaseAnonKey,
  url: supabaseUrl ? 'present' : 'missing',
  key: supabaseAnonKey ? 'present' : 'missing'
})

// Create a mock client for demo purposes when env vars are missing
const createMockClient = () => {
  console.log('Using mock Supabase client - no environment variables found')
  return {
    from: () => ({
      insert: () => Promise.resolve({ data: null, error: null }),
      select: () => Promise.resolve({ data: [], error: null }),
      update: () => Promise.resolve({ data: null, error: null })
    })
  }
}

// Only create real client if both variables exist
let supabase
try {
  if (supabaseUrl && supabaseAnonKey) {
    // Dynamic import to avoid errors
    const { createClient } = await import('@supabase/supabase-js')
    supabase = createClient(supabaseUrl, supabaseAnonKey)
    console.log('Real Supabase client created')
  } else {
    supabase = createMockClient()
  }
} catch (error) {
  console.warn('Error creating Supabase client, using mock:', error)
  supabase = createMockClient()
}

export { supabase }

// Database operations for contact submissions
export const contactService = {
  async submitContact(data) {
    if (!supabaseUrl || !supabaseAnonKey) {
      console.log('Demo mode: Contact form submission simulated')
      return { id: 'demo-' + Date.now() }
    }
    
    const { data: result, error } = await supabase
      .from('contact_submissions')
      .insert([data])
      .select()
      .single()
    
    if (error) throw error
    return result
  },

  async getSubmissions() {
    if (!supabaseUrl || !supabaseAnonKey) {
      return []
    }
    
    const { data, error } = await supabase
      .from('contact_submissions')
      .select('*')
      .order('created_at', { ascending: false })
    
    if (error) throw error
    return data
  },

  async markAsRead(id) {
    if (!supabaseUrl || !supabaseAnonKey) {
      return
    }
    
    const { error } = await supabase
      .from('contact_submissions')
      .update({ read_at: new Date().toISOString() })
      .eq('id', id)
    
    if (error) throw error
  }
}