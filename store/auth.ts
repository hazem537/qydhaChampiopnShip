import { defineStore } from "pinia";
import type { User } from "~/models/Uesr";
import { useMyRefreshtokenStore } from "./refreshtoken";

export const useMyAuthStore = defineStore("MyAuthStore", () => {
  const refreshTokenStrore=useMyRefreshtokenStore()
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
    refreshTokenStrore.refresh_token = user.value.refreshToken    
  };
  const logout = () => {

    user.value = null;
    refreshTokenStrore.refresh_token = null
  };

  
  return { user,is_auth, login, logout };
},{
  persist: true
}
);
