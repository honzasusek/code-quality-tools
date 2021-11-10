module.exports = {
  extends: ["@honzasusek/eslint-config-ts"],
  rules: {
    "@typescript-eslint/naming-convention": [
      "warn",
      {
        selector: "function",
        format: ["PascalCase", "camelCase"],
      },
    ], // functional components need PascalCase
    "react-hooks/exhaustive-deps": 0,
  },
};
