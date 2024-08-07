import type { User } from "~/models/Uesr";
import { useMyAuthStore } from "~/store/auth";

export const useAuth = () => {
  const { $api } = useNuxtApp();

  const Login = async () => {
    const authStore = useMyAuthStore();
    const body = reactive<{ username: string; password: string }>({
      username: "",
      password: "",
    });
    const { data, pending, error, refresh, execute, status } =
      await useAsyncData<{ data: User; message: string }>(
        "login",
        () => $api("admin/login", { body: body, method: "post" }),
        { immediate: false }
      );
    const fetchREQ = async (_username: string, _password: string) => {
      body.username = _username;
      body.password = _password;
      await execute();
      if ((status.value = "success")) {
        authStore.login(data.value?.data!);
      }
    };
    return { data, pending, error, refresh, fetchREQ, status };
  };
  const logout = () => {
    const authStore = useMyAuthStore();
    authStore.logout();
    return navigateTo("/")
  };

  
  return { Login, logout };
};
