import Link from "next/link";
import { formatPrice } from "@/app/_lib/format";
import ListingPhoto from "@/app/_components/ListingPhoto";

export default function ListingCard({ listing, large = false }) {
  return (
    <Link href={`/listings/${listing.slug}`} className='group block'>
      <ListingPhoto
        src={listing.image}
        tones={listing.tones}
        alt={listing.address}
        className={`w-full ${large ? "aspect-[16/10]" : "aspect-[4/3]"}`}
      >
        <div className='absolute inset-0 bg-forest/0 group-hover:bg-forest/10 transition-colors duration-300 z-10' />
        <span className='absolute top-3 left-3 bg-linen/90 text-forest font-body text-xs px-2.5 py-1 z-10'>
          {listing.type}
        </span>
      </ListingPhoto>
      <div className='mt-3'>
        <div className='flex items-baseline justify-between'>
          <p className='font-display text-2xl text-forest'>
            {formatPrice(listing.price)}
          </p>
        </div>
        <p className='font-body text-sm text-forest/70'>{listing.address}</p>
        <p className='font-body text-xs text-forest/50 mt-0.5'>
          {listing.beds} bd &middot; {listing.baths} ba &middot;{" "}
          {listing.sqft.toLocaleString()} sqft &middot; {listing.city}
        </p>
      </div>
    </Link>
  );
}
