<template>
  <div>
    <PToggleButton
      v-model="darkMode"
      onIcon="pi pi-sun"
      offIcon="pi pi-moon"
      class="max-h-[2rem] max-w-[2rem]"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const darkMode = ref(true);
</script>
