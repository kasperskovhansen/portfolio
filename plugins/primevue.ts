import { defineNuxtPlugin } from "#app";
import PrimeVue from "primevue/config";
import PButton from "primevue/button";
import PToggleButton from "primevue/togglebutton";
// Add every Primevue component: https://codesandbox.io/s/chgonl

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(PrimeVue, { ripple: true });
  nuxtApp.vueApp.component("PButton", PButton);
  nuxtApp.vueApp.component("PToggleButton", PToggleButton);
  //other components that you need
});
