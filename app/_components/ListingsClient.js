"use client";

import { useMemo, useState } from "react";
import ListingCard from "@/app/_components/ListingCard";
import { listings } from "@/app/_lib/listings";

const TYPES = ["All", "Single Family", "Townhouse", "Condo"];

export default function ListingsClient() {
  const [type, setType] = useState("All");
  const [maxPrice, setMaxPrice] = useState(800000);
  const [minBeds, setMinBeds] = useState(0);

  const filtered = useMemo(() => {
    return listings.filter((l) => {
      if (type !== "All" && l.type !== type) return false;
      if (l.price > maxPrice) return false;
      if (l.beds < minBeds) return false;
      return true;
    });
  }, [type, maxPrice, minBeds]);

  return (
    <div className='mx-auto max-w-6xl px-6 py-16 grid sm:grid-cols-[220px_1fr] gap-12'>
      <aside className='font-body'>
        <p className='text-sm text-forest mb-4 font-medium'>Filter</p>

        <div className='mb-8'>
          <p className='text-xs uppercase tracking-wide text-forest/40 mb-3'>
            Property type
          </p>
          <div className='space-y-2'>
            {TYPES.map((t) => (
              <button
                key={t}
                onClick={() => setType(t)}
                className={`block w-full text-left text-sm px-3 py-2 transition-colors ${
                  type === t
                    ? "bg-sage/15 text-forest"
                    : "text-forest/60 hover:text-forest"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <div className='mb-8'>
          <p className='text-xs uppercase tracking-wide text-forest/40 mb-3'>
            Max price: ${maxPrice.toLocaleString()}
          </p>
          <input
            type='range'
            min={300000}
            max={800000}
            step={10000}
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
            className='w-full accent-[#556B58]'
          />
        </div>

        <div>
          <p className='text-xs uppercase tracking-wide text-forest/40 mb-3'>
            Minimum bedrooms
          </p>
          <div className='flex gap-2'>
            {[0, 2, 3, 4, 5].map((n) => (
              <button
                key={n}
                onClick={() => setMinBeds(n)}
                className={`text-sm w-9 h-9 border transition-colors ${
                  minBeds === n
                    ? "border-sage bg-sage/15 text-forest"
                    : "border-line/20 text-forest/60 hover:border-line/40"
                }`}
              >
                {n === 0 ? "Any" : n}
              </button>
            ))}
          </div>
        </div>
      </aside>

      <div>
        <p className='font-body text-sm text-forest/50 mb-6'>
          {filtered.length} {filtered.length === 1 ? "home" : "homes"} found
        </p>
        {filtered.length === 0 ? (
          <p className='font-body text-forest/60'>
            No listings match those filters right now.
          </p>
        ) : (
          <div className='grid sm:grid-cols-2 gap-8'>
            {filtered.map((listing) => (
              <ListingCard key={listing.slug} listing={listing} large />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
