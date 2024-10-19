import type { Linter } from "eslint";

const config: Linter.Config = {
  extends: [
    "next/core-web-vitals",
    "airbnb",
    "airbnb-typescript",
    "airbnb/hooks",
    "plugin:react/jsx-runtime",
    "prettier",
  ],
  parserOptions: {
    project: "./tsconfig.json",
  },
  rules: {
    curly: [2, "all"],
    "@typescript-eslint/naming-convention": [
      2,
      {
        selector: "enumMember",
        format: ["UPPER_CASE"],
      },
      {
        selector: "variable",
        modifiers: ["const"],
        format: ["UPPER_CASE", "camelCase"],
      },
      {
        selector: "variable",
        format: ["camelCase"],
      },
      {
        selector: "method",
        format: ["camelCase"],
      },
      {
        selector: "function",
        format: ["camelCase", "PascalCase"],
      },
      {
        selector: "typeLike",
        format: ["PascalCase"],
      },
    ],
  },
};

export default config;
