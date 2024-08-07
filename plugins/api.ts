import { useMyAuthStore } from "~/store/auth";


export default defineNuxtPlugin(() => {
  // get user data if it exist or not
  const authStore = useMyAuthStore();
  const config = useRuntimeConfig();
  const $api = $fetch.create({
    baseURL: config.public.apiBase as string,
    onRequest({ options }) {
      const token = authStore.user?.jwtToken;
      if (token) {
        options.headers = {
          ...options.headers,
          Authorization: `Bearer ${token}`,
        };
      }
    },
    onResponseError: async ({ request, response, options }) => {
      if (response.status == 401) {
  
        try {
          // Attempt to refresh the token
          await refreshAccessToken();
          // Retry the original request with the new token

          

          const method = options.method?.toUpperCase() as
            | "OPTIONS"
            | "GET"
            | "HEAD"
            | "PATCH"
            | "POST"
            | "PUT"
            | "DELETE"
            | "CONNECT"
            | "TRACE"
            | undefined;
             options = {
              ...options,
              headers: {
                ...options.headers,
                Authorization: `Bearer ${authStore.user?.jwtToken}`,
              },
            };
          
            await refreshNuxtData()
          // await  $api(request); // Retry t he original request
        } catch (error) {
          console.log(error);
          // Redirect to the login page if the token refresh fails
          authStore.logout();
          navigateTo("/");
        }
      }
    },
  });

  async function refreshAccessToken() {
    const jwtToken = authStore.user?.jwtToken;
    const refreshToken = authStore.user?.refreshToken;


    // Check if both tokens are available
    if (!jwtToken || !refreshToken) {
      throw new Error("JWT token or refresh token is missing");
    }

    try {
      const response = await $fetch<{
        data: {
          jwtToken: string;
          refreshToken: string;
          refreshTokenExpirationDate: string;
        };
        message: string;
      }>("auth/refresh-token", {
        method: "POST",
        baseURL: config.public.apiBase,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${jwtToken}`, // Include the current JWT token
        },
        body: JSON.stringify({
          refreshToken: refreshToken,
          jwtToken: jwtToken,
        }), // Include the refresh token in the request body
      });
      console.log(response);
      if (response && response.data.jwtToken) {
        // Update the auth store with the new token
        authStore.user!.jwtToken = response.data.jwtToken;
        authStore.user!.refreshToken = response.data.refreshToken;
      } else {
        throw new Error("Failed to refresh token");
      }
    } catch (error) {
      console.error("Error refreshing token:", error);
      throw new Error("Failed to refresh token");
    }
  }

  return {
    provide: {
      api: $api,
    },
  };
});
