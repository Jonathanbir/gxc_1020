import security from "eslint-plugin-security";

export default [
  {
    files: ["**/*.js", "**/*.ts"],
    ignores: ["node_modules/**", "dist/**"],
    plugins: { security },
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
    },
    rules: {
      "security/detect-object-injection": "warn",
      "security/detect-eval-with-expression": "error",
      "security/detect-non-literal-fs-filename": "error",
    },
  },
];
