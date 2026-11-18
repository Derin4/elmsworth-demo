"use client";

import Image from "next/image";
import { useState } from "react";

/**
 * Renders a real photo via next/image when `src` is set, otherwise (or
 * if the image fails to load) falls back to the gradient placeholder
 * built from `tones`.
 *
 * `src` can be a static import (e.g. `import elim1 from "@/public/elim1.png"`)
 * — Next.js already knows its real width/height, so aspect ratio is
 * never guessed. It can also be a plain string path for images that
 * aren't statically imported.
 */
export default function ListingPhoto({
  src,
  tones,
  alt,
  className = "",
  children,
}) {
  const [errored, setErrored] = useState(false);
  const [from, to] = tones;
  const showImage = src && !errored;

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {showImage ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
          className='object-cover'
          onError={() => setErrored(true)}
        />
      ) : (
        <div
          className='absolute inset-0'
          style={{
            background: `linear-gradient(160deg, ${from} 0%, ${to} 100%)`,
          }}
        />
      )}
      {children}
    </div>
  );
}
