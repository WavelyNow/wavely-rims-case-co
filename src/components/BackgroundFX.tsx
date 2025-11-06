import { useEffect, useRef } from "react";

type BackgroundFXProps = {
  intensity?: "low" | "medium" | "high";
  className?: string;
};

// Animated background with aurora blobs, subtle grid, and floating particles.
// Respects prefers-reduced-motion and uses GPU-friendly transforms for performance.
const BackgroundFX = ({ intensity = "medium", className = "" }: BackgroundFXProps) => {
  const layerRef = useRef<HTMLDivElement | null>(null);
  const reduceMotion = typeof window !== "undefined" && window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  useEffect(() => {
    if (reduceMotion) return;
    const el = layerRef.current;
    if (!el) return;

    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        const y = window.scrollY || 0;
        // Parallax translate, very subtle
        el.style.transform = `translate3d(0, ${Math.min(20, y * 0.04)}px, 0)`;
        raf = 0;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [reduceMotion]);

  const particleCount = intensity === "high" ? 16 : intensity === "low" ? 8 : 12;

  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 -z-10 overflow-hidden ${className}`}
    >
      {/* Parallax layer */}
      <div ref={layerRef} className="absolute inset-0 will-change-transform">
        {/* Aurora blobs */}
        <div className="aurora-blob blob-primary" style={{ top: "-10%", left: "5%", width: "40vw", height: "40vw" }} />
        <div className="aurora-blob blob-accent" style={{ bottom: "-12%", right: "8%", width: "45vw", height: "45vw" }} />
        <div className="aurora-blob blob-neutral" style={{ top: "35%", left: "55%", width: "30vw", height: "30vw" }} />

        {/* Subtle animated grid overlay */}
        <div className="absolute inset-0 opacity-[0.08] grid-pan">
          <svg className="w-[200%] h-[200%]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" className="text-foreground" />
          </svg>
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0">
          {Array.from({ length: particleCount }).map((_, i) => (
            <span
              key={i}
              className="particle"
              style={{
                left: `${(i * 97) % 100}%`,
                top: `${(i * 53) % 100}%`,
                animationDuration: `${6 + (i % 5)}s`,
                animationDelay: `${i * 0.3}s`,
                opacity: 0.2 + ((i % 5) * 0.1),
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BackgroundFX;

