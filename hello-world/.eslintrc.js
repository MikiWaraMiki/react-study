module.exports = {
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": [
    "airbnb",
    "airbnb/hooks",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 12,
    "project": './tsconfig.eslint.json',
    "sourceType": "module",
    tsconfigRootDir: __dirname
  },
  "plugins": [
    "@typescript-eslint",
    "import",
    "jsx-a11y",
    "react",
    "react-hooks"
  ],
  "root": true,
  "rules": {
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': [
      'error'
    ],
    'lines-between-class-members': [
      'error',
      'always',
      {
        exceptAfterSingleLine: true
      }
    ]
  }
};
