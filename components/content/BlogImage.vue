<script setup lang="ts">
defineProps(["href"]);
</script>

<template>
  <div class="float-none md:float-right my-5 md:mt-0 ml-0 md:ml-5">
    <h3 v-if="$slots.title" class="mb-1">
      <Markdown :use="$slots.title" unwrap="p" />
    </h3>
    <img :src="href" alt="" class="max-w-full md:max-w-sm" />
    <p v-if="$slots.default" class="mt-2 text-sm">
      <Markdown :use="$slots.default" unwrap="p" />
    </p>
  </div>
</template>
