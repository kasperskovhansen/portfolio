<template>
  <div>
    <Html>
      <title>Welcome to kasperskov.dev</title>
    </Html>
    <!-- <TheNavbar /> -->
    <header>
      <TheHeader class="z-10 bg-gray-100" />
    </header>
    <div
      class="z-0 w-screen md:max-w-screen-sm lg:max-w-screen-lg mx-auto min-h-screen"
    >
      <div class="mx-5 pt-24 py-5 px-4">
        <slot />
      </div>
    </div>
  </div>
</template>
<style>
html {
  @apply bg-zinc-50 box-border p-0 m-0;
  font-family: "primeicons" !important;
}
body {
  font-family: "Avenir", "Arial", "Helvetica", sans-serif;
  font-display: swap;
}

.main-area a {
  @apply text-blue-500 duration-100 transition-all;
  @apply hover:text-blue-800;
}

.theme-light {
  --background: #f8f8f8;
  --text: #313131;
}

.theme-dark {
  --background: #313131;
  --text: #f8f8f8;
}
</style>
