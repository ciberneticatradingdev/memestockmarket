import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import solidJs from "@astrojs/solid-js";
import vercel from "@astrojs/vercel/serverless";

export default defineConfig({
  site: "https://www.memestockmarket.fun/",
  integrations: [tailwind(), sitemap(), solidJs()],
  output: "server", // o "server", según el caso
  adapter: vercel(),
  ssr: true,
});
