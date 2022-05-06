<template>
  <div>
    <Html>
      <title>Welcome to kasperskov.dev</title>
    </Html>

    <div class="bg-gray-100">
      <header class="relative">
        <TheHeader />
      </header>
      <div
        class="main-area w-screen md:max-w-screen-sm lg:max-w-screen-lg mx-auto min-h-screen"
      >
        <div class="bg-white mx-5 mt-5 py-5 px-4">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>
<style></style>
