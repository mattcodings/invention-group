import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#12376F",
          secondary: "#B7DBEB",
          accent: "#eeeeee",
          neutral: "#FFC857",
          "base-100": "#fff",
        },
        screens: {
          sm: "576px",
          // => @media (min-width: 576px) { ... }

          md: "960px",
          // => @media (min-width: 960px) { ... }

          lg: "1440px",
          // => @media (min-width: 1440px) { ... }
        },
      },
    ],
  },
};
export default config;
