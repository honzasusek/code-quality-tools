import _import from 'eslint-plugin-import'
import prettier from 'eslint-plugin-prettier'
import { fixupPluginRules } from '@eslint/compat'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import js from '@eslint/js'
import { FlatCompat } from '@eslint/eslintrc'
import unusedImports from 'eslint-plugin-unused-imports'

import lineSpacing from '@honzasusek/eslint-config-line-spacing'
import strvTypescript from '@strv/eslint-config-typescript'
import strvTypescriptOptional from '@strv/eslint-config-typescript/optional'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const removeImportFromPlugins = config => {
  const { import: _, ...pluginsWithoutImport } = config.plugins

  return {
    ...config,
    plugins: pluginsWithoutImport,
  }
}

export default [
  ...tseslint.config(
    {
      plugins: {
        import: fixupPluginRules(_import),
      },
    },
    removeImportFromPlugins(strvTypescript),
    removeImportFromPlugins(strvTypescriptOptional),
    {
      plugins: { prettier, unusedImports},      
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
    },
    ...tseslint.configs.recommended
  ),
]

