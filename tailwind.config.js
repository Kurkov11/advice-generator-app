/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './docs/**/*.{html,js}'
  ],
  theme: {
    extend: {
      colors: {
        'backgroundColor': "hsl(218, 23%, 16%)",
        'cardColor': 'hsl(217, 19%, 24%)',
        'neonGreen': 'hsl(150, 100%, 66%)',
        'grayishBlue': 'hsl(217, 19%, 38%)',
        'adviceColor': 'hsl(193, 38%, 86%)'
      },
      fontFamily: {
        'manrope': 'manrope'
      },
      fontSize: {
        'advice': '26px',
        'id': '0.6rem'
      },
      letterSpacing: {
        'id': '0.15rem'
      },
      padding: {
        'wrapperDiceCompensation': '28px'
      },
      spacing: {
        'diceBottom': '-28px' //Hard coded half of dice height
      },
      maxWidth: {
        'cardMaxWidth': '472px'
      },
      boxShadow: {
        'neonShadow': "hsl(150, 100%, 66%) 0px 0px 20px"
      },
      screens: {
        'lg': '496px'
      }

    },
  },
  plugins: [],
}

