<script setup>
import TheThemeToggle from "../components/TheThemeToggle.vue";
import PButton from "../node_modules/primevue/button";
// const { title } = await this.$content("first-blog-post")
//   .only(["title"])
//   .fetch();
</script>

<template>
  <div>
    <p>Welcome to KasperSkov.dev</p>
    <p>It is very important that a Nuxt 3 page only has one root element</p>
    <br />
    <PButton>Hey, I'm a PrimeVue button!</PButton>
    <br />
    <br />

    <p>Currently working on a theme toggle like this:</p>
    <TheThemeToggle />
  </div>
</template>
