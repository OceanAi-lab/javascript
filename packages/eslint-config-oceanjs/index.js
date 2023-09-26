module.exports = {
    extends: [
      './rules/imports',
    ].map(require.resolve),
    parserOptions: {
      ecmaVersion: 2018,
      sourceType: 'module',
    },
    rules: {},
  };