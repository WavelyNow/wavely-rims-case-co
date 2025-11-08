import { useEffect, useState } from "react";

const Scanlines = () => {
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => setReduceMotion(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Static scanlines pattern */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            hsl(var(--foreground)) 2px,
            hsl(var(--foreground)) 4px
          )`,
        }}
      />
      
      {/* Animated scanline */}
      {!reduceMotion && (
        <div
          className="absolute w-full h-24 opacity-20 animate-scanline"
          style={{
            background: `linear-gradient(
              180deg,
              transparent,
              hsl(25 100% 50% / 0.3) 50%,
              transparent
            )`,
            filter: "blur(10px)",
          }}
        />
      )}
    </div>
  );
};

export default Scanlines;
