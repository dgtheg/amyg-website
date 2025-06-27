// src/app/sitemap.xml/route.js

export async function GET() {
  const baseUrl = 'https://amyg-website.vercel.app';

  const staticRoutes = ['/', '/about/', '/projects/', '/contact/'];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${staticRoutes
    .map(
      (route) => `
    <url>
      <loc>${baseUrl}${route}</loc>
    </url>`
    )
    .join('')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}