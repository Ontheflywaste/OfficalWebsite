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
}

/** Newest first. */
export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    src: '/Images/gallery/2026-10-trade-show-booth.jpg',
    alt: 'Two On The Fly Waste Solutions team members standing at the company booth, with branded banners and a prize wheel, at a Central Florida property management trade show',
    caption: 'Our booth at a Central Florida property management trade show',
    category: 'events',
  },
];
