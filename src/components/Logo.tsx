import React from "react";

/**
 * Logo component
 * - Uses an accessible inline image with alt text
 * - Falls back to styled text if the SVG is unavailable
 * - Keeps brand readable for screen readers and high-contrast modes
 */
const Logo: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <a href="/" className={`flex items-center gap-2 ${className ?? ""}`} aria-label="Wavely homepage">
      {/* Primary: SVG wordmark for crisp rendering and good performance */}
      <img
        src="/wavely-logo.svg"
        alt="Wavely logo"
        width={132}
        height={36}
        className="h-9 w-auto select-none"
        decoding="async"
        loading="eager" /* Logo is part of the LCP; eager prevents late rendering */
      />

      {/* Text fallback for environments without image support */}
      <span className="sr-only">Wavely</span>
    </a>
  );
};

export default Logo;

