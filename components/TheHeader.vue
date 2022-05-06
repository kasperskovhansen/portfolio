<template>
  <div
    class="px-5 md:px-10 py-3 bg-white overflow-hidden flex align-center justify-between text-gray-600 tracking-wider shadow-md"
  >
    <NuxtLink to="/" class="header-title">
      <h1 class="text-xl align-middle">
        <span class="font-bold pr-1">KasperSkov</span
        ><span class="text-green-500 font-bold text-sm">.dev</span>
      </h1>
    </NuxtLink>
    <ul class="flex align-center">
      <li>
        <NuxtLink
          to="/"
          class="navbar__item px-1 sm:px-2 md:px-4"
          class-active="active"
          >Home</NuxtLink
        >
      </li>
      <li>
        <NuxtLink
          to="/projects"
          class="navbar__item px-1 sm:px-2 md:px-4"
          class-active="active"
          >Projects</NuxtLink
        >
      </li>
      <li>
        <NuxtLink
          to="/contact"
          class="navbar__item px-1 sm:px-2 md:px-4"
          class-active="active"
          >Contact</NuxtLink
        >
      </li>
      <li>
        <NuxtLink to="/about" class="navbar__item pl-1 sm:pl-2 md:pl-4"
          >About</NuxtLink
        >
      </li>
    </ul>
  </div>
</template>
<style>
.navbar__item {
  @apply uppercase align-middle font-normal transition ease-linear duration-100 tracking-wide;
  @apply hover:text-green-500;
}
a.router-link-active:not(.header-title) {
  @apply underline underline-offset-2;
  @apply text-green-500;
}
</style>
