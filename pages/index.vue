<template>
  <div class="flex gap-5 justify-center items-center h-1/2 p-5">
    <div class="grow flex flex-col gap-10 items-center">
      <div class="flex gap-5">
        <h1
          class="text-9xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent qydha opacity-0 p-2 " style="transform: translateX(100px);">
          قيدها
        </h1>
        <div>
          <h1
            class="text-2xl bg-red-500 p-1 rounded-xl text-white dark:text-black opacity-0 champbadge">
            للبطولات
          </h1>
        </div>
      </div>
      <p class="text-2xl">لادارة البطولات بشكل حترافي</p>
    </div>
    <AuthLogin class="grow" />
    <!-- data about app lssogo and slogan -->
    <!-- divider -->
    <!-- login foem -->
  </div>
</template>

<script lang="ts" setup>
const { $anime } = useNuxtApp();
onMounted(() => {
  $anime({
    targets: ".qydha",
    opacity: 1,
    translateX: 0,
    easing: "easeInOutQuad",
    duration: 800,
  });
  $anime({
    targets: ".champbadge",
    opacity: 1,
    easing: "easeInOutQuad",
    duration: 1800,
  });
  
});
</script>

<style></style>
