"use client";

import { useEffect, useRef, useState } from "react";
import Stars from "@/app/_components/Stars";

const AUTO_MS = 4500; // time each review stays centred
const IDLE_MS = 7000; // pause after the visitor touches the carousel

// Review carousel for a dark background. Cards scroll on their own, the card
// nearest the middle jumps up and gets a deeper shadow, and visitors can
// still use arrows, dots, swipe, mouse drag or the keyboard.
export default function ReviewsCarousel({ reviews }) {
  const track = useRef(null);
  const cards = useRef([]);
  const activeRef = useRef(1);
  const hovering = useRef(false);
  const inView = useRef(false);
  const wrap = useRef(null);
  const lastTouch = useRef(0);
  const drag = useRef({ down: false, x: 0, left: 0 });
  const [active, setActive] = useState(1);
  const [dragging, setDragging] = useState(false);

  const scrollToCard = (i, behavior = "smooth") => {
    const el = track.current;
    const card = cards.current[i];
    if (!el || !card) return;
    el.scrollTo({
      left: card.offsetLeft - (el.clientWidth - card.offsetWidth) / 2,
      behavior,
    });
  };

  // Start with the second review centred, so three cards are visible.
  useEffect(() => {
    scrollToCard(1, "auto");
  }, []);

  // Work out which card is nearest the middle whenever the track scrolls.
  useEffect(() => {
    const el = track.current;
    if (!el) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      const mid = el.scrollLeft + el.clientWidth / 2;
      let best = 0;
      let bestDist = Infinity;
      cards.current.forEach((c, i) => {
        if (!c) return;
        const d = Math.abs(c.offsetLeft + c.offsetWidth / 2 - mid);
        if (d < bestDist) {
          bestDist = d;
          best = i;
        }
      });
      activeRef.current = best;
      setActive(best);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      el.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  // Only auto-scroll while the carousel is actually on screen.
  useEffect(() => {
    const el = wrap.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        inView.current = entry.isIntersecting;
      },
      { threshold: 0.4 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Auto-scroll. Skips while hovered, after recent touches, in a background
  // tab, or when the visitor prefers reduced motion.
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => {
      if (!inView.current || hovering.current || document.hidden) return;
      if (Date.now() - lastTouch.current < IDLE_MS) return;
      scrollToCard((activeRef.current + 1) % reviews.length);
    }, AUTO_MS);
    return () => clearInterval(id);
  }, [reviews.length]);

  const go = (i) => {
    lastTouch.current = Date.now();
    scrollToCard((i + reviews.length) % reviews.length);
  };

  const onDown = (e) => {
    lastTouch.current = Date.now();
    if (e.pointerType !== "mouse") return;
    drag.current = {
      down: true,
      x: e.clientX,
      left: track.current.scrollLeft,
    };
    setDragging(true);
  };
  const onMove = (e) => {
    if (!drag.current.down) return;
    track.current.scrollLeft = drag.current.left - (e.clientX - drag.current.x);
  };
  const onUp = () => {
    if (!drag.current.down) return;
    drag.current.down = false;
    setDragging(false);
  };

  const arrow = (dir, label) => (
    <button
      type='button'
      aria-label={label}
      onClick={() => go(activeRef.current + dir)}
      className='flex h-11 w-11 items-center justify-center border border-linen/30 text-linen transition-colors hover:bg-linen hover:text-forest'
    >
      {dir < 0 ? "←" : "→"}
    </button>
  );

  return (
    <div
      ref={wrap}
      onMouseEnter={() => (hovering.current = true)}
      onMouseLeave={() => (hovering.current = false)}
    >
      <div
        ref={track}
        tabIndex={0}
        role='region'
        aria-label='Client reviews'
        onPointerDown={onDown}
        onPointerMove={onMove}
        onPointerUp={onUp}
        onPointerLeave={onUp}
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") go(activeRef.current + 1);
          if (e.key === "ArrowLeft") go(activeRef.current - 1);
        }}
        className={`no-scrollbar relative flex items-stretch gap-6 overflow-x-auto px-0 pb-16 pt-12 outline-none ${
          dragging
            ? "cursor-grabbing select-none"
            : "cursor-grab snap-x snap-mandatory"
        }`}
      >
        <span
          aria-hidden='true'
          className='w-[calc(50%-min(41vw,190px)-12px)] shrink-0'
        />
        {reviews.map((r, i) => (
          <figure
            key={r.name}
            ref={(el) => {
              cards.current[i] = el;
            }}
            data-active={active === i}
            className='el-card relative flex w-[min(82vw,380px)] shrink-0 snap-center flex-col bg-linen p-8 text-forest'
          >
            <span
              aria-hidden='true'
              className='absolute right-6 top-2 font-display text-8xl italic leading-none text-sand/70'
            >
              &ldquo;
            </span>
            <Stars rating={r.rating} />
            <blockquote className='mb-8 mt-5 font-display text-[1.35rem] italic leading-snug'>
              {r.quote}
            </blockquote>
            <figcaption className='mt-auto border-t border-line/15 pt-5 font-body text-sm'>
              <span className='block font-medium'>{r.name}</span>
              <span className='text-forest/55'>{r.detail}</span>
            </figcaption>
          </figure>
        ))}
        <span
          aria-hidden='true'
          className='w-[calc(50%-min(41vw,190px)-12px)] shrink-0'
        />
      </div>

      <div className='mx-auto mt-2 flex max-w-6xl items-center justify-between gap-4 px-6'>
        <div className='flex flex-wrap gap-2'>
          {reviews.map((r, i) => (
            <button
              key={r.name}
              type='button'
              aria-label={`Show review ${i + 1}`}
              onClick={() => go(i)}
              className='h-1.5 rounded-full transition-all duration-500'
              style={{
                width: active === i ? 28 : 8,
                backgroundColor:
                  active === i ? "#C7B899" : "rgba(244,241,234,0.3)",
              }}
            />
          ))}
        </div>
        <div className='flex gap-2'>
          {arrow(-1, "Previous review")}
          {arrow(1, "Next review")}
        </div>
      </div>
    </div>
  );
}
