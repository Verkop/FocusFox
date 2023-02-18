module.exports = {
  extends: 'stylelint-config-standard-scss',
  plugins: [],
  rules: {
    'string-quotes': 'single',
    'scss/at-mixin-argumentless-call-parentheses': 'always',
    'selector-class-pattern': [
      '^(([a-z][a-z0-9]*)(-[a-z0-9]+)*)|(mat-column-.+)$',
      {
        message: (selector) => `Expected class selector "${selector}" to be kebab-case`,
      },
    ],
    'selector-id-pattern': [
      '[a-z]+((\\d)|([A-Z0-9][a-z0-9]+))*([A-Z])?',
      {
        message: (selector) => `Expected id selector "${selector}" to be lower camel case`,
      },
    ],
    'scss/dollar-variable-pattern': [
      '[a-z]+((\\d)|([A-Z0-9][a-z0-9]+))*([A-Z])?',
      {
        message: (selector) => `Expected id selector "${selector}" to be lower camel case`,
      },
    ],
    'selector-list-comma-newline-after': 'always-multi-line',
    'color-function-notation': 'legacy',
    'alpha-value-notation': 'number',
    'color-hex-length': 'long',
    'scss/at-import-no-partial-leading-underscore': null,
    'at-rule-empty-line-before': null,
    'function-parentheses-newline-inside': null,
    'scss/double-slash-comment-empty-line-before': null,
    'scss/dollar-variable-empty-line-before': null,
    'no-descending-specificity': null,
    'function-url-quotes': 'never',
    'property-no-vendor-prefix': null,
    'value-keyword-case': null,
    'scss/at-extend-no-missing-placeholder': null,
  },
};
