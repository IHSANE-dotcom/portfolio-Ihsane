"use client";

import { useEffect, useRef, useState } from "react";

/** Affichage progressif avec fallback immédiat sans IntersectionObserver. */
export function Reveal({ children, className = "", delay = 0 }: {children: React.ReactNode; className?: string; delay?: number}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) { return; }
    const element = ref.current;
    if (!element) return;
    const observer = new IntersectionObserver((entries) => {
      if (entries[0]?.isIntersecting) { setVisible(true); observer.disconnect(); }
    }, { threshold: 0.08, rootMargin: "0px 0px 35px 0px" });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);
  // SSR output remains visible; the reveal effect only decorates after client hydration.
  return <div ref={ref} className={`reveal ${visible ? "reveal-in" : ""} ${className}`} style={{"--reveal-delay": `${delay}ms`} as React.CSSProperties}>{children}</div>;
}
