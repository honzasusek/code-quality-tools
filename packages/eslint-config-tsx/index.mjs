import _import from 'eslint-plugin-import'
import prettier from 'eslint-plugin-prettier'
import { fixupPluginRules } from '@eslint/compat'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import js from '@eslint/js'
import { FlatCompat } from '@eslint/eslintrc'

import tsConfig from "@honzasusek/eslint-config-ts"
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
  tsConfig,
  removeImportFromPlugins(strvReact),
  removeImportFromPlugins(strvReactOptional),
  {
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
  },
]


