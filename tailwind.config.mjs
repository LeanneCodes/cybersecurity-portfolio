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
        'blurred-triangles': "url('/blurred-triangles.png')",
        'blurred-mantel': "url('/blurred-mantel-bg.png')",
        'blurred-mantel-project': "url('/blurred-mantel-project-bg.png')",
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
        mediumGrey: "#D9D9D9",
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      fontWeight: {
        extraLight: '100',
        light: '200',
        regular: '400',
        medium: '500',
        bold: '700',
        extraBold: '900',
      },
      screens: {
        'xxs': '320px',
        'xs': '480px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        '3xl': '1600px',
        '4xl': '1920px',
      },
    },
  },
  plugins: [],
};
