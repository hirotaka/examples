import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "";
const supabaseKey = "";

const supabase = createClient(supabaseUrl, supabaseKey);

export default function useSupabase() {
  return { supabase };
}
