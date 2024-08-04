// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      apiBase: "https://sam-baloot-admin.online/",
    },
  },

  modules: [
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
    "@nuxt/ui",
    "@nuxt/icon",
    "@nuxtjs/color-mode",
    "@hypernym/nuxt-anime",
  ],
  // piniaPersistedstate: {
  //   storage: "localStorage",
  // },
  ssr: false,
  css: ["~/assets/css/base.css"],

  anime: {
    provide: true,
  },
});
