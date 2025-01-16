/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "custom-drop": "0px 0px 10px 10px #16D1F940",
        "box-shadow": "0px 1px 4px 0px #00000040",
        "shadow-4": "0px 1px 4px 0px #000000",
      },

      letterSpacing: {
        "spacing-4": "0.04em",
      },
      fontFamily: {
        alien: ['"SF Alien Encounters Solid"', "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(91.48deg, rgba(0, 0, 0, 0.6) 0.51%, rgba(102, 102, 102, 0.6) 129.52%)",
        background:
          "linear-gradient(148.78deg, rgba(255, 255, 255, 0.2) 56.01%, rgba(153, 153, 153, 0.04) 81.13%)",
        "btn-background": "linear-gradient(90deg, #0258FD 0%, #013597 100%)",
        "icon-background":
          "linear-gradient(180deg, rgba(221, 221, 221, 0.25) 0%, rgba(241, 241, 241, 0.25) 100%)",
        "priz-background":
          "linear-gradient(172.97deg, rgba(34, 31, 32, 0.6) 0%, rgba(0, 0, 0, 0.6) 97.87%)",
        "input-background":
          "linear-gradient(180deg, #1326A2 0%, #070E3C 99.99%)",
      },
    },
  },
  plugins: [],
};
