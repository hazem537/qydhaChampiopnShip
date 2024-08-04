<template>
  <div
    dir="rtl"
    class="h-screen w-full flex flex-col p-5 bg-stone-200  dark:bg-gray-800">
    <!-- nav -->
    <!-- aside -->
    <div class="flex justify-between gap-5">
      <UToggle
      size="xl"
        v-model="isDarkMode"
        :on-label="'Dark'"
        :off-label="'Light'"
        on-icon="circum:dark"
        off-icon="entypo:light-up" />
      <!-- <select v-model="$colorMode.preference">
      <option value="light">Light</option>
      <option value="dark">Dark</option>
    </select>
       -->
    </div>
    <UContainer class="grow w-[80%] flex items-center">
      <NuxtPage class="grow" />
    </UContainer>
  </div>
</template>
<script setup>
const colorMode = useColorMode();
const isDarkMode = computed({
  get: () => colorMode.preference === "dark",
  set: (value) => (colorMode.preference = value ? "dark" : "light"),
});
</script>
