import withNuxt from './.nuxt/eslint.config.mjs'

// config is being passed as an array of separate objects
// as suggested here: https://github.com/nuxt/eslint/discussions/413

export default withNuxt([

  // what files will be linted
  { files: ['**/*.js', '**/*.ts', '**/*.vue'] },

  // `rules` section can follow, where you can change default eslint behaviour if needed
  // you can adjust or even turn off some rules if you cannot or don't want to satisfy them

  {
    rules: {
    },
  },

])
