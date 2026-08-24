import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

const staticPages = [
  '',
  'o-level',
  'ccc',
  'mock-test',
  'resources',
  'about',
  'contact',
  'app',
];

export const GET: APIRoute = async (context) => {
  const site = context.site?.toString().replace(/\/$/, '') || 'https://skilldotpy.com';
  const notes = await getCollection('notes');

  const urls = [
    ...staticPages.map((page) => ({
      loc: page ? `${site}/${page}/` : `${site}/`,
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: page === '' ? 'daily' : 'weekly',
      priority: page === '' ? '1.0' : '0.8',
    })),
    ...notes.map((note) => ({
      loc: `${site}/notes/${note.slug}/`,
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: 'weekly',
      priority: '0.9',
    })),
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${u.lastmod}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(xml, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
};