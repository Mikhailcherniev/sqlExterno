// supabaseClient.js
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://crnbzwbfznjoorhtibmj.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNybmJ6d2Jmem5qb29yaHRpYm1qIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjI4NzU2OTUsImV4cCI6MjAzODQ1MTY5NX0.Zw82yvbuvtPteuxlr9DeA5-3lW_83pxbwvqW8U3uAYw';

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY, {
  localStorage: AsyncStorage,
  detectSessionInUrl: false,
});
