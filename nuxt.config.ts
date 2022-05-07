import { defineNuxtConfig } from "nuxt3";

export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss"],
  compilerOptions: {
    isCustomElement: true,
  },
  // your Tailwind css directory
  css: [
    "@/assets/css/tailwind.css",
    "primevue/resources/themes/saga-blue/theme.css",
    "primevue/resources/primevue.css",
    "primeicons/primeicons.css",
  ],
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
});
