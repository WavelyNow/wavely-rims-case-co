-- Fix giveaway_entries RLS policy (the critical one exposing all emails)
DROP POLICY IF EXISTS "Anyone can view their own entries" ON public.giveaway_entries;
DROP POLICY IF EXISTS "Admins can view all giveaway entries" ON public.giveaway_entries;

-- Create proper policy that actually restricts to user's own entries by email
CREATE POLICY "Users can view their own entries"
ON public.giveaway_entries
FOR SELECT
USING (email = current_setting('request.jwt.claims', true)::json->>'email');

-- Keep admin access to all entries
CREATE POLICY "Admins can view all giveaway entries"
ON public.giveaway_entries
FOR SELECT
TO authenticated
USING (has_role(auth.uid(), 'admin'::app_role));

-- Add database constraints for input validation using DO blocks
DO $$ 
BEGIN
  -- giveaway_entries constraints
  IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'check_full_name_length') THEN
    ALTER TABLE public.giveaway_entries ADD CONSTRAINT check_full_name_length CHECK (char_length(full_name) <= 100);
  END IF;
  
  IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'check_email_length') THEN
    ALTER TABLE public.giveaway_entries ADD CONSTRAINT check_email_length CHECK (char_length(email) <= 255);
  END IF;
  
  -- referral_codes constraints
  IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'check_referrer_name_length') THEN
    ALTER TABLE public.referral_codes ADD CONSTRAINT check_referrer_name_length CHECK (char_length(referrer_name) <= 100);
  END IF;
  
  IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'check_referrer_email_length') THEN
    ALTER TABLE public.referral_codes ADD CONSTRAINT check_referrer_email_length CHECK (char_length(referrer_email) <= 255);
  END IF;
  
  -- referral_usage constraints
  IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'check_referee_name_length') THEN
    ALTER TABLE public.referral_usage ADD CONSTRAINT check_referee_name_length CHECK (char_length(referee_name) <= 100);
  END IF;
  
  IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'check_referee_email_length') THEN
    ALTER TABLE public.referral_usage ADD CONSTRAINT check_referee_email_length CHECK (char_length(referee_email) <= 255);
  END IF;
  
  -- discount_codes constraints
  IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'check_code_length') THEN
    ALTER TABLE public.discount_codes ADD CONSTRAINT check_code_length CHECK (char_length(code) <= 50);
  END IF;
  
  IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'check_current_uses_within_max') THEN
    ALTER TABLE public.discount_codes ADD CONSTRAINT check_current_uses_within_max CHECK (current_uses <= COALESCE(max_uses, current_uses));
  END IF;
END $$;

-- Add trigger to automatically increment discount usage
CREATE OR REPLACE FUNCTION increment_discount_usage()
RETURNS TRIGGER AS $$
BEGIN
  UPDATE discount_codes 
  SET current_uses = current_uses + 1 
  WHERE id = NEW.discount_code_id;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

DROP TRIGGER IF EXISTS on_discount_usage_insert ON discount_code_usage;
CREATE TRIGGER on_discount_usage_insert
AFTER INSERT ON discount_code_usage
FOR EACH ROW
EXECUTE FUNCTION increment_discount_usage();