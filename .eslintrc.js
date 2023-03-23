module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:prettier/recommended",
    "prettier/react",
    "airbnb-base",
    "eslint:recommended",
  ],
  parserOptions: {
    cmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: "latest",
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