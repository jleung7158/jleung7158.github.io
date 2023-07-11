module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
          ice: "#99d3df",
          freshwater: "#88BBD6",
          plaster: "#CDCDCD",
          linen: "#E9E9E9",
          lapiz: "#2E9CCA",
          aqua: "#29648A",
          steel: "#AAABB8",
          purple: "#464866",
          grape: "#25274D",
          dark: "#27374D",
          lessdark: "#526D82",
          lesslight: "#9DB2BF",
          light: "#DDE6ED",
        },
      animation: {
      },
      keyframes: {
        fadeIn: {
          '0%': {opacity: "0"},
          '100%': {opacity: "1"},
        },
      }
    }
  }
};