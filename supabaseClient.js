// supabaseClient.js
import { createClient } from "@supabase/supabase-js";

// Replace with your actual Supabase project URL and anon key
const supabaseUrl = "https://hxbtzqghmmeyemqqiaau.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh4YnR6cWdobW1leWVtcXFpYWF1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDAyNTQ3MjgsImV4cCI6MjA1NTgzMDcyOH0.1R0bODLIai2gn276DyeIqxNZbrwl2XTWxrTGwG7Oa98";

export const supabase = createClient(supabaseUrl, supabaseKey);
