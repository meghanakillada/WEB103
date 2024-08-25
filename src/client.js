import { createClient } from '@supabase/supabase-js';

const URL = 'https://uqmjpjvftuvxmzvnkpwh.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVxbWpwanZmdHV2eG16dm5rcHdoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQzNzMzNjksImV4cCI6MjAzOTk0OTM2OX0.C4gmG4Ej1SkOwy3PIr5Aq_MkSgcuolOFwuCfRTzsiDU';

export const supabase = createClient(URL, API_KEY);