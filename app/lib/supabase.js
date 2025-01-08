
const SUPABASE_URL = 'https://crydotnlrxbjjtahbibt.supabase.co'
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNyeWRvdG5scnhiamp0YWhiaWJ0Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcyNjY2OTczOCwiZXhwIjoyMDQyMjQ1NzM4fQ.bM094C86loXJXvAXY8k4uohPxmg-lBFsTgDhDwrybxE'

import { createClient } from "@supabase/supabase-js";

// const SUPABASE_KEY = process.env.SUPABASE_KEY

export const supabase = createClient(
   SUPABASE_URL,
   SUPABASE_KEY
);