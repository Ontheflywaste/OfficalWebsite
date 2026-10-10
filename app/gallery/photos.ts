/**
 * PHOTO GALLERY (/gallery/)
 *
 * This file is the only thing to edit when adding or removing a photo.
 *
 * HOW TO ADD A PHOTO
 *   1. Run the helper from the repo root. It resizes the photo to 2000px on
 *      the long edge, re-encodes it as JPEG, and drops it into
 *      public/Images/gallery/ with the name you give it:
 *
 *        npm run photo -- ~/Downloads/IMG_1234.jpeg 2026-10-short-description
 *
 *      (name = year-month-a-few-words, lowercase, hyphens only.)
 *      The script prints a ready-to-paste entry when it finishes.
 *
 *   2. Paste that entry at the TOP of GALLERY_PHOTOS below (newest first),
 *      write the alt text and caption, pick a category, and commit.
 *
 * RULES FOR CAPTIONS AND ALT TEXT
 *   - No client or community names, and no client logos visible in the photo,
 *     without the owner's sign-off. Default to generic framing: "a Central
 *     Florida apartment community", "a property management trade show".
 *   - No service claims in captions (no "7 days a week", no guarantees,
 *     no "100%"). Captions describe what is in the picture, nothing more.
 *   - Banner or sign text in a photo is fine on its own; it is the names,
 *     logos, and claims that need a check.
 *   - alt is required on every photo and should describe the image for
 *     someone who cannot see it. caption is what visitors read under the tile.
 */

export const GALLERY_CATEGORIES = [
  { id: 'on-the-job', label: 'On the Job' },
  { id: 'events', label: 'Events' },
  { id: 'our-team', label: 'Our Team' },
] as const;

export type GalleryCategoryId = (typeof GALLERY_CATEGORIES)[number]['id'];

export interface GalleryPhoto {
  /** Path under /public, e.g. '/Images/gallery/2026-10-trade-show-booth.jpg' */
  src: string;
  /** Required. Describes the image for screen readers and search engines. */
  alt: string;
  /** Shown under the tile and in the lightbox. */
  caption: string;
  category: GalleryCategoryId;
  /**
   * Vertical crop anchor for the 4:3 tile, as a percentage of the photo's
   * height: 0 keeps the very top, 50 is centered, 100 keeps the bottom.
   * Only matters for portrait photos (landscape photos crop at the sides).
   * Defaults to 30. Raise the number to move the subject UP in the tile;
   * lower it to move the subject down. The lightbox always shows the whole
   * photo, uncropped.
   */
  focus?: number;
}

/** Display order: first entry is the first tile. */
export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    src: '/Images/gallery/2026-10-trade-show-booth.jpg',
    alt: 'Two On The Fly Waste Solutions team members standing at the company booth, with branded banners and a prize wheel, at the Artemis Day property management trade show in Central Florida',
    caption: 'Our booth at Artemis Day, a Central Florida property management trade show',
    category: 'events',
  },
  {
    src: '/Images/gallery/2026-08-industry-dinner-group.jpg',
    alt: 'Four people in formal wear smiling together in front of patterned curtains at an evening industry event',
    caption: 'Dressed up for an industry awards dinner',
    category: 'events',
    focus: 0,
  },
  {
    src: '/Images/gallery/2026-06-pressure-washing-parking-lot.jpg',
    alt: 'Crew member pressure washing a parking space beside a gray cargo van at a residential community',
    caption: 'Pressure washing a parking area at a Central Florida community',
    category: 'on-the-job',
  },
  {
    src: '/Images/gallery/2026-05-bulk-removal-trailer-loaded.jpg',
    alt: 'Green On The Fly dump trailer loaded with a couch and other bulk items in a parking lot',
    caption: 'A full trailer after a bulk removal pickup',
    category: 'on-the-job',
    focus: 45,
  },
  {
    src: '/Images/gallery/branded-truck-and-trailer-palms.jpg',
    alt: 'White and green On The Fly branded pickup truck towing a loaded trailer, parked under palm trees',
    caption: 'Truck and trailer loaded and ready to roll',
    category: 'on-the-job',
  },
  {
    src: '/Images/gallery/trade-show-booth-balloons.jpg',
    alt: 'Four people holding branded coffee mugs in front of the On The Fly booth with silver balloon letters and star balloons at the Artemis Day trade show',
    caption: 'Mugs and smiles at our balloon-letter booth at Artemis Day',
    category: 'events',
    focus: 55,
  },
  {
    src: '/Images/gallery/2025-08-community-event-kitchen.jpg',
    alt: 'Three people smiling in a bright kitchen, the one in the middle wearing an On The Fly polo',
    caption: 'Visiting with a community team',
    category: 'events',
    focus: 45,
  },
  {
    src: '/Images/gallery/2025-03-crew-member-trailer-portrait.jpg',
    alt: 'Crew member in a neon green On The Fly shirt and cap smiling in front of a company trailer',
    caption: 'One of our crew, ready for the route',
    category: 'our-team',
    focus: 25,
  },
  {
    src: '/Images/gallery/trade-show-booth-green-vests.jpg',
    alt: 'Two team members in green vests standing at the On The Fly booth with a branded table banner at an apartment industry trade show',
    caption: 'Ready for visitors at an apartment industry trade show',
    category: 'events',
  },
  {
    src: '/Images/gallery/trade-show-booth-crown.jpg',
    alt: 'Team member wearing a crown and green vest standing with a visitor at the On The Fly booth at a trade show',
    caption: 'Having some fun with a visitor at our trade show booth',
    category: 'events',
    focus: 30,
  },
  {
    src: '/Images/gallery/crew-member-apartment-pool-deck.jpg',
    alt: 'Crew member in a high-visibility vest standing on the pool deck of an apartment community',
    caption: 'On the route at a Central Florida apartment community',
    category: 'on-the-job',
    focus: 25,
  },
  {
    src: '/Images/gallery/valet-trash-truck-and-trailer.jpg',
    alt: 'On The Fly branded pickup truck with an enclosed trailer parked outside a row of storage units',
    caption: 'One of our valet trash trucks and trailers',
    category: 'on-the-job',
  },
  {
    src: '/Images/gallery/crew-pink-vests-breast-cancer-awareness.jpg',
    alt: 'Three crew members in pink safety vests and hard hats standing on a sidewalk at a residential community',
    caption: 'Our crew in pink for Breast Cancer Awareness Month',
    category: 'our-team',
    focus: 30,
  },
  {
    src: '/Images/gallery/next-generation-helpers.jpg',
    alt: 'Two young girls in bright green tutus and pink shirts pushing a trash bin across a lawn',
    caption: 'The next generation of the On The Fly family, helping out at home',
    category: 'our-team',
    focus: 0,
  },
];
