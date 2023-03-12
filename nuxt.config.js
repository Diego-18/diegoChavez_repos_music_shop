const backendUrl =
  process.env.BACKEND_URL || "https://music-shop-q6a2.onrender.com";

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    ssr: false,
    target: "static",
    title: "Music-Shop",
    env: {
      backendUrl:
        process.env.BACKEND_URL || "https://music-shop-q6a2.onrender.com",
    },
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: "~/plugins/VueDebounce.js" }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    "@nuxtjs/axios",
    [
      "vue-currency-filter/nuxt",
      {
        symbol: "$",
        thousandsSeparator: ",",
        fractionCount: 2,
        fractionSeparator: ".",
        symbolPosition: "front",
        symbolSpacing: true,
        avoidEmptyDecimals: undefined,
      },
    ],
  ],

  axios: {
    baseURL: backendUrl,
    credentials: true,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
