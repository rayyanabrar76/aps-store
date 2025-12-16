import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: { "2xl": "1400px" },
    },
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Space Grotesk", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      colors: {
        // --- APS DIVINE COLOR ARCHITECTURE ---
        aps: {
          navy: "#3D3D6B",
          red: "#DC2626",
          dark: "#050505",
          black: "#020202",
          glass: "rgba(255, 255, 255, 0.03)",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: { DEFAULT: "hsl(var(--primary))", foreground: "hsl(var(--primary-foreground))" },
        secondary: { DEFAULT: "hsl(var(--secondary))", foreground: "hsl(var(--secondary-foreground))" },
      },
      borderRadius: {
        "4xl": "3rem",
        "5xl": "4.5rem", // For ultra-soft luxury containers
      },
      // ADDED: Custom transition durations
      transitionDuration: {
        '1500': '1500ms',
      },
      // --- LUXURY MOTION PHYSICS ---
      transitionTimingFunction: {
        "expo": "cubic-bezier(0.19, 1, 0.22, 1)", // The "Goddess" curve
        "reveal": "cubic-bezier(0.77, 0, 0.175, 1)",
        "spring": "cubic-bezier(0.16, 1, 0.3, 1)", // ADDED for cubic-bezier warning
      },
      boxShadow: {
        extreme: "0 0 60px -15px rgba(220, 38, 38, 0.3)", 
        "navy-glow": "0 0 40px -10px rgba(61, 61, 107, 0.5)",
        "premium-white": "0 0 50px -10px rgba(255, 255, 255, 0.05)",
      },
      keyframes: {
        shimmer: { 
          "0%": { transform: "translateX(-100%)" }, 
          "100%": { transform: "translateX(100%)" } 
        },
        scan: { 
          "0%": { transform: "translateY(-100%)" }, 
          "100%": { transform: "translateY(400%)" } 
        },
        "optical-spin": {
          "0%": { transform: "rotate(0deg) scale(1)" },
          "50%": { transform: "rotate(180deg) scale(1.1)" },
          "100%": { transform: "rotate(360deg) scale(1)" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        }
      },
      animation: {
        shimmer: "shimmer 2.5s infinite linear",
        scan: "scan 3s linear infinite",
        "optical-spin": "optical-spin 10s linear infinite",
        "fade-in-up": "fade-in-up 0.8s cubic-bezier(0.19, 1, 0.22, 1) forwards",
      },
      backgroundImage: {
        "grid-white": "radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px)",
        "vignette": "radial-gradient(circle, transparent 20%, black 100%)",
      },
    },
  },
  plugins: [tailwindcssAnimate],
};

export default config;