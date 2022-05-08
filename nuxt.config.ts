import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: [
    "@/assets/css/tailwind.css",
    "primevue/resources/themes/saga-blue/theme.css",
    "primevue/resources/primevue.css",
    "@/assets/primeicons/primeicons.css",
  ],
  build: {
    postcss: {
      postcssOptions: require("./postcss.config.js"),
    },
  },
});
