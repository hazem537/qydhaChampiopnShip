import type { User, UserI } from "~/models/Uesr";

export const useUser = () => {
  const { $api } = useNuxtApp();
  const searchUser = async () => {
    const token = ref<string>();
    const { data, pending, error, refresh, execute, status } =
      await useAsyncData<{
        data: {
          users: {
            currentPage: number;
            totalPages: number;
            pageSize: number;
            items: UserI[];
          };
          message: string;
        };
      }>(
        "searchUser",
        () => $api("users", { params: { SearchToken: token.value } }),
        { immediate: false }
      );
    const fetchREQ = async (_token: string) => {
      token.value = _token;
      await execute();
    };
    return { data, pending, error, refresh, fetchREQ, status };
  };

  const userAttend = async (champion_id: string) => {
    const user_id = ref<string>();
    const { data, pending, error, refresh, execute, status } =
      await useAsyncData(
        "userAttend",
        () =>
          $api(`champion/${champion_id}/attend`, {
            method: "POST",
            body: { userId: user_id.value },
          }),
        { immediate: false }
      );
    const fetchREQ = async (_user_id: string) => {
      user_id.value = _user_id;
      await execute();
    };
    return { data, pending, error, refresh, fetchREQ, status };
  };

  return { searchUser, userAttend };
};
