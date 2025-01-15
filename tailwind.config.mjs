/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'faint-triangles': "url('/faint-triangles-bg.png')",
        'mob-faint-triangles': "url('/mobile-faint-triangles-bg.png')",
        'main-triangles': "url('/main-triangles.png')",
      },
      colors: {
        white: "#ffffff",
        black: "#000000",
        lightGrey: "#D7DFE2",
        sage: "#A2B7AE",
        moss: "#5E6C5C",
        cream: "#F3EFE7",
        darkGrey: "#182A2B",
        grey: "#686866",
        tan: "#D2BB99",
      },
    },
  },
  plugins: [],
};
