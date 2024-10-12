import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {      
          "primary": "#b91c1c",
          "secondary": "#333333",
          "accent": "#707070",
          "neutral": "#171717",
          "base-100": "#f8f6f6",
          "info": "#1d4ed8",
          "success": "#15803d",
          "warning": "#b45309",
          "error": "#dc2626",
          },
        },
      ],
    },
  plugins: [
    require('daisyui'),
    require('@material-tailwind/react/utils/withMT'),
  ],
};
export default config;
