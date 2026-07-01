import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Base ensoleillée
        cream: "#FBF5EA",
        sand: "#F3E7D2",
        paper: "#FFFDF8",
        // Bleu Sidi Bou Saïd
        sidi: {
          DEFAULT: "#2DA5C3",
          deep: "#1B7A93",
          ink: "#0E3A47",
        },
        // Accents chauds
        harissa: "#AC4066",
        terracotta: "#B46A35",
        flame: "#C85A2B",
        olive: "#417A6E",
        sun: "#F2B441",
        // Encre
        ink: "#122a30",
        "ink-soft": "#4a5b60",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
        hand: ["var(--font-hand)", "cursive"],
      },
      borderRadius: {
        xl: "1.25rem",
        "2xl": "1.75rem",
        "3xl": "2.25rem",
      },
      boxShadow: {
        soft: "0 18px 50px -26px rgba(14, 58, 71, 0.28)",
        card: "0 24px 60px -30px rgba(14, 58, 71, 0.36)",
        lift: "0 30px 80px -34px rgba(14, 58, 71, 0.42)",
      },
      maxWidth: {
        content: "1200px",
        prose: "62ch",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      keyframes: {
        marquee: {
          from: { transform: "translate3d(0,0,0)" },
          to: { transform: "translate3d(-50%,0,0)" },
        },
        floaty: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "200% 50%" },
        },
      },
      animation: {
        marquee: "marquee var(--marquee-duration, 32s) linear infinite",
        floaty: "floaty 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
