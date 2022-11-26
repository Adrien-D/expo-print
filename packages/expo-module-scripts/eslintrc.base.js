module.exports = {
  root: true,
  extends: ['universe/native'],
  overrides: [
    {
      files: ['**/__tests__/*'],
      env: { node: true },
      globals: { __DEV__: true },
    },
  ],
  rules: {
    'no-restricted-imports': [
      'warn',
      {
        // fbjs is a Facebook-internal package not intended to be a public API
        patterns: ['fbjs/*', 'fbjs'],
      },
    ],
  },
};
