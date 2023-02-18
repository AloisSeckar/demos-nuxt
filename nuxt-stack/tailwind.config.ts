// https://tailwindcss.com/docs/configuration
// https://tailwindcss.com/docs/plugins

import plugin from 'tailwindcss/plugin'

module.exports = {
  content: [
    'app.vue'
  ],
  theme: {
    // example of extending Tailwind CSS with custom color
    extend: {
      colors: {
        feature: '#3CB371'
      }
    }
  },
  plugins: [
    // example how to enable custom color class inside @apply directive
    plugin(function ({ addComponents, theme }) {
      addComponents({
        '.text-feature': {
          color: theme('colors.feature')
        }
      })
    })
  ]
}
