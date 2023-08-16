const path = require('path')

module.exports = {
  root: true,
  env: { browser: true, es2015: true, node: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:jsx-a11y/recommended',
    'plugin:@typescript-eslint/recommended',
    'eslint-config-prettier',
    'prettier'
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['prettier'],
  settings: {
    react: {
      version: 'detect'
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        paths: [path.resolve(__dirname, '.')]
      }
    }
  },
  rules: {
    'react/jsx-no-target-blank': 'warn',
    'react/react-in-jsx-scope': 'off',
    'react/display-name': 'off',
    'prettier/prettier': [
      'warn',
      {
        arrowParens: 'always',
        semi: false,
        trailingComma: 'none',
        tabWidth: 2,
        endOfLine: 'auto',
        useTabs: false,
        singleQuote: true,
        printWidth: 120,
        jsxSingleQuote: true
      }
    ]
  }
}
