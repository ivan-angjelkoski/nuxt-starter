// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "@vueuse/nuxt", "@pinia/nuxt"],
  pinia: {
    autoImports: [
      "defineStore", // import { defineStore } from 'pinia'
    ],
  },
  imports: {
    dirs: ["store"],
  },
});
