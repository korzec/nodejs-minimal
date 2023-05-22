module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true
  },
  extends: 'standard-with-typescript',
  overrides: [
  ],
  parserOptions: {
    project: ['./tsconfig.test.json'],
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  ignorePatterns: 'build',
  rules: {
  }
}
