module.exports = {
  rules: {
    "padding-line-between-statements": [
      "error",
      {
        blankLine: "always",
        prev: "*",
        next: [
          "block",
          "block-like",
          "multiline-expression",
          "cjs-export",
          "class",
          "const",
          "let",
          "var",
          "return",
          "if",
          "for",
          "while",
          "with",
          "do",
        ],
      },
      {
        blankLine: "always",
        prev: [
          "export",
          "block",
          "block-like",
          "multiline-expression",
          "cjs-export",
          "class",
          "const",
          "let",
          "var",
          "return",
          "if",
          "for",
          "while",
          "with",
          "do",
        ],
        next: "*",
      },
      {
        blankLine: "never",
        prev: ["singleline-const", "singleline-let", "singleline-var"],
        next: ["singleline-const", "singleline-let", "singleline-var"],
      },
      {
        blankLine: "never",
        prev: "import",
        next: "import",
      },
    ],
  },
};
