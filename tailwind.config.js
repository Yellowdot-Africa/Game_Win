/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],  theme: {
    extend: {
      fontFamily: {
        mochiy: ['Mochiy Pop P One', 'sans-serif'],
      },
      textColor: {
          //  gradient:[]
           'custom-gradient': 'linear-gradient(to right, var(--tw-gradient-stops))',

      },
      fontSize: {
        '16px': '16px',
        '14px': '14px',
      },
      lineHeight: {
        '23.17px': '23.17px',
        '20.27px': '20.27px',
      },
      boxShadow: {
        'shadow-1': '22px 35px 91px 0px #0000001A',
        'shadow-2': '89px 139px 165px 0px #00000017',
        'shadow-3': '200px 312px 223px 0px #0000000D',
        'shadow-4': '355px 556px 264px 0px #00000003',
        'shadow-5': '555px 868px 288px 0px #00000000',
        'shadow-6': '0px 4px 4px 0px #00000066',
        'shadow-7': '0px 4px 8px 0px #FFFFFF66',
        

      },
      gridTemplateColumns: {
        'auto-fit': 'repeat(auto-fit, minmax(40px, 1fr))',
      },
    },
  },
  plugins: [],
}










