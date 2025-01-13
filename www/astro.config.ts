import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel/serverless";
import { type RehypePlugins } from "astro";
import { defineConfig } from "astro/config";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeExternalLinks from "rehype-external-links";
import rehypeSlug from "rehype-slug";
import remarkCodeTitle from "remark-code-title";

/** @link https://astro.build/config */
export default defineConfig({
  site: `https://create.t3.gg/`,
  output: "server",
  adapter: vercel(),
  markdown: {
    remarkPlugins: [remarkCodeTitle],
    rehypePlugins: [
      [
        rehypeExternalLinks,
        {
          target: "_blank",
          rel: ["noreferrer noopener"],
          content: {
            type: "text",
            value: "↗",
          },
        },
      ],
      rehypeSlug,
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            class: "heading-link heading-link--hidden---effects",
            "data-heading-link": true,
          },
          behavior: "wrap",
        },
      ],
    ] as RehypePlugins,
    shikiConfig: {
      theme: "rose-pine",
      wrap: true,
    },
  },
  integrations: [react(), sitemap(), mdx()],
  vite: {
    optimizeDeps: {
      exclude: ["@resvg/resvg-js"],
    },
  },
});
