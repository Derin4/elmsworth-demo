"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Wraps a section and fades/slides it in the first time it scrolls
 * into view. Deliberately subtle — a short opacity + 16px rise, once
 * per element, nothing looping or bouncy. Skips the animation
 * entirely for prefers-reduced-motion.
 */
export default function FadeInSection({ children, className = "" }) {
  const ref = useRef(null);
  // Lazy initializer — reads the media query once, synchronously, as the
  // component's first render, rather than setting state from inside an
  // effect (which React flags as an unnecessary render-triggering effect
  // when it happens unconditionally on mount). window is safe to read
  // here since this file is 'use client' and only ever renders in the
  // browser.
  const [visible, setVisible] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );

  useEffect(() => {
    if (visible) return; // reduced-motion case already resolved above

    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    observer.observe(node);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      } ${className}`}
    >
      {children}
    </div>
  );
}
