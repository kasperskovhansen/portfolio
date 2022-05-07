module.exports = {
  mode: "jit",
  purge: [
    "./assets/**/*.{css}",
    "./components/*.{vue,js}",
    "./components/**/*.{vue,js}",
    "./pages/*.vue",
    "./layouts/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./*.{vue,js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ["Poppins"],
      },
      colors: {
        themeBackground: "var(--background)",
        themeText: "var(--text)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
