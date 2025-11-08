import { useEffect, useState } from "react";

const NeonGrid = () => {
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
      <svg
        className="absolute inset-0 w-full h-full"
        style={{
          transform: "perspective(500px) rotateX(60deg)",
          transformOrigin: "bottom center",
        }}
      >
        <defs>
          <linearGradient id="gridGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(25 100% 50%)" stopOpacity="0.3" />
            <stop offset="50%" stopColor="hsl(190 100% 50%)" stopOpacity="0.5" />
            <stop offset="100%" stopColor="hsl(120 100% 60%)" stopOpacity="0.3" />
          </linearGradient>
        </defs>
        
        {/* Horizontal lines */}
        {[...Array(20)].map((_, i) => (
          <line
            key={`h-${i}`}
            x1="0%"
            y1={`${(i * 5)}%`}
            x2="100%"
            y2={`${(i * 5)}%`}
            stroke="url(#gridGradient)"
            strokeWidth="1"
            opacity={1 - (i * 0.04)}
            className={reduceMotion ? "" : "animate-grid"}
          />
        ))}
        
        {/* Vertical lines */}
        {[...Array(20)].map((_, i) => (
          <line
            key={`v-${i}`}
            x1={`${(i * 5)}%`}
            y1="0%"
            x2={`${(i * 5)}%`}
            y2="100%"
            stroke="url(#gridGradient)"
            strokeWidth="1"
            opacity="0.3"
          />
        ))}
      </svg>
      
      {/* Fade out towards horizon */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
    </div>
  );
};

export default NeonGrid;
