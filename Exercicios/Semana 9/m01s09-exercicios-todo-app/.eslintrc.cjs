module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'prettier',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    "react/prefer-stateless-function": [2, { "ignorePureComponents": true }],
    "react/function-component-definition": [2, {
      "namedComponents": "function-declaration" | "function-expression" | "arrow-function" | "function-expression" | "arrow-function",
      "unnamedComponents": "function-expression" | "arrow-function" | "arrow-function"
    }]
  },
};
