<script lang="ts" setup>
const navItemsUnderBlog = (navigation: any[]) => {
  return navigation?.filter((nav) => nav._path === "/blog")[0]?.children;
};
</script>

<template>
  <div>
    <div class="text-gray-700 dark:text-gray-200">
      <ContentNavigation v-slot="{ navigation }">
        <NuxtLink
          v-for="link of navItemsUnderBlog(navigation)"
          :key="link._path"
          :to="link._path"
          active-class="font-bold"
          class="mr-4"
        >
          {{ link.navTitle || link.title }}
        </NuxtLink>
      </ContentNavigation>
    </div>
  </div>
</template>
