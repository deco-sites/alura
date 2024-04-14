import daisyui from "daisyui";

export default {
  plugins: [daisyui],
  daisyui: { themes: [], logs: false },
  content: ["./**/*.tsx"],
  theme: {
    container: { center: true },
    extend: {
      animation: {
        sliding: "sliding 30s linear infinite",
      },
      screens: {
        ml2: "800px",
      },
      fontFamily: {
        primary: ["Inter", "sans-serif"],
        secondary: ["Open Sans", "sans-serif"],
        terciary: ["Chakra Petch", "sans-serif"],
        quartenary: ["Roboto Mono", "sans-serif"],
      },
      keyframes: {
        sliding: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
};
