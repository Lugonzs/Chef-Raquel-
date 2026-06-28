import type { Config } from "tailwindcss";

// Reutiliza el preset del design-system (única fuente de verdad de tokens).
// eslint-disable-next-line @typescript-eslint/no-var-requires
const preset = require("./design-system/tailwind.preset.js");

const config: Config = {
  presets: [preset],
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        body: ["var(--font-nunito)", "system-ui", "sans-serif"],
        accent: ["var(--font-caveat)", "cursive"],
        ko: ["var(--font-blackhansans)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
