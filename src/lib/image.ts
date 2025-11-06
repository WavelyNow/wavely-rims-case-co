export function normalizeModelImage(url: string): string {
  if (!url) return url;
  return url.replace("https://via.placeholder.com/1200", "https://placehold.co/1200x1200");
}

export function buildFallbackSvg(label: string): string {
  const text = encodeURIComponent(label || "Phone");
  const svg = `<?xml version='1.0' encoding='UTF-8'?>\
<svg xmlns='http://www.w3.org/2000/svg' width='1200' height='1200'>\
  <defs>\
    <linearGradient id='g' x1='0' y1='0' x2='1' y2='1'>\
      <stop offset='0%' stop-color='#0ea5e9'/>\
      <stop offset='100%' stop-color='#8b5cf6'/>\
    </linearGradient>\
  </defs>\
  <rect width='100%' height='100%' fill='url(#g)'/>\
  <text x='50%' y='50%' font-size='64' fill='white' font-family='Inter, Arial, sans-serif' text-anchor='middle' dominant-baseline='middle'>${text}</text>\
</svg>`;
  return `data:image/svg+xml;utf8,${svg}`;
}
