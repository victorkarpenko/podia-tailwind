import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        mainBrand: "var(--color-mainBrand)",
        secondaryBrand: "var(--color-secondaryBrand)",
        fury: "var(--color-fury)",
      },
    },
    container: {
      center: true,
      padding: '1rem',
      screens: {
        '2xl': '1240px',
      },
    },
  },
  plugins: [],
} satisfies Config;
