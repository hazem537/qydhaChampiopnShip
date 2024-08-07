<template>
  <UVerticalNavigation v-if="sidebarStore.status" :links="links" :ui="{ active: 'bg-primary-500/50' }" />
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
  {
    label: "الحضور",
    icon: "medical-icon:i-registration",
    to: "/attend",
  },
];
</script>

<style></style>
