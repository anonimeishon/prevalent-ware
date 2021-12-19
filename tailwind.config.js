module.exports = {
  purge: ["./pages/**/*.tsx", "./components/**/*.tsx"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        cardTitle: "2.25rem",
      },
    },
  },
  plugins: [],
};
