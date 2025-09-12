import { createClient } from '@supabase/supabase-js'

// Version 2.0 - Fixed environment variable handling
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

console.log('Supabase Config Check:', { 
  hasUrl: !!supabaseUrl, 
  hasKey: !!supabaseAnonKey,
  version: '2.0'
})

// Create a mock client for demo purposes when env vars are missing
const createMockClient = () => ({
  from: () => ({
    insert: () => Promise.resolve({ data: null, error: null }),
    select: () => Promise.resolve({ data: [], error: null }),
    update: () => Promise.resolve({ data: null, error: null })
  })
})

export const supabase = supabaseUrl && supabaseAnonKey 
  ? createClient(supabaseUrl, supabaseAnonKey)
  : createMockClient()

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