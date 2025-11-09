import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Force essential animations regardless of system prefers-reduced-motion
if (typeof window !== "undefined") {
  document.documentElement.classList.add("force-motion");
}

// In development, aggressively unregister any existing Service Worker for this origin.
// This prevents stale SWs (from prior projects on the same port) from intercepting
// requests and caching dev/HMR assets — which can break media like videos.
if (import.meta.env.DEV && typeof navigator !== "undefined" && "serviceWorker" in navigator) {
  navigator.serviceWorker
    .getRegistrations()
    .then((regs) => {
      if (regs.length) {
        console.info("[DEV] Unregistering", regs.length, "Service Worker(s) to avoid dev caching issues.");
      }
      regs.forEach((r) => r.unregister());
    })
    .catch(() => {});

  // Best-effort: clear SW-related caches to avoid serving cached responses
  // that might not support range requests needed by <video> playback.
  const w = window as unknown as { caches?: CacheStorage };
  if (w.caches && typeof w.caches.keys === "function") {
    w.caches.keys().then((keys) => {
      keys.forEach((key) => {
        if (/sw|workbox|pwa|asset/i.test(key)) {
          w.caches!.delete(key).catch(() => {});
        }
      });
    });
  }
}

createRoot(document.getElementById("root")!).render(<App />);
