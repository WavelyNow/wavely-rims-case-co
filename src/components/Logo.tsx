import React from "react";

/**
 * Logo component (wordmark)
 * - Renders the text "Wavely" with an animated neon gradient background
 * - Accessible and performant; no external image dependency
 */
const Logo: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <a href="/" className={`relative inline-flex items-center ${className ?? ""}`} aria-label="Wavely homepage">
      {/* Capsule cu border neon roșu-albastru cu flux continuu, forțat vizibil */}
      <span className="relative inline-flex items-center px-9 py-3 rounded-full backdrop-blur-md rb-flow-force rb-border-glow">
        <span className="relative z-10 text-white font-heading font-extrabold uppercase tracking-wider select-none">
          Wavely
        </span>
      </span>
    </a>
  );
};

export default Logo;

