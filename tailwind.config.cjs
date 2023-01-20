/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'ubuntu': ['Ubuntu', 'sans-serif']
      },
      colors:{
        'coolGray': 'hsl(231, 11%, 63%)',
        'lightGray': 'hsl(229, 24%, 87%)',
        'magnolia': 'hsl(217, 100%, 97%)',
        'alabaster': 'hsl(231, 100%, 99%)',
        'white': 'hsl(0, 0%, 100%)',
        'marineBlue': 'hsl(213, 96%, 18%)',
        'purplishBlue': 'hsl(243, 100%, 62%)',
        'lightBlue': 'hsl(206, 94%, 87%)',
      },
      backgroundImage: {
        'sidebar-desktop': "url('./assets/images/bg-sidebar-desktop.svg')",
        'sidebar-mobile': "url('./assets/images/bg-sidebar-mobile.svg')",
      },
    },
  },
  plugins: [],
}
