export async function GET() {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
  <url>
    <loc>https://ontheflywastesolutions.com/reviews/</loc>
    <video:video>
      <video:thumbnail_loc>https://img.youtube.com/vi/gFYjibflN3U/maxresdefault.jpg</video:thumbnail_loc>
      <video:title>Encore Resort at Reunion - On The Fly Waste Solutions Testimonial</video:title>
      <video:description>Community Manager Aura Zelada and Vendor Supervisor William Barber from Encore Resort at Reunion discuss why On The Fly is the most reliable valet trash partner they've ever worked with. Serving over 700 units in Orlando, Florida.</video:description>
      <video:player_loc>https://www.youtube.com/embed/gFYjibflN3U</video:player_loc>
      <video:duration>120</video:duration>
      <video:publication_date>2024-01-01T00:00:00+00:00</video:publication_date>
      <video:family_friendly>yes</video:family_friendly>
      <video:live>no</video:live>
    </video:video>
    <video:video>
      <video:thumbnail_loc>https://img.youtube.com/vi/3tCkAWYyJuE/maxresdefault.jpg</video:thumbnail_loc>
      <video:title>The Aston at Uptown - On The Fly Waste Solutions Testimonial</video:title>
      <video:description>Property management team at The Aston at Uptown shares their experience with On The Fly Waste Solutions' reliable valet trash and waste management services in Orlando, Florida.</video:description>
      <video:player_loc>https://www.youtube.com/embed/3tCkAWYyJuE</video:player_loc>
      <video:duration>120</video:duration>
      <video:publication_date>2024-01-01T00:00:00+00:00</video:publication_date>
      <video:family_friendly>yes</video:family_friendly>
      <video:live>no</video:live>
    </video:video>
  </url>
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  });
}
