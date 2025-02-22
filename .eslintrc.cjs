module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'standard',
    'plugin:@typescript-eslint/recommended' // Recommended TypeScript rules
  ],
  plugins: ['standard', 'promise', '@typescript-eslint'],
  rules: {
    '@typescript-eslint/no-var-requires': 'warn',
    '@typescript-eslint/no-unused-vars': 'error',
    'space-before-function-paren': 'warn',
    '@typescript-eslint/ban-ts-comment': 'warn',
    '@typescript-eslint/no-explicit-any': 'warn'
  }
}
