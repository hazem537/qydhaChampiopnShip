import { defineStore } from "pinia";

export const useMyRefreshtokenStore = defineStore("myRefreshtokenStore", () => {
  const refresh_token = ref<string|null>();
  const pending = ref<boolean>(false);



  return { refresh_token, pending };
});
