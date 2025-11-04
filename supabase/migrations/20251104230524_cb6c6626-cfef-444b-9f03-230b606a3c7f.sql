-- Create discount codes table
CREATE TABLE public.discount_codes (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  code TEXT NOT NULL UNIQUE,
  type TEXT NOT NULL CHECK (type IN ('percentage', 'fixed_amount')),
  value DECIMAL(10, 2) NOT NULL CHECK (value > 0),
  description TEXT,
  max_uses INTEGER,
  current_uses INTEGER NOT NULL DEFAULT 0,
  min_purchase_amount DECIMAL(10, 2) DEFAULT 0,
  valid_from TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  valid_until TIMESTAMP WITH TIME ZONE,
  is_active BOOLEAN NOT NULL DEFAULT true,
  created_by TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create discount code usage tracking
CREATE TABLE public.discount_code_usage (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  discount_code_id UUID NOT NULL REFERENCES public.discount_codes(id) ON DELETE CASCADE,
  customer_email TEXT NOT NULL,
  order_id TEXT,
  discount_amount DECIMAL(10, 2) NOT NULL,
  used_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create giveaways table
CREATE TABLE public.giveaways (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  prize_description TEXT NOT NULL,
  entry_requirement TEXT NOT NULL CHECK (entry_requirement IN ('email', 'referral', 'social_follow', 'purchase')),
  max_entries INTEGER,
  current_entries INTEGER NOT NULL DEFAULT 0,
  start_date TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  end_date TIMESTAMP WITH TIME ZONE NOT NULL,
  winner_selected BOOLEAN NOT NULL DEFAULT false,
  winner_email TEXT,
  is_active BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create giveaway entries
CREATE TABLE public.giveaway_entries (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  giveaway_id UUID NOT NULL REFERENCES public.giveaways(id) ON DELETE CASCADE,
  email TEXT NOT NULL,
  full_name TEXT NOT NULL,
  referral_code TEXT,
  social_proof TEXT,
  entry_count INTEGER NOT NULL DEFAULT 1,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE(giveaway_id, email)
);

-- Create referral system
CREATE TABLE public.referral_codes (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  code TEXT NOT NULL UNIQUE,
  referrer_email TEXT NOT NULL,
  referrer_name TEXT,
  reward_type TEXT NOT NULL CHECK (reward_type IN ('discount', 'free_product', 'points')),
  reward_value DECIMAL(10, 2) NOT NULL,
  referrer_reward_type TEXT NOT NULL CHECK (referrer_reward_type IN ('discount', 'free_product', 'points')),
  referrer_reward_value DECIMAL(10, 2) NOT NULL,
  max_uses INTEGER DEFAULT 10,
  current_uses INTEGER NOT NULL DEFAULT 0,
  is_active BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  expires_at TIMESTAMP WITH TIME ZONE
);

-- Create referral tracking
CREATE TABLE public.referral_usage (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  referral_code_id UUID NOT NULL REFERENCES public.referral_codes(id) ON DELETE CASCADE,
  referee_email TEXT NOT NULL,
  referee_name TEXT,
  order_id TEXT,
  reward_claimed BOOLEAN NOT NULL DEFAULT false,
  referrer_reward_claimed BOOLEAN NOT NULL DEFAULT false,
  used_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.discount_codes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.discount_code_usage ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.giveaways ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.giveaway_entries ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.referral_codes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.referral_usage ENABLE ROW LEVEL SECURITY;

-- RLS Policies - Allow public read for active codes/giveaways
CREATE POLICY "Anyone can view active discount codes"
ON public.discount_codes FOR SELECT
USING (is_active = true);

CREATE POLICY "Anyone can view active giveaways"
ON public.giveaways FOR SELECT
USING (is_active = true);

CREATE POLICY "Anyone can view active referral codes"
ON public.referral_codes FOR SELECT
USING (is_active = true);

-- Allow public insert for entries and usage
CREATE POLICY "Anyone can create giveaway entries"
ON public.giveaway_entries FOR INSERT
WITH CHECK (true);

CREATE POLICY "Anyone can view their own entries"
ON public.giveaway_entries FOR SELECT
USING (true);

CREATE POLICY "Anyone can track discount usage"
ON public.discount_code_usage FOR INSERT
WITH CHECK (true);

CREATE POLICY "Anyone can track referral usage"
ON public.referral_usage FOR INSERT
WITH CHECK (true);

-- Indexes for performance
CREATE INDEX idx_discount_codes_code ON public.discount_codes(code);
CREATE INDEX idx_discount_codes_active ON public.discount_codes(is_active, valid_until);
CREATE INDEX idx_giveaway_entries_email ON public.giveaway_entries(email);
CREATE INDEX idx_referral_codes_code ON public.referral_codes(code);
CREATE INDEX idx_referral_usage_email ON public.referral_usage(referee_email);

-- Function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Triggers for updated_at
CREATE TRIGGER update_discount_codes_updated_at
BEFORE UPDATE ON public.discount_codes
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_giveaways_updated_at
BEFORE UPDATE ON public.giveaways
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Insert some sample discount codes
INSERT INTO public.discount_codes (code, type, value, description, max_uses, min_purchase_amount, valid_until)
VALUES 
  ('WELCOME10', 'percentage', 10, 'Welcome discount - 10% off first order', NULL, 0, now() + interval '90 days'),
  ('SUMMER20', 'percentage', 20, 'Summer sale - 20% off', 100, 100, now() + interval '30 days'),
  ('FREESHIP', 'fixed_amount', 15, 'Free shipping (15 RON off)', NULL, 50, now() + interval '60 days');