module.exports = {
    root: true,
    env: {
      browser: true,
      node: true
    },
    parserOptions: {
      parser: "eslint",
      ecmaVersion: 6,
      ecmaFeatures: {
        jsx: true
      },
      "sourceType": "module"
    },
    extends: [
      'airbnb',
      "eslint:recommended", //ESLintで基本的なルールチェック(更に細かく個別指定可)
      'plugin:import/errors',
      'plugin:import/warnings',
      'plugin:prettier/recommended',
      'prettier',
      'prettier/@typescript-eslint',
      'prettier/react'
    ],
    plugins: [
      'jest',
      'prettier',
      'prefer-arrow',
      'react',
      'react-hooks'
    ],
    settings: {
      'import/resolver': {
        node: {
          extensions: ['.js', 'jsx', '.ts', '.tsx']
        }
      },
      react: {
        version: 'detect'
      }
    },
    // ここにカスタムルールを追加します。
    rules: {
      // eslint official
      'newline-before-return': 'error',
      'no-console': 'warn',
      'require-yield': 'error',
      //'no-unused-expressions': 'off',

      // react
      'react/jsx-filename-extension': [
        'error',
        {
          extensions: ['jsx', 'tsx']
        }
      ],
      'react/jsx-one-expression-per-line': 'off',
      'react/jsx-uses-react': 'error',
      'react/jsx-uses-vars': 'error',
      'react/prop-types': 'off',
      'react/prefer-stateless-function': 'off',

      // react hooks
      'react-hooks/rules-of-hooks': 'error',

      // import

      'import/extensions': [
        'error',
        'always',
        {
          js: 'never',
          jsx: 'never',
          ts: 'never',
          tsx: 'never'
        }
      ],



      'import/prefer-default-export': 'off',

      // prettier
      'prettier/prettier': [
        'error', {
          bracketSpacing: true,
          printWidth: 80,
          semi: true,
          singleQuote: true,
          trailingComma: 'all',
          useTabs: false
        }
      ]
    }
}
