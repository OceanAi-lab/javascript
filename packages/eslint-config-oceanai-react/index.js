module.exports = {
  extends: [
    'eslint-config-oceanai',
    './rules/react',
  ].map(require.resolve),
  rules: {}
}
