<template>
  <div class="flex gap-5" v-if="Printed_user">
    <!-- qr code -->
    <div class="border rounded-xl bg-black print:bg-black p-1">
      <qrcode-vue
        :value="value"
        :level="level"
        :render-as="renderAs"
        background="black"
        foreground="white" />
    </div>
    <div class="flex flex-col gap-3">
      <h1>{{ Printed_user.username }}</h1>
    </div>
    <div>
      <UButton label="print" class="print:hidden" @click="onPrint" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import QrcodeVue, { type Level, type RenderAs } from "qrcode.vue";
import { useMyAttendStore } from "~/store/attend";
const colorMode = useColorMode();
console.log(colorMode);
const attendStore = useMyAttendStore();
const Printed_user = computed(() => {
  return attendStore.user;
});
const value = computed(() => {
  return Printed_user.value?.id;
});
const level = ref<Level>("H");
const renderAs = ref<RenderAs>("svg");
const onPrint = () => {
  window.print();
};
</script>

<style></style>
