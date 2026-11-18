import elim1 from "@/public/elim1.png";
import elim2 from "@/public/elim2.png";
import elim3 from "@/public/elim3.png";
import elim4 from "@/public/elim4.webp";
import elim5 from "@/public/elim5.webp";
import elim6 from "@/public/elim6.webp";
import elim7 from "@/public/elim7.webp";
import elim8 from "@/public/elim8.png";
import elim9 from "@/public/elim9.webp";
import elim10 from "@/public/elim10.webp";
import elim11 from "@/public/elim11.webp";
import elim12 from "@/public/elim12.webp";
import elim13 from "@/public/elim13.webp";
import elim14 from "@/public/elim14.webp";
import elim15 from "@/public/elim15.webp";

// Fictitious listings for the Elmsworth Properties demo.
// `image` is a real photo (static import — Next.js reads its actual
// width/height automatically, so aspect ratio is never guessed).
// `tones` is kept only as a gradient fallback if `image` is ever
// missing or fails to load — see ListingPhoto.js.

export const listings = [
  {
    slug: "briar-hollow-lane",
    address: "142 Briar Hollow Lane",
    city: "Maple Ridge",
    price: 685000,
    beds: 4,
    baths: 3,
    sqft: 2650,
    type: "Single Family",
    featured: true,
    image: elim1,
    tones: ["#8A9B87", "#1F2B24"],
    description:
      "A four-bedroom colonial set back from the road behind a stand of red maples, updated through the kitchen and both bathrooms in the last two years while keeping the original 1920s trim throughout.",
    highlights: [
      "Updated kitchen, 2024",
      "Original hardwood floors",
      "Detached two-car garage",
      "Finished basement",
    ],
  },
  {
    slug: "stonegate-court-9",
    address: "9 Stonegate Court",
    city: "Ashford",
    price: 412000,
    beds: 3,
    baths: 2,
    sqft: 1780,
    type: "Townhouse",
    featured: true,
    image: elim2,
    tones: ["#C7B899", "#556B58"],
    description:
      "End-unit townhouse with an unusually private side yard for the neighborhood, backing onto a small wooded lot rather than another row of units.",
    highlights: [
      "End unit, extra windows",
      "Private side yard",
      "Attached garage",
      "HOA covers exterior",
    ],
  },
  {
    slug: "north-linden-118",
    address: "118 North Linden Ave",
    city: "Maple Ridge",
    price: 549000,
    beds: 3,
    baths: 2.5,
    sqft: 2100,
    type: "Single Family",
    featured: true,
    image: elim3,
    tones: ["#D8CFB8", "#3D3A34"],
    description:
      "A craftsman bungalow within walking distance of the Linden Ave shops, with a wraparound porch that catches the afternoon light most of the year.",
    highlights: [
      "Wraparound porch",
      "Walk to Linden Ave shops",
      "Updated electrical",
      "Fenced backyard",
    ],
  },
  {
    slug: "harborview-unit-6b",
    address: "400 Harborview Rd, Unit 6B",
    city: "Ashford",
    price: 329000,
    beds: 2,
    baths: 2,
    sqft: 1240,
    type: "Condo",
    featured: false,
    image: elim4,
    tones: ["#9DAFAA", "#1F2B24"],
    description:
      "Sixth-floor corner unit with water views from both the living room and primary bedroom, in a building with a doorman and a small fitness room.",
    highlights: [
      "Corner unit, water views",
      "Doorman building",
      "In-unit laundry",
      "Assigned parking",
    ],
  },
  {
    slug: "quarry-ridge-22",
    address: "22 Quarry Ridge Dr",
    city: "Millbrook",
    price: 795000,
    beds: 5,
    baths: 4,
    sqft: 3400,
    type: "Single Family",
    featured: false,
    image: elim5,
    tones: ["#556B58", "#C7B899"],
    description:
      "A newer build on just over an acre, with a layout designed around a home office and a bonus room that has served past owners as a gym, playroom, and studio.",
    highlights: [
      "1.1 acre lot",
      "Home office + bonus room",
      "Three-car garage",
      "Built 2019",
    ],
  },
  {
    slug: "cedarbrook-14",
    address: "14 Cedarbrook Ln",
    city: "Millbrook",
    price: 468000,
    beds: 3,
    baths: 2,
    sqft: 1920,
    type: "Single Family",
    featured: false,
    image: elim6,
    tones: ["#B7B09A", "#556B58"],
    description:
      "Split-level on a quiet cul-de-sac, with a lower-level family room that walks out to a covered patio and a yard backing onto town-owned woods.",
    highlights: [
      "Walk-out lower level",
      "Backs onto town woodland",
      "Covered patio",
      "New roof, 2023",
    ],
  },
  {
    slug: "millrace-row-7",
    address: "7 Millrace Row",
    city: "Ashford",
    price: 389000,
    beds: 2,
    baths: 1.5,
    sqft: 1350,
    type: "Townhouse",
    featured: false,
    image: elim7,
    tones: ["#A9B4A2", "#3D3A34"],
    description:
      "A narrow-lot townhouse two blocks from the river walk, with a small footprint that makes the most of double-height ceilings on the main floor.",
    highlights: [
      "Double-height living room",
      "Walk to river path",
      "Low-maintenance yard",
      "Updated windows, 2022",
    ],
  },
  {
    slug: "whitfield-orchard-3",
    address: "3 Whitfield Orchard Rd",
    city: "Millbrook",
    price: 612000,
    beds: 4,
    baths: 2.5,
    sqft: 2480,
    type: "Single Family",
    featured: false,
    image: elim8,
    tones: ["#C2B78E", "#1F2B24"],
    description:
      "Set among a handful of mature apple trees left from the original orchard the neighborhood was built around, with a kitchen extension added in 2021.",
    highlights: [
      "Mature apple trees on lot",
      "2021 kitchen extension",
      "Two-car attached garage",
      "Quiet dead-end street",
    ],
  },
  {
    slug: "east-hollow-9",
    address: "9 East Hollow Circle",
    city: "Maple Ridge",
    price: 445000,
    beds: 3,
    baths: 2,
    sqft: 1860,
    type: "Single Family",
    featured: false,
    image: elim9,
    tones: ["#9CA893", "#3D3A34"],
    description:
      "A tidy ranch on a corner lot, with the primary bedroom separated from the other two for a bit of distance at the end of the day.",
    highlights: [
      "Single-story layout",
      "Split bedroom design",
      "Corner lot, extra yard",
      "New furnace, 2023",
    ],
  },
  {
    slug: "harborview-unit-11a",
    address: "400 Harborview Rd, Unit 11A",
    city: "Ashford",
    price: 358000,
    beds: 2,
    baths: 2,
    sqft: 1310,
    type: "Condo",
    featured: false,
    image: elim10,
    tones: ["#8FA39B", "#1F2B24"],
    description:
      "Higher floor in the same building as our Unit 6B listing, with a wraparound balcony that most units on lower floors don't have.",
    highlights: [
      "Wraparound balcony",
      "Higher floor, less street noise",
      "Doorman building",
      "Assigned parking",
    ],
  },
  {
    slug: "birchgate-lane-201",
    address: "201 Birchgate Lane",
    city: "Millbrook",
    price: 528000,
    beds: 3,
    baths: 2,
    sqft: 2050,
    type: "Single Family",
    featured: false,
    image: elim11,
    tones: ["#B0A98F", "#556B58"],
    description:
      "A 1990s build that's been steadily updated room by room over the last three years, so almost nothing here is original except the bones.",
    highlights: [
      "Fully renovated kitchen & baths",
      "New roof and siding, 2024",
      "Finished lower level",
      "Two-car garage",
    ],
  },
  {
    slug: "linden-mews-5",
    address: "5 Linden Mews",
    city: "Maple Ridge",
    price: 495000,
    beds: 3,
    baths: 2,
    sqft: 1940,
    type: "Townhouse",
    featured: false,
    image: elim12,
    tones: ["#A6AE9E", "#3D3A34"],
    description:
      "One of only six units in a small courtyard development, with a shared garden space that residents maintain together on a rotating schedule.",
    highlights: [
      "Shared courtyard garden",
      "Only 6 units in development",
      "Low HOA fee",
      "Walk to Linden Ave shops",
    ],
  },
  {
    slug: "foundry-crossing-14",
    address: "14 Foundry Crossing",
    city: "Ashford",
    price: 561000,
    beds: 4,
    baths: 3,
    sqft: 2310,
    type: "Single Family",
    featured: false,
    image: elim13,
    tones: ["#96A08A", "#1F2B24"],
    description:
      "Built on the site of the old foundry works, with a layout that takes advantage of an unusually deep lot for a mudroom and a proper home office.",
    highlights: [
      "Deep lot, extra backyard space",
      "Dedicated home office",
      "Mudroom off garage entry",
      "Built 2017",
    ],
  },
  {
    slug: "quarry-ridge-8",
    address: "8 Quarry Ridge Dr",
    city: "Millbrook",
    price: 719000,
    beds: 4,
    baths: 3.5,
    sqft: 3050,
    type: "Single Family",
    featured: false,
    image: elim14,
    tones: ["#7E8F84", "#1F2B24"],
    description:
      "Neighboring our other Quarry Ridge listing, on a slightly smaller lot but with a finished walk-out basement the other doesn't have.",
    highlights: [
      "Finished walk-out basement",
      "Three-car garage",
      "Built 2020",
      "Backs onto green space",
    ],
  },
  {
    slug: "cedarbrook-2",
    address: "2 Cedarbrook Ln",
    city: "Millbrook",
    price: 452000,
    beds: 3,
    baths: 2,
    sqft: 1870,
    type: "Single Family",
    featured: false,
    image: elim15,
    tones: ["#8D9A82", "#556B58"],
    description:
      "Across the cul-de-sac from our other Cedarbrook listing, with a nearly identical floor plan but a fully finished (not walk-out) basement.",
    highlights: [
      "Fully finished basement",
      "Backs onto town woodland",
      "Covered patio",
      "Updated windows, 2021",
    ],
  },
];

export function getListingBySlug(slug) {
  return listings.find((l) => l.slug === slug);
}

export function getFeaturedListings() {
  return listings.filter((l) => l.featured);
}
