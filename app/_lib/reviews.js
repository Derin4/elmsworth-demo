// Fictitious client reviews for the Elmsworth Properties demo.
// rating is out of 5.

export const reviews = [
  {
    quote:
      "Elena found us a house we hadn't even considered, and it turned out to be exactly right.",
    name: "M. & J. Kowalski",
    detail: "Bought in Maple Ridge",
    rating: 5,
  },
  {
    quote:
      "She told us honestly when an offer was too high before we made it. That kind of advice is rare.",
    name: "Priya R.",
    detail: "Bought in Ashford",
    rating: 5,
  },
  {
    quote:
      "Our place sold in nine days. Elena had a staging plan ready before the first photo was even taken.",
    name: "Tom D.",
    detail: "Sold in Millbrook",
    rating: 5,
  },
  {
    quote:
      "First-time buyers with a hundred questions. She answered every one, never rushed us, and never once made us feel foolish.",
    name: "Hannah & Luis B.",
    detail: "Bought in Ashford",
    rating: 5,
  },
  {
    quote:
      "She talked us out of a house we loved and into one we love more. The inspection proved her right.",
    name: "Greg A.",
    detail: "Bought in Maple Ridge",
    rating: 5,
  },
  {
    quote:
      "Pricing was spot on. Two offers in the first weekend, and we accepted one over asking.",
    name: "Dana K.",
    detail: "Sold in Maple Ridge",
    rating: 5,
  },
  {
    quote:
      "Downsizing after thirty years was emotional. Elena handled it with real patience and a lot of humour.",
    name: "Margaret & Ron T.",
    detail: "Sold in Millbrook",
    rating: 5,
  },
  {
    quote:
      "Great communication from start to finish. A couple of showings were tight on timing, but she always found a way.",
    name: "Samir H.",
    detail: "Bought in Ashford",
    rating: 4,
  },
  {
    quote:
      "She knows these three neighbourhoods street by street. She told us which school bus routes were actually reliable.",
    name: "Alicia F.",
    detail: "Bought in Millbrook",
    rating: 5,
  },
  {
    quote:
      "We were relocating from out of province and bought largely through video tours. Elena made it feel easy.",
    name: "The Okafor family",
    detail: "Bought in Maple Ridge",
    rating: 5,
  },
  {
    quote:
      "Honest about what to fix before listing and what to leave alone. Saved us thousands in unnecessary renovations.",
    name: "Beth & Carl M.",
    detail: "Sold in Ashford",
    rating: 5,
  },
  {
    quote:
      "Closed two weeks early with no drama. Every document was explained in plain language before we signed.",
    name: "Jordan P.",
    detail: "Bought in Millbrook",
    rating: 5,
  },
];

export const averageRating =
  Math.round(
    (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length) * 10,
  ) / 10;
