/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    linearGradientColors: theme => ({
      'blue-pink': ['to right', '#3498db', '#e74c3c'], // Example gradient from blue to pink
    }),
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      
    },
    colors:{
      'whites':'#ffffff',
      'pink':'#FF75D8',
      'blue':'#3D66FB',
      'grey':'#636363',
      'pricing':'#323232',
      'list':'#F5F5F5',
      'grey-box':'#f4f4f4',
      'grad-btn':'linear-gradient(62.05deg, #2600FC 0%, #FF00EA 100%)'
    }
  },
  plugins: [],
};
