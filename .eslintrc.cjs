module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "react"],
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  rules: {
    "no-console": "warn",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "react/no-unescaped-entities": "off",
    "react/prop-types": "off",
    "react/display-name": "off",
    "react/jsx-curly-brace-presence": [
      "warn",
      { props: "never", children: "never" },
    ],
    "react-hooks/exhaustive-deps": "off",
    //#region  //*=========== Unused Import ===========
    "@typescript-eslint/no-unused-vars": [
      "warn",
      {
        varsIgnorePattern: "^_",
        ignoreRestSiblings: true,
        // (unusedArg1, unusedArg2, arg3) while arg3 is only used is allowed
        args: "after-used",
        // (arg1, arg2, _arg3) while _arg3 is unused is allowed
        argsIgnorePattern: "^_",
        // ({..._props}) while _props is unused is allowed
        destructuredArrayIgnorePattern: "^_",
      },
    ],
    //#endregion  //*======== Unused Import ===========
  },
  globals: {
    React: true,
    JSX: true,
  },
};
