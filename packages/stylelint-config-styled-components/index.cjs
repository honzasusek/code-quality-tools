module.exports = {
  extends: [
    'stylelint-config-recommended',
    'stylelint-config-recommended-scss',
  ],
  rules: {
    'no-descending-specificity': null,
    'font-family-no-missing-generic-family-keyword': null,
    'selector-pseudo-element-no-unknown': null,
    'no-empty-source': null,
    'scss/operator-no-newline-after': null,
    'scss/operator-no-unspaced': null,
  },
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      customSyntax: require('postcss-styled-syntax'),
    },
  ],
}
