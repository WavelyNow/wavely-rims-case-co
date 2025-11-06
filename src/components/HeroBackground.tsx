import { useEffect, useMemo, useRef, useState } from "react";
import BackgroundFX from "./BackgroundFX";
import heroImage from "@/assets/hero-image.jpg";

type HeroBackgroundProps = {
  className?: string;
  poster?: string;
};

// High-impact hero background: tries to play a lightweight video, falls back to animated FX.
// Performance: uses poster, metadata preload, muted+inline autoplay, fades in only when ready.
// Accessibility: respects prefers-reduced-motion and stops video when reduced motion is on.
const HeroBackground = ({ className = "", poster = heroImage }: HeroBackgroundProps) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [videoReady, setVideoReady] = useState(false);
  const [useFallback, setUseFallback] = useState(false);

  const reduceMotion = useMemo(() => (
    typeof window !== "undefined" && window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches
  ), []);

  const isMobile = useMemo(() => (
    typeof window !== "undefined" && window.matchMedia && window.matchMedia("(max-width: 640px)").matches
  ), []);

  useEffect(() => {
    if (reduceMotion) {
      setUseFallback(true);
      return;
    }
    const v = videoRef.current;
    if (!v) return;
    const onCanPlay = () => setVideoReady(true);
    const onError = () => setUseFallback(true);
    v.addEventListener("canplay", onCanPlay);
    v.addEventListener("error", onError);
    return () => {
      v.removeEventListener("canplay", onCanPlay);
      v.removeEventListener("error", onError);
    };
  }, [reduceMotion]);

  return (
    <div className={`absolute inset-0 -z-10 overflow-hidden ${className}`} aria-hidden>
      {/* Gradient base to support brand palette and CTA contrast */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/80 to-background/60" />

      {/* Original hero image for familiar brand feel */}
      <img
        src={poster}
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-50"
        decoding="async"
        loading="eager"
      />

      {/* Try video first; fade in when ready. Sources should be added to public/ if available. */}
      {!useFallback && (
        <video
          ref={videoRef}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${videoReady ? "opacity-45" : "opacity-0"}`}
          preload="metadata"
          playsInline
          muted
          loop
          autoPlay
          poster={poster}
        >
          {/* Provide multiple sources; browser picks supported codec. If missing, onError triggers fallback. */}
          <source src="/hero-bg.webm" type="video/webm" />
          <source src="/hero-bg.mp4" type="video/mp4" />
        </video>
      )}

      {/* Fallback animated background for immediate impact and reliability */}
      {(useFallback || !videoReady) && (
        <BackgroundFX intensity={isMobile ? "low" : "medium"} />
      )}

      {/* Subtle vignette for focus on hero content */}
      <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/55 to-transparent" />
    </div>
  );
};

export default HeroBackground;
