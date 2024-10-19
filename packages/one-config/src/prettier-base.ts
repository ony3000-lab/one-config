import type { Options } from "prettier";

const defaultOptions: Options = {
  printWidth: 80,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: false,
  jsxSingleQuote: false,
  trailingComma: "all",
  bracketSpacing: true,
  bracketSameLine: false,
  rangeStart: 0,
  rangeEnd: Infinity,
  requirePragma: false,
  insertPragma: false,
  proseWrap: "preserve",
  arrowParens: "always",
  htmlWhitespaceSensitivity: "css",
  endOfLine: "lf",
  quoteProps: "as-needed",
  vueIndentScriptAndStyle: false,
  embeddedLanguageFormatting: "auto",
  singleAttributePerLine: false,
  experimentalTernaries: false,
};

export default {
  ...defaultOptions,
  singleQuote: true,
};
