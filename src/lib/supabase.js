import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database operations for contact submissions
export const contactService = {
  async submitContact(data) {
    const { data: result, error } = await supabase
      .from('contact_submissions')
      .insert([data])
      .select()
      .single()
    
    if (error) throw error
    return result
  },

  async getSubmissions() {
    const { data, error } = await supabase
      .from('contact_submissions')
      .select('*')
      .order('created_at', { ascending: false })
    
    if (error) throw error
    return data
  },

  async markAsRead(id) {
    const { error } = await supabase
      .from('contact_submissions')
      .update({ read_at: new Date().toISOString() })
      .eq('id', id)
    
    if (error) throw error
  }
}