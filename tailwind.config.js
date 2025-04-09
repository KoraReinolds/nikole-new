/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app/**/*.{js,ts,vue}",
  ],
  theme: {
    extend: {
      colors: {
        // Main color group
        "main": "#A57664",
        "main-white": "#DB9E86",
        "main-white2": "#FFB69A",
        "main-dark": "#402E28",
        "main-gray": "#836C64",
        "main-sat": "#D38465",

        // Additional color group
        "additional": "#45725E",
        "additional-white": "#66A489",
        "additional-white2": "#7FCDAA",
        "additional-black": "#223B2E",
        "additional-gray": "#455A51",
        "additional-sat": "#4DA980",

        // Supplementary color group 1
        "sup1": "#739359",
        "sup1-white": "#6A9447",
        "sup1-white2": "#93BA73",
        "sup1-black": "#394C2C",
        "sup1-gray": "#657459",
        "sup1-sat": "#6A9447",

        // Supplementary color group 2
        "sup2": "#739359",
        "sup2-white": "#93BA73",
        "sup2-white2": "#93BA73",
        "sup2-black": "#394C2C",
        "sup2-gray": "#657459",
        "sup2-sat": "#6A9447",

        // Accent color group (Add2)
        "add2": "#94596B",
        "add2-white": "#C0758C",
        "add2-white2": "#E088A3",
        "add2-black": "#492D35",
        "add2-gray": "#755962",
        "add2-sat": "#94475E",
      },
    },
  },
  plugins: [],
};
