import { defineStore } from "pinia";
import type { User } from "~/models/Uesr";

import { useMySidebarStore } from "./sidebar";

export const useMyAuthStore = defineStore("MyAuthStore", () => {
  const sidebaeStore =useMySidebarStore()

  const user = ref<User | null>();
  const is_auth = computed(() => {
    if (user.value?.adminUser.id) {
      return true;
    } else {
      return false;
    }
  });

  const login = (new_user: User) => {
    user.value = new_user;

  };
  const logout = () => {

    user.value = null;
    sidebaeStore.close()
    // refreshTokenStrore.refresh_token = null
  };

  
  return { user,is_auth, login, logout };
},{
  persist: true
}
);
