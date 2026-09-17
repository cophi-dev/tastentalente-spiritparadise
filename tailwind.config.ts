import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#1b1612",
        cream: "#f4efe6",
        paper: "#fffaf3",
        gold: "#b58a45",
        forest: "#314a3c",
        night: "#110d16",
        plum: "#3a2744",
        sage: "#8aa392",
        mist: "#efe6d8",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        lift: "0 20px 50px -24px rgba(28, 22, 18, 0.45)",
      },
    },
  },
  plugins: [],
};

export default config;
