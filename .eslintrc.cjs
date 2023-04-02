module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    "prettier",
    "eslint:recommended",
  ],
  plugins: ["@babel"],
  parser: "@babel/eslint-parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: "module",
  },
  rules: {
    "semi": "error",
    "prefer-const": "warn",
    "no-undef": "off",
    "import/order": [
      "warn",
      {
        "groups": ["builtin", "external", ["parent", "sibling"], "index"],
        "newlines-between": "always"
      }
    ],
  }
};