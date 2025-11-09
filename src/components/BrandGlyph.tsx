import React from "react";

/**
 * BrandGlyph
 * A compact logo glyph for use where an icon is needed.
 * Uses the existing public/wavely-logo.svg asset.
 */
const BrandGlyph: React.FC<{ className?: string; title?: string }> = ({ className, title }) => {
  return (
    <img
      src="/wavely-logo.svg"
      alt={title ?? "Wavely"}
      width={24}
      height={24}
      className={className ?? "h-5 w-5"}
      decoding="async"
      loading="lazy"
    />
  );
};

export default BrandGlyph;

