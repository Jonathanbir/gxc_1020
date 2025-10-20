import js from "@eslint/js";
import pluginSecurity from "eslint-plugin-security";

export default [
  js.configs.recommended,
  {
    plugins: {
      security: pluginSecurity,
    },
    rules: {
      // 啟用 security 插件建議規則
      ...pluginSecurity.configs.recommended.rules,
    },
    ignores: ["node_modules/**", "dist/**"],
  },
];
