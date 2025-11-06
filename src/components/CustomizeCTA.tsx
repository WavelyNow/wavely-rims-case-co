import React, { useEffect, useMemo, useState } from "react";
import { ArrowRight } from "lucide-react";

type CustomizeCTAProps = {
  location?: string; // where the CTA is rendered (nav, card, hero, etc.)
  className?: string;
  size?: "sm" | "md" | "lg";
  label?: string;
  fullWidth?: boolean;
};

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
    analytics?: { track: (event: string, props?: Record<string, any>) => void };
  }
}

function track(event: string, props: Record<string, any> = {}) {
  try {
    if (typeof window.gtag === "function") {
      window.gtag("event", event, props);
    }
    if (Array.isArray(window.dataLayer)) {
      window.dataLayer.push({ event, ...props });
    }
    if (window.analytics && typeof window.analytics.track === "function") {
      window.analytics.track(event, props);
    }
  } catch (_) {}
}

const VARIANT_KEY = "cta_customize_variant";

export const CustomizeCTA: React.FC<CustomizeCTAProps> = ({
  location = "unknown",
  className,
  size = "md",
  label = "Customize Now",
  fullWidth = false,
}) => {
  const [variant, setVariant] = useState<"A" | "B">("A");

  useEffect(() => {
    const existing = localStorage.getItem(VARIANT_KEY) as "A" | "B" | null;
    const chosen = existing ?? (Math.random() < 0.5 ? "A" : "B");
    setVariant(chosen);
    if (!existing) localStorage.setItem(VARIANT_KEY, chosen);
    track("cta_customize_impression", { variant: chosen, location });
  }, [location]);

  const baseSize = useMemo(() => {
    switch (size) {
      case "sm":
        return "h-9 px-4 text-sm";
      case "lg":
        return "h-12 px-6 text-base";
      default:
        return "h-10 px-5 text-sm";
    }
  }, [size]);

  const variantStyles = useMemo(() => {
    if (variant === "A") {
      return "bg-gradient-accent text-white shadow-glow";
    }
    return "bg-primary text-primary-foreground shadow-card";
  }, [variant]);

  const widthClass = fullWidth ? "w-full" : "w-auto";

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    track("cta_customize_click", { variant, location });
  };

  return (
    <a
      href="/customize"
      onClick={handleClick}
      aria-label="Customize your case"
      className={`${widthClass} inline-flex items-center justify-center rounded-lg font-semibold ${baseSize} ${variantStyles} ${
        className ?? ""
      } transition-transform motion-safe:hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 group`}
    >
      {label}
      <ArrowRight className="ml-2 h-4 w-4 motion-safe:group-hover:translate-x-1 transition-transform" />
    </a>
  );
};

export default CustomizeCTA;

