// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://vpaqrxgvvoruzlkpmcyb.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZwYXFyeGd2dm9ydXpsa3BtY3liIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk2NDQ4NzUsImV4cCI6MjA1NTIyMDg3NX0.gWFMWMb0PwGfaNROTN8N5Qw4J22nkCLfxIlaHlm-7BI";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);