"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

// "Why work with Elena". The heading column stays pinned while the reasons
// scroll past. The reason in the middle of the screen is sharp and bright,
// the rest are blurred and dimmed, and a giant outlined numeral follows along.
export default function WhyElena({ reasons }) {
  const [active, setActive] = useState(0);
  const refs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(Number(e.target.dataset.index));
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
    );
    refs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className='grid gap-12 lg:grid-cols-[1fr_1.55fr] lg:gap-20'>
      <div className='lg:sticky lg:top-32 lg:h-fit'>
        <p className='mb-4 font-body text-xs uppercase tracking-[0.25em] text-sage'>
          Why work with Elena
        </p>
        <h2 className='font-display text-5xl italic leading-[1.05] text-forest md:text-6xl'>
          Four reasons clients <span className='text-sage'>come back</span>
        </h2>
        <p className='mt-5 max-w-sm font-body leading-relaxed text-forest/65'>
          Eleven years in three neighbourhoods has taught Elena what matters to
          buyers and sellers. It comes down to these.
        </p>
        <Link
          href='/about'
          className='mt-7 inline-block border-b border-forest/40 pb-1 font-body text-sm text-forest transition-colors hover:border-forest'
        >
          Meet Elena
        </Link>
        <p
          key={active}
          aria-hidden='true'
          className='el-ghost el-pop mt-8 hidden font-display italic leading-none lg:block'
          style={{ fontSize: "11rem" }}
        >
          0{active + 1}
        </p>
      </div>

      <ol className='space-y-14 lg:space-y-[18vh] lg:py-[8vh]'>
        {reasons.map((r, i) => (
          <li
            key={r.title}
            ref={(el) => {
              refs.current[i] = el;
            }}
            data-index={i}
            className='grid items-center gap-6 sm:grid-cols-[230px_1fr] sm:gap-10'
          >
            <div className='el-focus' data-active={active === i}>
              <div className='relative aspect-[4/5] overflow-hidden shadow-xl'>
                <Image
                  src={r.image}
                  alt=''
                  fill
                  sizes='(max-width: 640px) 100vw, 230px'
                  className='object-cover'
                />
              </div>
            </div>
            <div className='el-dim' data-active={active === i}>
              <p className='font-body text-xs uppercase tracking-[0.25em] text-sage'>
                0{i + 1}
              </p>
              <h3 className='mt-2 font-display text-3xl italic text-forest md:text-4xl'>
                {r.title}
              </h3>
              <p className='mt-3 max-w-md font-body leading-relaxed text-forest/70'>
                {r.body}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
