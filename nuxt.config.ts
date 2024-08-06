// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      apiBase: "https://sam-baloot-admin.online/dev/",
    },
  },
  modules: [
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
    "@nuxt/ui",
    "@nuxt/icon",
    "@nuxtjs/color-mode",
    "@hypernym/nuxt-anime",
    "@samk-dev/nuxt-vcalendar"
  ],
  // piniaPersistedstate: {
  //   storage: "localStorage",
  // },
  ssr: false,
  css: ["~/assets/css/base.css"],
 

  piniaPersistedstate: {
    storage: "localStorage",
  },
  anime: {
    provide: true,
  },
});