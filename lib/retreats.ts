export type Retreat = {
  slug: string;
  number: string;
  eyebrow: string;
  title: string;
  contactPhone: string;
  location: string;
  mapUrl: string;
  mapCenter: string;
  body: string;
  price: string;
  heroImage: string;
  gallery: string[];
  accommodationsGallery: string[];
  restaurantGallery: string[];
  experience: string;
  accommodations: string;
  restaurant: string;
  gettingThere: string;
  highlights: string[];
};

export const retreats: Retreat[] = [
  {
    slug: "hoyor-zagal-lodge",
    number: "01",
    eyebrow: "Elsen Tasarkhai, Mongolia",
    title: "HOYOR ZAGAL LODGE",
    contactPhone: "99984593",
    location: "Elsen Tasarkhai",
    mapUrl:
      "https://www.openstreetmap.org/export/embed.html?bbox=103.55%2C47.15%2C104.10%2C47.55&layer=mapnik&marker=47.35%2C103.82",
    mapCenter: "47.35,103.82",
    body: "A peaceful desert escape among golden dunes, open skies and traditional Mongolian gers. Slow down, ride a camel and experience the silence of the Gobi steppe.",
    price: "300,000₮",
    heroImage: "/images/hoyorzagal/a2.JPG",
    gallery: [
      "/images/hoyorzagal/g1.JPG",
      "/images/hoyorzagal/g2.JPG",
      "/images/hoyorzagal/g3.JPG",
      "/images/hoyorzagal/g4.JPG",
      "/images/hoyorzagal/g5.JPG",
      "/images/hoyorzagal/g6.JPG",
      "/images/hoyorzagal/g7.JPG",
    ],
    accommodationsGallery: [
      "/images/hoyorzagal/a1.JPG",
      "/images/hoyorzagal/a2.JPG",
      "/images/hoyorzagal/a3.JPG",
      "/images/hoyorzagal/a5.JPG",
      "/images/hoyorzagal/a6.JPG",
      "/images/hoyorzagal/a7.JPG",
      "/images/hoyorzagal/a8.JPG",
      "/images/hoyorzagal/a9.JPG",
      "/images/hoyorzagal/a10.JPG",
    ],
    restaurantGallery: [
      "/images/hoyorzagal/r1.JPG",
      "/images/hoyorzagal/r2.JPG",
      "/images/hoyorzagal/r3.JPG",
      "/images/hoyorzagal/r4.JPG",
      "/images/hoyorzagal/r5.JPG",
      "/images/hoyorzagal/r6.JPG",
      "/images/hoyorzagal/r7.JPG",
      "/images/hoyorzagal/r8.JPG",
    ],
    experience:
      "Ride camels across golden dunes, watch the sunset in silence, and find your own rhythm in the wide-open steppe.",
    accommodations:
      "The warmth of a traditional Mongolian ger, a clean comfortable bed, and a peaceful place to experience the desert night sky.",
    restaurant:
      "Fresh, warming meals and traditional Mongolian flavors served in the extraordinary setting of the desert.",
    gettingThere:
      "Elsen Tasarkhai is around 4–5 hours southwest of Ulaanbaatar. Drivers and tour vehicles can be arranged in advance.",
    highlights: ["Golden dunes", "Camel rides", "Wide desert skies"],
  },
  {
    slug: "alungoo-ger-hotel",
    number: "02",
    eyebrow: "Gorkhi-Terelj, Mongolia",
    title: "ALUNGOO GER HOTEL",
    contactPhone: "99098720",
    location: "Gorkhi-Terelj",
    mapUrl:
      "https://www.openstreetmap.org/export/embed.html?bbox=107.20%2C47.80%2C107.60%2C48.10&layer=mapnik&marker=47.877372%2C107.430132",
    mapCenter: "47.877372,107.430132",
    body: "A warm Terelj hideaway surrounded by forested mountains and wide valleys. Wake to fresh air, starry nights and authentic nomadic hospitality.",
    price: "500,000₮",
    heroImage: "/images/alungoo/3.JPG",
    gallery: [
      "/images/alungoo/1.JPG",
      "/images/alungoo/10.JPG",
      "/images/alungoo/11.JPG",
      "/images/alungoo/12.JPG",
      "/images/alungoo/13.JPG",
      "/images/alungoo/18.JPG",
      "/images/alungoo/22.JPG",
      "/images/alungoo/23.JPG",
      "/images/alungoo/25.JPG",
      "/images/alungoo/26.JPG",
      "/images/alungoo/27.JPG",
      "/images/alungoo/2.JPG",
      "/images/alungoo/3.JPG",
    ],
    accommodationsGallery: [
      "/images/alungoo/a1.JPG",
      "/images/alungoo/a2.JPG",
      "/images/alungoo/a3.JPG",
      "/images/alungoo/a4.JPG",
      "/images/alungoo/a5.JPG",
      "/images/alungoo/a6.JPG",
      "/images/alungoo/a7.JPG",
      "/images/alungoo/a8.JPG",
    ],
    restaurantGallery: [
      "/images/alungoo/r1.JPG",
      "/images/alungoo/r2.JPG",
      "/images/alungoo/r3.JPG",
      "/images/alungoo/r4.JPG",
    ],
    experience:
      "Wake to fresh mountain air, spend the day exploring forests, rock formations, and river valleys, then settle into the quiet beside the fire.",
    accommodations:
      "Warm, clean Mongolian gers with comfortable beds, soft linens, and everything needed for a relaxed family stay.",
    restaurant:
      "Breakfast and dinner made with fresh local ingredients, traditional Mongolian flavors, and comforting hot tea.",
    gettingThere:
      "Around 1.5–2 hours east of Ulaanbaatar. We can arrange a private transfer upon request.",
    highlights: ["Granite cliffs", "Cultural evenings", "Wild open air"],
  },
  {
    slug: "guru-eco-complex",
    number: "03",
    eyebrow: "Gorkhi-Terelj, Mongolia",
    title: "GURU ECO COMPLEX",
    contactPhone: "99096714",
    location: "Gorkhi-Terelj",
    mapUrl:
      "https://www.openstreetmap.org/export/embed.html?bbox=107.20%2C47.80%2C107.60%2C48.10&layer=mapnik&marker=47.8811077%2C107.4284165",
    mapCenter: "47.8811077,107.4284165",
    body: "An intimate eco retreat in the Terelj landscape, made for travelers who want mountain views, outdoor adventures and comfortable evenings beneath the stars.",
    price: "250,000₮",
    heroImage: "/images/guru/1.JPG",
    gallery: [
      "/images/guru/g1.JPG",
      "/images/guru/g2.JPG",
      "/images/guru/g3.JPG",
      "/images/guru/g4.JPG",
      "/images/guru/g5.JPG",
      "/images/guru/g6.JPG",
      "/images/guru/g7.JPG",
      "/images/guru/g8.JPG",
      "/images/guru/g9.JPG",
      "/images/guru/g10.JPG",
      "/images/guru/g11.JPG",
      "/images/guru/g12.JPG",
    ],
    accommodationsGallery: [
      "/images/guru/a1.JPG",
      "/images/guru/a2.JPG",
      "/images/guru/a3.JPG",
      "/images/guru/a4.JPG",
      "/images/guru/a5.JPG",
      "/images/guru/a6.JPG",
      "/images/guru/a7.JPG",
      "/images/guru/a8.JPG",
    ],
    restaurantGallery: [
      "/images/guru/r1.JPG",
      "/images/guru/r2.JPG",
      "/images/guru/r3.JPG",
      "/images/guru/r4.JPG",
      "/images/guru/r5.JPG",
    ],
    experience:
      "Walk through the Terelj mountains, ride horses, and take long breaths of fresh air. Simple days become lasting memories here.",
    accommodations:
      "An eco-conscious stay immersed in nature, with comfortable spaces, mountain views through wide windows, and peaceful evenings.",
    restaurant:
      "Fresh everyday meals, traditional Mongolian dishes, and hot drinks served in a beautiful natural setting.",
    gettingThere:
      "Travel 1.5–2 hours from the capital toward Terelj. Detailed directions are shared after your booking is confirmed.",
    highlights: ["Mountain views", "Eco-minded setting", "Close to adventure"],
  },
];

export function getRetreat(slug: string) {
  return retreats.find((retreat) => retreat.slug === slug);
}
