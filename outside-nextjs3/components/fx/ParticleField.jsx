"use client";

import { useEffect, useRef } from "react";

/**
 * Campo fixo de partículas/luzes âmbar atrás da página inteira.
 * Mesmo sistema da versão HTML. Contagem reduzida em mobile; off em reduced-motion.
 */
export default function ParticleField() {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const REDUCED = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const IS_MOBILE = window.matchMedia && window.matchMedia("(max-width: 760px)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, IS_MOBILE ? 1.25 : 1.75);

    let W = 0, H = 0, parts = [], lights = [];
    const COUNT = REDUCED ? 0 : IS_MOBILE ? 14 : 46;
    const LIGHTS = REDUCED ? 1 : IS_MOBILE ? 2 : 4;

    const sprite = document.createElement("canvas");
    sprite.width = sprite.height = 64;
    const sctx = sprite.getContext("2d");
    const g = sctx.createRadialGradient(32, 32, 0, 32, 32, 32);
    g.addColorStop(0, "rgba(217,163,91,0.9)");
    g.addColorStop(0.4, "rgba(217,163,91,0.35)");
    g.addColorStop(1, "rgba(217,163,91,0)");
    sctx.fillStyle = g; sctx.beginPath(); sctx.arc(32, 32, 32, 0, Math.PI * 2); sctx.fill();

    const rand = (a, b) => a + Math.random() * (b - a);
    const resize = () => {
      W = canvas.clientWidth; H = canvas.clientHeight;
      canvas.width = Math.floor(W * dpr); canvas.height = Math.floor(H * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    const build = () => {
      parts = [];
      for (let i = 0; i < COUNT; i++) parts.push({ x: rand(0, W), y: rand(0, H), r: rand(1.2, 3.6), vy: rand(-0.18, -0.5), vx: rand(-0.12, 0.12), a: rand(0.15, 0.55), tw: rand(0, 6.28), ts: rand(0.6, 1.6) });
      lights = [];
      for (let j = 0; j < LIGHTS; j++) lights.push({ x: rand(0, W), y: rand(0, H), r: rand(120, 260), vx: rand(-0.08, 0.08), vy: rand(-0.05, 0.05), a: rand(0.04, 0.1), hue: j % 2 ? "232,122,26" : "217,163,91" });
    };
    resize(); build();
    const onResize = () => { resize(); build(); };
    window.addEventListener("resize", onResize);

    let raf, running = true, last = performance.now();
    const frame = (now) => {
      if (!running) return;
      const dt = Math.min(2.5, (now - last) / 16.67); last = now;
      ctx.clearRect(0, 0, W, H);
      ctx.globalCompositeOperation = "lighter";
      for (const li of lights) {
        li.x += li.vx * dt; li.y += li.vy * dt;
        if (li.x < -li.r) li.x = W + li.r; if (li.x > W + li.r) li.x = -li.r;
        if (li.y < -li.r) li.y = H + li.r; if (li.y > H + li.r) li.y = -li.r;
        const lg = ctx.createRadialGradient(li.x, li.y, 0, li.x, li.y, li.r);
        lg.addColorStop(0, `rgba(${li.hue},${li.a})`);
        lg.addColorStop(1, `rgba(${li.hue},0)`);
        ctx.fillStyle = lg;
        ctx.fillRect(li.x - li.r, li.y - li.r, li.r * 2, li.r * 2);
      }
      for (const p of parts) {
        p.x += p.vx * dt; p.y += p.vy * dt; p.tw += 0.03 * p.ts * dt;
        if (p.y < -10) { p.y = H + 10; p.x = rand(0, W); }
        if (p.x < -10) p.x = W + 10; if (p.x > W + 10) p.x = -10;
        const tw = 0.6 + 0.4 * Math.sin(p.tw);
        ctx.globalAlpha = p.a * tw;
        const s = p.r * 4;
        ctx.drawImage(sprite, p.x - s / 2, p.y - s / 2, s, s);
      }
      ctx.globalAlpha = 1; ctx.globalCompositeOperation = "source-over";
      raf = requestAnimationFrame(frame);
    };
    if (COUNT > 0 || LIGHTS > 0) raf = requestAnimationFrame(frame);

    const onVis = () => {
      running = !document.hidden;
      if (running) { last = performance.now(); raf = requestAnimationFrame(frame); }
      else cancelAnimationFrame(raf);
    };
    document.addEventListener("visibilitychange", onVis);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      document.removeEventListener("visibilitychange", onVis);
    };
  }, []);

  return <canvas ref={ref} className="fx-global" aria-hidden="true" />;
}
