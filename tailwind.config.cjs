/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Montserrat", "ui-sans-serif", "system-ui"],
      oswald: ["Oswald", "ui-sans-serif", "system-ui"],
      trispace: ["Trispace", "ui-sans-serif", "system-ui"],
    },
    extend: {
      container: {
        center: true,
      },
      colors: {
        "dark-gray": "#D9D9D9",
        'space-gray': '#939598',
        accent: "#FCD638",
        "xl-bg": "#E6E7E8",
        "xl-accent": "#7C3C82",
        'electrician-accent': '#FCD638',
      },
      backgroundImage: {
        "main-bg": "url('/main_bg.webp')",
        "nature-bg": "url('/nature-bg.svg')",
        "xl-pipe-bg": "url('/xl-pipe-bg.webp')",
        "electrician-bg": "url('/electrician-bg.png')",
        'heater-bg': "url('/heater-bg.png')",
      },
      fontSize: {
        xxs: ".68rem",
      },
    },
  },
  plugins: [require('prettier-plugin-tailwindcss')],
};
