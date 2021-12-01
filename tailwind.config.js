/* eslint-disable no-undef */
const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
  },
  variants: {
    extend: {
      translate: ['group-hover'],
      scale: ['group-hover'],
      boxShadow: ['group-hover'],
    },
  },
  theme: {
    colors: {
      white: '#ffffff',
      transparent: 'rgba(255,255,255,0)',
      gray: colors.trueGray,
      indigo: colors.indigo,
      yellow: colors.amber,
      red: colors.rose,
      green: colors.green,
    },
    extend: {
      boxShadow: {
        md: '0px 0px 16px -5px rgba(43, 49, 66, 0.46)',
        purple: '0px 7px 11px -2px rgba(0, 0, 0, 0.75)',
        'focus-indigo': '0 0 0 3px rgba(180, 198, 252, 0.8)',
      },
      fontFamily: {
        header: ['Poppins', ...defaultTheme.fontFamily.sans],
        sans: ['Roboto', ...defaultTheme.fontFamily.sans],
      },
      typography: {
        DEFAULT: {
          css: {
            h1: {
              fontFamily: 'Poppins',
            },
            h2: {
              fontFamily: 'Poppins',
            },
            pre: {
              background: 'transparent',
              boxShadow: 'none',
              paddingRight: 0,
              paddingLeft: 0,
            },
          },
        },
      },
    },
  },
  purge: {
    content: ['./src/**/*.svelte'],
    enabled: false, // disable purge in dev
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
}
