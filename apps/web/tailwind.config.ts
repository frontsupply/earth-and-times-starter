import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "../../packages/ui/src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        void: "#0B0F12",
        abyss: "#10242B",
        dusk: "#274C57",
        haze: "#6C8D8D",
        ash: "#B7B2A3",
        bone: "#E8E0CF",
        ember: "#E88E68",
        apricot: "#F1B085",
        "rose-dust": "#CC7D72",
        moonwash: "#C8D1D4",
      },
      fontFamily: {
        display: ["Cormorant Garamond", "serif"],
        mono: ["IBM Plex Mono", "monospace"],
      },
      boxShadow: {
        sun: "0 0 120px rgba(232,142,104,0.25), 0 0 240px rgba(232,142,104,0.12)",
      },
      backgroundImage: {
        atmosphere: "radial-gradient(circle at 50% 30%, rgba(241,176,133,0.18), transparent 50%), radial-gradient(circle at 50% 70%, rgba(108,141,141,0.25), transparent 60%), linear-gradient(to bottom, #0B0F12, #10242B)",
      },
    },
  },
  plugins: [],
} satisfies Config;
