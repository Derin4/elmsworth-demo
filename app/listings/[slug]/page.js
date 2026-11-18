import { notFound } from "next/navigation";
import { getListingBySlug, listings } from "@/app/_lib/listings";
import { formatPrice } from "@/app/_lib/format";
import MortgageCalculator from "@/app/_components/MortgageCalculator";
import InquiryForm from "@/app/_components/InquiryForm";
import ListingPhoto from "@/app/_components/ListingPhoto";

export function generateStaticParams() {
  return listings.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const listing = getListingBySlug(slug);
  return {
    title: listing
      ? `${listing.address} — Elmsworth Properties`
      : "Elmsworth Properties",
  };
}

export default async function ListingDetailPage({ params }) {
  const { slug } = await params;
  const listing = getListingBySlug(slug);
  if (!listing) notFound();

  const [from, to] = listing.tones;

  return (
    <div>
      {/* Photo strip — one large + row of smaller, not a generic carousel */}
      <div className='mx-auto max-w-6xl px-6 pt-10'>
        <ListingPhoto
          src={listing.image}
          tones={listing.tones}
          alt={listing.address}
          className='w-full aspect-[16/8]'
        />
        <div className='grid grid-cols-4 gap-3 mt-3'>
          {[0, 1, 2, 3].map((i) => (
            <ListingPhoto
              key={i}
              src={listing.image}
              tones={listing.tones}
              alt={listing.address}
              className='aspect-[4/3]'
            />
          ))}
        </div>
      </div>

      <div className='mx-auto max-w-6xl px-6 py-14 grid sm:grid-cols-[1fr_360px] gap-14'>
        <div>
          <p className='font-body text-sm text-forest/50 mb-2'>
            {listing.type}
          </p>
          <h1 className='font-display text-4xl text-forest italic mb-1'>
            {listing.address}
          </h1>
          <p className='font-body text-forest/60 mb-4'>{listing.city}</p>
          <p className='font-display text-3xl text-forest mb-6'>
            {formatPrice(listing.price)}
          </p>

          <div className='flex gap-8 font-body text-sm text-forest/70 mb-8 pb-8 border-b border-line/15'>
            <span>{listing.beds} bedrooms</span>
            <span>{listing.baths} bathrooms</span>
            <span>{listing.sqft.toLocaleString()} sqft</span>
          </div>

          <p className='font-body text-forest/70 leading-relaxed max-w-prose mb-8'>
            {listing.description}
          </p>

          <p className='font-body text-sm text-forest mb-3'>Highlights</p>
          <ul className='space-y-1.5 font-body text-sm text-forest/60 mb-10'>
            {listing.highlights.map((h) => (
              <li key={h} className='flex gap-2'>
                <span className='text-forest/30'>—</span>
                {h}
              </li>
            ))}
          </ul>

          <MortgageCalculator price={listing.price} />
        </div>

        <div>
          <InquiryForm listingAddress={listing.address} />
        </div>
      </div>
    </div>
  );
}
