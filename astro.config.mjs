// @ts-check
import { defineConfig } from "astro/config";

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://animated-manatee-85c44e.netlify.app/",
  integrations: [preact()],
});