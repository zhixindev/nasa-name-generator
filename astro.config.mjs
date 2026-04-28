import { defineConfig } from "astro/config";
import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  adapter: cloudflare(),
  site: process.env.PUBLIC_SITE_URL || undefined,
  output: "static"
});
