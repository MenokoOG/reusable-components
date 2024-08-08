module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        darkBg: '#1a202c',
        darkBgGradientStart: '#2d3748',
        darkBgGradientEnd: '#1a202c',
        primaryText: '#ffffff',
        secondaryText: '#a0aec0',
        primaryAccent: '#3182ce',
        secondaryAccent: '#63b3ed',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
