"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * Interações de scroll da página:
 * - Reveals ricos via GSAP (stagger, y/scale/blur) — fallback p/ IntersectionObserver
 * - Parallax scrub em [data-parallax]
 * - Sticky CTA bar
 * Respeita prefers-reduced-motion.
 */
export default function ClientFx() {
  useEffect(() => {
    const REDUCED = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const els = Array.from(document.querySelectorAll(".reveal:not(.is-visible)"));
    const triggers = [];

    if (!REDUCED) {
      gsap.registerPlugin(ScrollTrigger);

      els.forEach((el) => {
        const tween = gsap.fromTo(
          el,
          { opacity: 0, y: 36, scale: 0.98, filter: "blur(8px)" },
          {
            opacity: 1, y: 0, scale: 1, filter: "blur(0px)",
            duration: 0.9, ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 86%", once: true },
            onStart: () => el.classList.add("is-visible"),
          }
        );
        if (tween.scrollTrigger) triggers.push(tween.scrollTrigger);
      });

      gsap.utils.toArray("[data-parallax]").forEach((el) => {
        const depth = parseFloat(el.getAttribute("data-parallax")) || 0.15;
        const tween = gsap.to(el, {
          yPercent: -depth * 100,
          ease: "none",
          scrollTrigger: { trigger: el.closest("section") || el, start: "top bottom", end: "bottom top", scrub: true },
        });
        if (tween.scrollTrigger) triggers.push(tween.scrollTrigger);
      });

      ScrollTrigger.refresh();
    } else {
      els.forEach((el) => el.classList.add("is-visible"));
    }

    // Sticky bar
    const bar = document.getElementById("stickyBar");
    const offer = document.getElementById("oferta");
    const onScroll = () => {
      if (!bar || !offer) return;
      const showAfter = window.innerHeight * 0.9;
      const offerTop = offer.getBoundingClientRect().top;
      const past = window.scrollY > showAfter;
      const nearOffer = offerTop < window.innerHeight && offerTop > -offer.offsetHeight;
      bar.classList.toggle("visible", past && !nearOffer);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      triggers.forEach((t) => t.kill());
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return null;
}
