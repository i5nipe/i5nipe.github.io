import type { APIContext, ImageMetadata, InferGetStaticPropsType } from "astro";
import satori, { type SatoriOptions } from "satori";
import { html } from "satori-html";
import { getCollection } from 'astro:content';
import { Resvg } from "@resvg/resvg-js";
import { siteConfig } from '@/config';

import Adelle from "@assets/adelle-mono-bold.ttf"

const ogOptions: SatoriOptions = {
	width: 1200,
	height: 630,
	// debug: true,
	fonts: [
    {
      name: "Adelle",
      data: Buffer.from(Adelle),
      weight: 700,
      style: "normal",
    },
	],
};

const markup = (title: string, published: Date, description?: string, category?: string, tags?: string[]) =>
	html`
  <div style="background-image: url(${"https://blog.i5nipe.com/" + siteConfig.banner.src}); height: 100vh; display: flex; flex-direction: column; justify-content: space-between; color: #FCF7FF; padding: 20px;">
  <div style="display: flex; flex-direction: column;">
    <p style="color: #E3C3FA; font-size: 3.0em; font-weight: bold; margin: 0;">${title}</p>
  </div>
  <div style="display: flex; align-items: center; justify-content: center; flex: 1;">
    <p style="font-size: 3.5em; font-weight: bold; text-align: center; margin: 0;">${description}</p>
  </div>
  </div>
  `;

type Props = InferGetStaticPropsType<typeof getStaticPaths>;

/**
 * Route for dynamic Open Graph images.
 * This function will generate Open Graph images only if enabled in `config.ts`. 
 *
 * @returns {Promise<object>} An object containing the GET, getStaticPaths methods for astro.
 */
async function getOpenGraphData() {
  if (siteConfig.postOGImageDynamic) {
    return {
      GET: async function GET(context: APIContext) {
        const {title, description, published, category, tags } = context.props as Props;
        const svg = await satori(markup(title, published, description, category, tags), ogOptions);
        const png = new Resvg(svg).render().asPng();

        return new Response(png, {
          headers: {
            "Content-Type": "image/png",
            "Cache-Control": "public, max-age=600, immutable",
          },
        });
      },
      getStaticPaths: async function getStaticPaths() {
        const posts = await getCollection("posts");
        const result = posts.filter(({ data }) => !data.draft)
          .map((post) => ({
            params: { slug: post.slug },
            props: {
              title: post.data.title,
              description: post.data.description,
              published: post.data.published,
              category: post.data.category,
              tags: post.data.tags,
            },
          }));
        return result
      }
    }
  } else {
    return { getStaticPaths: {}, GET: {} } ;
  }
}

export const { getStaticPaths, GET } = await getOpenGraphData();
