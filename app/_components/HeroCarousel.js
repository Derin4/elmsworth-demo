"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

/**
 * Full-bleed hero carousel with two ways to move between slides:
 * 1. Manual — native horizontal scroll (touch swipe, trackpad, click-drag)
 *    via CSS scroll-snap, plus arrow buttons and dots.
 * 2. Timed auto-advance — pauses on any manual interaction and resumes
 *    `interval` ms after the last one.
 *
 * `images` = array of static imports, e.g.
 *   import hero1 from "@/public/elim1.png";
 *   ...
 *   images={[hero1, hero2, hero3, hero4, hero5, hero6]}
 *
 * `children` renders as a fixed overlay on top of the scrolling track
 * (headline, CTA) — it does not scroll with the images.
 */
export default function HeroCarousel({ images, interval = 4000, children }) {
  const trackRef = useRef(null);
  const activeRef = useRef(0);
  const timeoutRef = useRef(null);
  const scrollEndTimerRef = useRef(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    activeRef.current = active;
  }, [active]);

  function goTo(index) {
    const i = (index + images.length) % images.length;
    const track = trackRef.current;
    if (track) {
      track.scrollTo({ left: i * track.clientWidth, behavior: "smooth" });
    }
    setActive(i);
  }

  // (Re)schedule the next auto-advance whenever the active slide
  // changes, whether that change came from autoplay, a button/dot
  // click, or the user manually scrolling.
  useEffect(() => {
    clearTimeout(timeoutRef.current);

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReduced || images.length <= 1) return;

    timeoutRef.current = setTimeout(() => {
      goTo(activeRef.current + 1);
    }, interval);

    return () => clearTimeout(timeoutRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active, interval, images.length]);

  // Detect manual scrolling (swipe/trackpad/drag) and sync `active`
  // once the scroll settles on a snapped slide.
  function handleScroll() {
    clearTimeout(scrollEndTimerRef.current);
    scrollEndTimerRef.current = setTimeout(() => {
      const track = trackRef.current;
      if (!track) return;
      const index = Math.round(track.scrollLeft / track.clientWidth);
      if (index !== activeRef.current) {
        setActive(index);
      }
    }, 120);
  }

  return (
    <div className='relative w-full h-[70vh] min-h-[460px] overflow-hidden'>
      <div
        ref={trackRef}
        onScroll={handleScroll}
        className='absolute inset-0 flex overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar'
      >
        {images.map((img, i) => (
          <div key={i} className='relative flex-none w-full h-full snap-center'>
            <Image
              src={img}
              alt=''
              fill
              priority={i === 0}
              sizes='100vw'
              className='object-cover'
            />
            {/* bottom-anchored scrim: keeps light text legible over
                any photo, regardless of how bright the top of the
                image is */}
            <div className='absolute inset-0 bg-gradient-to-t from-forest/80 via-forest/25 to-transparent' />
          </div>
        ))}
      </div>

      {/* overlay content — stays fixed, does not scroll with the track */}
      <div className='relative z-10 h-full flex items-end pointer-events-none'>
        <div className='pointer-events-auto w-full'>{children}</div>
      </div>

      {images.length > 1 && (
        <>
          <button
            type='button'
            onClick={() => goTo(active - 1)}
            aria-label='Previous image'
            className='absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center rounded-full bg-forest/30 hover:bg-forest/50 text-linen transition-colors'
          >
            &#8249;
          </button>
          <button
            type='button'
            onClick={() => goTo(active + 1)}
            aria-label='Next image'
            className='absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center rounded-full bg-forest/30 hover:bg-forest/50 text-linen transition-colors'
          >
            &#8250;
          </button>

          <div className='absolute bottom-6 right-6 z-20 flex gap-2'>
            {images.map((_, i) => (
              <button
                key={i}
                type='button'
                onClick={() => goTo(i)}
                aria-label={`Go to slide ${i + 1}`}
                className='h-2 rounded-full transition-all'
                style={{
                  backgroundColor:
                    i === active ? "#F4F1EA" : "rgba(244,241,234,0.4)",
                  width: i === active ? "20px" : "8px",
                }}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
