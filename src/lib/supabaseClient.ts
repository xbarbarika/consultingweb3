import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://zsswhvrcdzuaslpbarzb.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inpzc3dodnJjZHp1YXNscGJhcnpiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA2OTk0MjksImV4cCI6MjA2NjI3NTQyOX0.GcwqqNhnD4-K7V8_vlrhWlPsadKhJoMNHrFnZ6EcLsc'; 

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true,
    flowType: 'implicit'
  },
  global: {
    headers: {
      'X-Client-Info': 'supabase-js/2.50.0'
    }
  }
}); 