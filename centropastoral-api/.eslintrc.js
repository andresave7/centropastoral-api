module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "google",
    "plugin:@typescript-eslint/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: ["tsconfig.json", "tsconfig.dev.json"]
  },
  ignorePatterns: [
    "/lib/**/*", "/node_modules/", "/src/**/*",
    "./src/routes/", "./src/models/",
    "./src/middleware/", "./src/controller/",
    "./src/models", "./src/utils/", "./src/config/", "./src/core",
    "./src/route/", "*.min.js",
  ],
  plugins: [
    "@typescript-eslint",
    "import",
  ],
  rules: {
    "quotes": ["error", "double"],
    "import/no-unresolved": 0,
    "indent": ["error", 2],
  },
};
