// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",

  runtimeConfig: {
    public: {
      BACK_URL: process.env.BACK_URL || "https://api.neko.oustopie.xyz",
    }
  },

  devServer: {
    port: 3333,
  },

  devtools: { enabled: true },

  css: ["~/assets/css/global.css"],

  colorMode: {
    preference: "system",
    fallback: "light",
    hid: "nuxt-color-mode-script",
    globalName: "__NUXT_COLOR_MODE__",
    componentName: "ColorScheme",
    classPrefix: "",
    classSuffix: "",
    storage: "localStorage",
    storageKey: "data-theme",
  },

  modules: [
    "@nuxt/eslint",
    "@nuxt/fonts",
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxt/test-utils",
    "@nuxt/scripts",
    "@nuxt/ui",
  ],
});
