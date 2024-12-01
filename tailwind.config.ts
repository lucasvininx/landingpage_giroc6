import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    backgroundImage: {
      'img_bg_hero': "url('../assets/bg-hero.jpg')",
    },
    extend: { 
     colors:{
      'primary-yellow': '#eab308',
      'txt-white': '#e2e8f0',
      'primary-gray': '#33303E',
      'second-gray': '4E4B59',
      'opacity-gray': 'rgba(100, 80, 57, 0.1',
      'bg-black': '#09090b'
     },
    },
  },
  plugins: [],
} satisfies Config;
