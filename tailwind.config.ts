import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: {
        900: "hsl(var(--clr-primary-900))",
        700: "hsl(var(--clr-primary-700))",
        600: "hsl(var(--clr-primary-600))",
        500: "hsl(var(--clr-primary-500))",
        400: "hsl(var(--clr-primary-400))",
      },
      white: "hsl(var(--clr-white))",
      black: "hsl(var(--clr-black))",
    },
    fontSize: {
      base: "var(--base-font-size)",
      sm: "var(--fs-small)",
      md: "var(--fs-medium)",
      lg: "var(--fs-large)",
      xl: "var(--fs-xl)",
      xxl: "var(--fs-xxl)",
    },
    fontWeight: {
      bold: "var(--fw-bold)",
      normal: "var(--fw-regular)",
      medium: "var(--fw-medium)",
    },
  },
  extend: {
    spacing: {
      container: "var(--max-width)",
      containerPadding: "var(--container-padding)",
    },
  },
  plugins: [],
};
export default config;
