<template>
  <div
    dir="rtl"
    class="h-screen w-full flex flex-col p-5 gap-5  bg-stone-200 dark:bg-gray-800">
    <!-- nav -->
    <!-- aside -->
    <div class="flex justify-between gap-5 print:hidden ">
      <UButton
      v-if="authStore.is_auth"
        :icon="
          sideStore.status
            ? 'material-symbols:close'
            : 'fluent:row-triple-20-filled'
        "
        @click="sideStore.toogle()"
        class="duratin-300" />
        <div v-else></div>
      <div class="flex gap-3">
        <UToggle
          size="xl"
          v-model="isDarkMode"
          :on-label="'Dark'"
          :off-label="'Light'"
          on-icon="circum:dark"
          off-icon="entypo:light-up" />
        <UButton v-if="authStore.is_auth" label="logout" @click="onLogout()" />
      </div>
    </div>
    <div class="w-full h-full flex gap-5 ">
      <Sidebar class= "print:hidden" />

      <div class=" w-[80vw] flex grow print:w-full">
        <NuxtPage class="grow" />
      </div>
    </div>
    <UNotifications />
    <UModals />
  </div>
</template>
<script setup>
import { useMyAuthStore } from "./store/auth";
import { useMySidebarStore } from "./store/sidebar";
const sideStore = useMySidebarStore();

const authapi = useAuth();
const authStore = useMyAuthStore();
const onLogout = () => {
  authapi.logout();
};
const colorMode = useColorMode();
const isDarkMode = computed({
  get: () => colorMode.preference === "dark",
  set: (value) => (colorMode.preference = value ? "dark" : "light"),
});
</script>
