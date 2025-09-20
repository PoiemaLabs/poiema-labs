// @ts-check

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";
import astrobook from "astrobook";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://poiemalabs.com",
  integrations: [
    mdx(),
    sitemap(),
    react(),
    process.env.NODE_ENV === "development"
      ? astrobook(
        {
         subpath: "/astrobook",
         directory: "src/stories"
        }
      )
      : null,
  ],
});
