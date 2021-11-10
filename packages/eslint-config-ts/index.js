module.exports = {
  plugins: ["@typescript-eslint", "prettier", "unused-imports"],
  extends: [
    "@strv/typescript",
    "@strv/typescript/style",
    "@honzasusek/eslint-config-line-spacing",
    "prettier",
  ],
  rules: {
    "import/order": ["error", { "newlines-between": "never" }],
    "prettier/prettier": "error",
    "import/no-default-export": 0,
    "consistent-return": "off",
    "unused-imports/no-unused-imports": "error",
    "unused-imports/no-unused-vars": [
      "warn",
      {
        vars: "all",
        varsIgnorePattern: "^_",
        args: "after-used",
        argsIgnorePattern: "^_",
      },
    ],
  },
};
