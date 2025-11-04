-- Create user roles enum and table
CREATE TYPE public.app_role AS ENUM ('admin', 'moderator', 'user');

CREATE TABLE public.user_roles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  role app_role NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE (user_id, role)
);

-- Enable RLS
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- Create security definer function to check roles
CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role app_role)
RETURNS BOOLEAN
LANGUAGE SQL
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = _user_id
      AND role = _role
  )
$$;

-- RLS policy for user_roles
CREATE POLICY "Users can view their own roles"
ON public.user_roles FOR SELECT
USING (auth.uid() = user_id);

-- Admin policies for discount codes management
CREATE POLICY "Admins can view all discount codes"
ON public.discount_codes FOR SELECT
USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can insert discount codes"
ON public.discount_codes FOR INSERT
WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update discount codes"
ON public.discount_codes FOR UPDATE
USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete discount codes"
ON public.discount_codes FOR DELETE
USING (public.has_role(auth.uid(), 'admin'));

-- Admin policies for viewing usage
CREATE POLICY "Admins can view all discount usage"
ON public.discount_code_usage FOR SELECT
USING (public.has_role(auth.uid(), 'admin'));

-- Admin policies for giveaways
CREATE POLICY "Admins can manage giveaways"
ON public.giveaways FOR ALL
USING (public.has_role(auth.uid(), 'admin'));

-- Admin policies for giveaway entries
CREATE POLICY "Admins can view all entries"
ON public.giveaway_entries FOR SELECT
USING (public.has_role(auth.uid(), 'admin'));

-- Admin policies for referral codes
CREATE POLICY "Admins can manage referral codes"
ON public.referral_codes FOR ALL
USING (public.has_role(auth.uid(), 'admin'));

-- Admin policies for referral usage
CREATE POLICY "Admins can view all referral usage"
ON public.referral_usage FOR SELECT
USING (public.has_role(auth.uid(), 'admin'));

-- Create indexes
CREATE INDEX idx_user_roles_user_id ON public.user_roles(user_id);
CREATE INDEX idx_user_roles_role ON public.user_roles(role);

-- Insert test admin user (you'll need to replace with real user_id after signup)
-- This is just a placeholder - you need to sign up first and then run this manually:
-- INSERT INTO public.user_roles (user_id, role) VALUES ('your-user-id-here', 'admin');