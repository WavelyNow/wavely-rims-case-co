import { useEffect, useState } from "react";

const MeshGradient = () => {
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => setReduceMotion(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Animated Mesh Gradient Base */}
      <div
        className={`absolute inset-0 bg-gradient-mesh ${
          reduceMotion ? "" : "animate-mesh-gradient"
        }`}
        style={{
          backgroundImage: `
            radial-gradient(at 0% 0%, hsl(var(--champagne) / 0.15) 0px, transparent 50%),
            radial-gradient(at 100% 0%, hsl(var(--warm-gray) / 0.1) 0px, transparent 50%),
            radial-gradient(at 100% 100%, hsl(var(--champagne) / 0.2) 0px, transparent 50%),
            radial-gradient(at 0% 100%, hsl(var(--deep-black) / 0.05) 0px, transparent 50%)
          `,
          backgroundColor: "hsl(var(--background))",
          backgroundSize: "200% 200%",
        }}
      />

      {/* Grain Texture Overlay */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.03] mix-blend-overlay pointer-events-none">
        <filter id="noiseFilter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.8"
            numOctaves="4"
            stitchTiles="stitch"
          />
          <feColorMatrix
            type="saturate"
            values="0"
          />
        </filter>
        <rect width="100%" height="100%" filter="url(#noiseFilter)" />
      </svg>

      {/* Subtle Vignette */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-deep-black/5" />
    </div>
  );
};

export default MeshGradient;
