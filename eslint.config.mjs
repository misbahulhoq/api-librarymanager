// @ts-check

import eslint from "@eslint/js";
import tseslint from "typescript-eslint";

export default tseslint.config(
  // Start with the recommended ESLint core rules
  eslint.configs.recommended,

  // Then, apply the recommended TypeScript rules
  ...tseslint.configs.recommended,

  // Now, add your custom rule override
  {
    rules: {
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          args: "all", // Check all arguments
          argsIgnorePattern: "^_", // Ignore arguments starting with _
          caughtErrors: "all", // Check all caught error blocks
          caughtErrorsIgnorePattern: "^_", // Ignore caught errors starting with _
          destructuredArrayIgnorePattern: "^_", // Ignore destructured array elements starting with _
          varsIgnorePattern: "^_", // Ignore variables starting with _
          ignoreRestSiblings: true, // Don't flag rest siblings
        },
      ],
    },
  }
);
