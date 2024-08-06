<template>
  <UVerticalNavigation v-if="sidebarStore.status" :links="links" :ui="{ active: 'bg-red-500/50' }" />
</template>

<script lang="ts" setup>
import { useMySidebarStore } from '~/store/sidebar';

const sidebarStore =useMySidebarStore()
const links = [
  
  {
    label: "البطولات",
    icon: "hugeicons:champion",
    to: "/championship",
  },
];
</script>

<style></style>
