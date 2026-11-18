# Elmsworth Properties

A demo website for **Elena Marsh, Realtor**, a fictional independent real estate agent serving Maple Ridge, Ashford and Millbrook.

**Live demo:** https://elmsworth-demo.derin-obasa.workers.dev/

> Elmsworth Properties, Elena Marsh, the listings, addresses and reviews are all fictional. This site was built for the MyClickAid demo gallery and does not represent a real business. Do not use any of the content as real.

## What it shows

- **Photo hero carousel** on the home page with a slow crossfade between property photos
- **Featured listings** and a full **listings page** with 15 fictitious homes (single family, townhouse, condo) across three neighbourhoods
- **Listing detail pages** with price, beds, baths, square footage, description and highlights
- **"Why Elena" section** with a pinned heading and reasons that come into focus as you scroll
- **Count-up stats** ("Elena by the numbers") that animate when scrolled into view
- **Client reviews carousel** with star ratings and a computed average
- **Mortgage calculator** for estimating monthly payments
- **Inquiry and contact forms** (demo only, nothing is sent)
- Fade-in on scroll, responsive header and footer, and an About page

## Built with

- [Next.js](https://nextjs.org/) (App Router, JavaScript)
- [Tailwind CSS v4](https://tailwindcss.com/)
- Cormorant Garamond and Manrope via `next/font/google`
- Static export (`output: "export"`), hosted on Cloudflare

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000 to view it.

To build the static site:

```bash
npm run build
```

The output goes to the `out/` folder.

## Project structure

```
app/
  _components/   Header, Footer, HeroCarousel, ListingCard, ListingPhoto,
                 ListingsClient, WhyElena, CountUp, ReviewsCarousel, Stars,
                 MortgageCalculator, InquiryForm, ContactClient, FadeInSection
  _lib/          listings.js, reviews.js, format.js (data and helpers)
  _style/        globals.css (Tailwind theme and colours)
  about/         About page
  contact/       Contact page
  listings/      Listings index and detail pages
  layout.js      Fonts, metadata, header and footer
  page.js        Home page
public/          Property photos (elim1 to elim15)
```

## Photos

Property photos live in `public/` as `elim1` to `elim15` (`.png` and `.webp`) and are imported statically, so Next.js reads each image's real dimensions. The home hero and the "Why Elena" section reuse the listing photos as placeholders.

To swap a photo, replace the file with the same name, or update the import at the top of `app/_lib/listings.js` or `app/page.js`.

## Editing the content

- **Listings:** edit the array in `app/_lib/listings.js`. Set `featured: true` to show a home on the home page.
- **Reviews:** edit `app/_lib/reviews.js`. The average rating is calculated automatically.
- **Stats:** edit the `achievements` list at the top of `app/page.js`.

## Deployment

The site exports to static files (`out/`) and deploys to Cloudflare Workers with static assets. Connect the GitHub repo, use `npm run build` as the build command, and let Cloudflare serve the `out` directory.

## About MyClickAid

MyClickAid builds websites for small businesses. This project is one of a gallery of fictional demo sites that show what we can do for different industries.
