import { useEffect, useRef } from "react";

type Intensity = "low" | "medium" | "high";

type StarfieldBackgroundProps = {
  intensity?: Intensity;
  interactive?: boolean;
  className?: string;
  forceAnimation?: boolean;
};

type Star = {
  x: number;
  y: number;
  z: number;
  baseAlpha: number;
  twinklePhase: number;
  size: number;
  vx: number;
  vy: number;
};

// GPU-friendly, responsive starfield with subtle day/night cycle and mouse parallax
// Respects prefers-reduced-motion and uses requestAnimationFrame
const StarfieldBackground = ({ intensity = "medium", interactive = true, className = "", forceAnimation = false }: StarfieldBackgroundProps) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const pointerRef = useRef<{ x: number; y: number } | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const shouldAnimate = forceAnimation || !reduceMotion;
    const dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1));

    let width = 0;
    let height = 0;
    let animationId = 0;
    let tick = 0;

    const stars: Star[] = [];

    const starCount = intensity === "high" ? 700 : intensity === "low" ? 260 : 480;

    const resize = () => {
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const makeStar = (): Star => {
      const z = Math.random() * 1 + 0.3; // depth for parallax/size
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        z,
        baseAlpha: 0.3 + Math.random() * 0.5,
        twinklePhase: Math.random() * Math.PI * 2,
        size: (Math.random() * 1.3 + 0.4) * z,
        vx: (Math.random() - 0.5) * 0.04 * z,
        vy: (Math.random() - 0.5) * 0.04 * z,
      };
    };

    const initStars = () => {
      stars.length = 0;
      for (let i = 0; i < starCount; i++) stars.push(makeStar());
    };

    const dayNightFactor = () => {
      // Slow cycle 40s from day(0) to night(1)
      const cycle = (tick % (40 * 60)) / (40 * 60);
      // linger more near night for better contrast
      return Math.min(1, Math.max(0, Math.sin(cycle * Math.PI)));
    };

    const drawBackground = (night: number) => {
      // gradient from deep navy to lighter blue depending on night factor
      const g = ctx.createLinearGradient(0, 0, 0, height);
      g.addColorStop(0, `hsl(${200 - night * 30}, 60%, ${10 + night * 6}%)`);
      g.addColorStop(1, `hsl(${215 - night * 25}, 60%, ${15 + night * 8}%)`);
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, width, height);
      // subtle vignette for night
      if (night >= 0.2) {
        ctx.globalAlpha = 0.25 * (night - 0.4);
        const g2 = ctx.createRadialGradient(width / 2, height / 2, Math.min(width, height) * 0.2, width / 2, height / 2, Math.max(width, height));
        g2.addColorStop(0, "rgba(0,0,0,0)");
        g2.addColorStop(1, "rgba(0,0,0,0.6)");
        ctx.fillStyle = g2;
        ctx.fillRect(0, 0, width, height);
        ctx.globalAlpha = 1;
      }
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!interactive) return;
      const rect = canvas.getBoundingClientRect();
      pointerRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };

    const onMouseLeave = () => {
      pointerRef.current = null;
    };

    const step = () => {
      tick++;
      const night = dayNightFactor();
      drawBackground(night);

      const pointer = pointerRef.current;

      for (let i = 0; i < stars.length; i++) {
        const s = stars[i];

        // Movement
        s.x += s.vx;
        s.y += s.vy;
        if (s.x < -2) s.x = width + 2;
        if (s.x > width + 2) s.x = -2;
        if (s.y < -2) s.y = height + 2;
        if (s.y > height + 2) s.y = -2;

        // Twinkle
        const twinkle = 0.55 + Math.sin(s.twinklePhase + tick * 0.02) * 0.5;
        let alpha = Math.min(1, Math.max(0.12, s.baseAlpha * twinkle * (0.85 + night * 0.6)));

        // Pointer proximity brightening
        if (interactive && pointer) {
          const dx = (s.x - pointer.x);
          const dy = (s.y - pointer.y);
          const dist = Math.sqrt(dx * dx + dy * dy);
          const boost = Math.max(0, 1 - dist / 140);
          alpha += boost * 0.6;

          // subtle parallax
          s.x += (dx / dist) * 0.15 * (1 - s.z);
          s.y += (dy / dist) * 0.15 * (1 - s.z);
        }

        // Draw
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
        ctx.shadowColor = `rgba(255, 255, 255, ${alpha})`;
        ctx.shadowBlur = 7 + s.z * 3.5;
        ctx.fill();
      }

      animationId = requestAnimationFrame(step);
    };

    const start = () => {
      resize();
      initStars();
      if (shouldAnimate) {
        animationId = requestAnimationFrame(step);
      } else {
        // Draw one static frame with stars visible
        const night = 0.3;
        drawBackground(night);
        for (let i = 0; i < stars.length; i++) {
          const s = stars[i];
          const alpha = Math.min(1, Math.max(0.2, s.baseAlpha * 0.9));
          ctx.beginPath();
          ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
          ctx.shadowColor = `rgba(255, 255, 255, ${alpha})`;
          ctx.shadowBlur = 7 + s.z * 3.5;
          ctx.fill();
        }
      }
    };

    start();
    window.addEventListener("resize", resize);
    if (interactive) {
      window.addEventListener("mousemove", onMouseMove);
      window.addEventListener("mouseleave", onMouseLeave);
    }

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
      if (interactive) {
        window.removeEventListener("mousemove", onMouseMove);
        window.removeEventListener("mouseleave", onMouseLeave);
      }
    };
  }, [intensity, interactive, forceAnimation]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 z-0 w-full h-full pointer-events-none ${className}`}
      aria-hidden="true"
    />
  );
};

export default StarfieldBackground;