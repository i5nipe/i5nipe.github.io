<<<<<<< HEAD
import type { APIRoute } from 'astro'
=======
import type { APIRoute } from "astro";
>>>>>>> upstream/main

const robotsTxt = `
User-agent: *
Disallow: /_astro/

<<<<<<< HEAD
Sitemap: ${new URL('sitemap-index.xml', import.meta.env.SITE).href}
`.trim()

export const GET: APIRoute = () => {
  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  })
}
=======
Sitemap: ${new URL("sitemap-index.xml", import.meta.env.SITE).href}
`.trim();

export const GET: APIRoute = () => {
	return new Response(robotsTxt, {
		headers: {
			"Content-Type": "text/plain; charset=utf-8",
		},
	});
};
>>>>>>> upstream/main
