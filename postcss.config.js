const purgecss = [
  '@fullhuman/postcss-purgecss',
  {
    content: ['./src/**/*.js', './src/**/*.ts', './src/**/*.tsx'],
    defaultExtractor: (content) => content.match(/[\w-/.:]+(?<!:)/g) || [],
  },
]

module.exports = {
  plugins: ['tailwindcss', ...(process.env.NODE_ENV === 'production' ? [purgecss] : []), 'postcss-preset-env', 'postcss-nested'],
}
