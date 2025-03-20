/**  @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        glory: ['Glory', 'sans-serif'],
        caveat: ['Caveat', 'sans-serif'],
      },
      colors: {
        primary: '#f6f6f6',
        textPrm: '#444444',
        secondary: '#f8714f',
        danger: '#FF4C4C',
        border: '#00221C',
        background: '#b1c8c0',
        text: '#00221C',
        hover: '#005549',
        lightError: '#EA6C61',
        lightSuccess: '#09EB22',
        foreground: 'hsl(var(--foreground))', // or directly define the color
      },
      screens: {
        xs: '400px',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      backgroundImage: {
        heroBg: "url('/assets/homeHero.jpeg')",
      },
    },
  },
  plugins: [],
}
