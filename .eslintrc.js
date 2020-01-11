module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  "parser": "babel-eslint",
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    "indent": [2, 4],
    "react/jsx-indent": ["error", 4],
    "react/jsx-indent-props": ["error", 4],
    "jsx-a11y/label-has-associated-control": [
      "error",
      {
        "labelComponents": [],
        "labelAttributes": [],
        "controlComponents": [],
        "assert": "either",
        "depth": 25
      }
    ],

  },

};
