import Link from "next/link";
import ListingCard from "@/app/_components/ListingCard";
import HeroCarousel from "@/app/_components/HeroCarousel";
import FadeInSection from "@/app/_components/FadeInSection";
import WhyElena from "@/app/_components/WhyElena";
import ReviewsCarousel from "@/app/_components/ReviewsCarousel";
import CountUp from "@/app/_components/CountUp";
import Stars from "@/app/_components/Stars";
import { getFeaturedListings } from "@/app/_lib/listings";
import { reviews, averageRating } from "@/app/_lib/reviews";

// value is what the counter counts up to; suffix is shown after it.
const achievements = [
  { value: 11, label: "years in Maple Ridge, Ashford & Millbrook" },
  { value: 180, suffix: "+", label: "homes sold" },
  { value: 4.9, decimals: 1, label: "average client rating" },
  { value: 9, suffix: " days", label: "average time to accepted offer" },
];

// Photos reuse the listing images. Swap them for dedicated shots any time.
import reasonPhoto1 from "@/public/elim7.webp";
import reasonPhoto2 from "@/public/elim12.webp";
import reasonPhoto3 from "@/public/elim3.png";
import reasonPhoto4 from "@/public/elim9.webp";

const reasons = [
  {
    title: "Both sides of the table",
    body: "Elena represents buyers and sellers, so her pricing and negotiation advice comes from seeing both sides of every deal.",
    image: reasonPhoto1,
  },
  {
    title: "Homes she'd live in herself",
    body: "No padding a tour with weak listings. If Elena wouldn't be comfortable living there, she won't ask you to waste a Saturday on it.",
    image: reasonPhoto2,
  },
  {
    title: "Her own paperwork",
    body: "Elena handles the paperwork and scheduling directly, rather than routing everything through an assistant, so you always know who has your file.",
    image: reasonPhoto3,
  },
  {
    title: "Truly local",
    body: "She works three neighbourhoods, not a whole region. She knows the streets, the schools, and which blocks flood in spring.",
    image: reasonPhoto4,
  },
];

// Using the first 6 listing photos as placeholders for now — swap
// these for dedicated hero shots whenever you have them. The
// carousel doesn't care which images it's given.
import hero1 from "@/public/elim1.png";
import hero2 from "@/public/elim2.png";
import hero3 from "@/public/elim3.png";
import hero4 from "@/public/elim4.webp";
import hero5 from "@/public/elim5.webp";
import hero6 from "@/public/elim6.webp";

const heroImages = [hero1, hero2, hero3, hero4, hero5, hero6];

export default function HomePage() {
  const featured = getFeaturedListings();

  return (
    <>
      <section className='relative'>
        <HeroCarousel images={heroImages}>
          <div className='mx-auto max-w-6xl w-full px-6 pb-14'>
            <p
              className='font-body text-sm text-linen/70 mb-3'
              style={{ color: "#F4F1EA" }}
            >
              Maple Ridge, Ashford & Millbrook
            </p>
            <h1
              className='font-display text-5xl sm:text-6xl italic text-linen max-w-2xl leading-[1.05]'
              style={{ color: "#F4F1EA" }}
            >
              Homes worth slowing down for.
            </h1>
            <Link
              href='/listings'
              className='inline-block mt-8 font-body text-sm text-linen border-b border-linen/50 pb-1 hover:border-linen transition-colors'
              style={{ color: "#F4F1EA" }}
            >
              View current listings
            </Link>
          </div>
        </HeroCarousel>
      </section>

      <section className='mx-auto max-w-6xl px-6 py-20 border-t border-line/15'>
        <FadeInSection>
          <div className='flex items-baseline justify-between mb-8'>
            <h2 className='font-display text-3xl text-forest italic'>
              Featured Listings
            </h2>
            <Link
              href='/listings'
              className='font-body text-sm text-forest/60 hover:text-forest'
            >
              View all
            </Link>
          </div>
          <div className='grid sm:grid-cols-3 gap-8'>
            {featured.map((listing) => (
              <ListingCard key={listing.slug} listing={listing} />
            ))}
          </div>
        </FadeInSection>
      </section>

      {/* Why Elena: pinned heading, focus-on-scroll reasons */}
      <section className='border-t border-line/15'>
        <div className='mx-auto max-w-6xl px-6 py-24'>
          <WhyElena reasons={reasons} />
        </div>
      </section>

      {/* Numbers: count up when scrolled into view */}
      <section className='border-y border-line/15 bg-sand/25'>
        <div className='mx-auto max-w-6xl px-6 py-20'>
          <FadeInSection>
            <p className='mb-12 text-center font-body text-xs uppercase tracking-[0.25em] text-sage'>
              Elena by the numbers
            </p>
            <div className='grid grid-cols-2 gap-y-12 lg:grid-cols-4 lg:divide-x lg:divide-line/15'>
              {achievements.map((item) => (
                <div key={item.label} className='px-6 text-center'>
                  <p className='font-display text-6xl italic leading-none text-forest md:text-7xl'>
                    <CountUp
                      value={item.value}
                      decimals={item.decimals ?? 0}
                      suffix={item.suffix}
                    />
                  </p>
                  <p className='mx-auto mt-4 max-w-[12rem] font-body text-xs leading-snug text-forest/60'>
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Reviews */}
      <section className='overflow-hidden bg-forest text-linen'>
        <div className='mx-auto max-w-6xl px-6 pt-24'>
          <FadeInSection>
            <div className='flex flex-wrap items-end justify-between gap-6'>
              <div>
                <p className='mb-4 font-body text-xs uppercase tracking-[0.25em] text-sand'>
                  Client reviews
                </p>
                <h2 className='font-display text-5xl italic leading-[1.05] md:text-6xl'>
                  In their own words
                </h2>
              </div>
              <div className='flex items-center gap-4'>
                <p className='font-display text-6xl italic leading-none'>
                  {averageRating.toFixed(1)}
                </p>
                <div>
                  <Stars rating={5} size={18} />
                  <p className='mt-1 font-body text-xs text-linen/60'>
                    average from {reviews.length} demo reviews
                  </p>
                </div>
              </div>
            </div>
          </FadeInSection>
        </div>
        <div className='mx-auto max-w-[110rem] pb-20'>
          <ReviewsCarousel reviews={reviews} />
        </div>
      </section>
    </>
  );
}
