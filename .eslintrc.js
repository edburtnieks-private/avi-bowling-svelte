module.exports = {
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module'
  },
  env: {
    es6: true,
    browser: true
  },
  extends: [
    'airbnb-base',
    'plugin:cypress/recommended',
    'prettier'
  ],
  plugins: [
    'prettier',
    'svelte3'
  ],
  overrides: [
    {
      files: ['**/*.svelte'],
      processor: 'svelte3/svelte3',
      rules: {
        'import/first': 'off',
        'import/no-duplicates': 'off',
        'import/no-mutable-exports': 'off',
        'import/no-unresolved': 'off',
        'import/prefer-default-export': 'off',
        'quotes': [
          'error',
          'single',
          {
            'avoidEscape': true,
            'allowTemplateLiterals': true
          }
        ]
      }
    }
  ],
  rules: {
    "import/no-extraneous-dependencies": "off"
  }
};
