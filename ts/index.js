module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      generators: true,
      jsx: true,
    },
  },
  env: {
    browser: true,
    jest: true,
    node: true,
  },

  extends: [
    'airbnb',
    'prettier',
    'plugin:eslint-comments/recommended',
    'plugin:sonarjs/recommended',
    'plugin:unicorn/recommended',
    'plugin:react/recommended',
    'prettier/react',
    'prettier/unicorn',
    'plugin:@typescript-eslint/recommended',
  ],
  settings: {
    'import/ignore': ['node_modules'],
    'import/extensions': ['.tsx', '.ts', '.js', '.json'],
  },

  plugins: [
    '@typescript-eslint',
    'import',
    'jsx-a11y',
    'react',
    'react-hooks',
    'sonarjs',
    'unicorn',
  ],

  rules: {
    'no-console': 'error',
    'no-debugger': 'error',
    'no-multiple-empty-lines': ['error', { max: 3, maxEOF: 0 }],
    'no-underscore-dangle': 'off',
    'no-unused-expressions': [
      'error',
      {
        allowShortCircuit: true,
        allowTernary: true,
        allowTaggedTemplates: true,
      },
    ],
    'no-useless-computed-key': 'error',
    'no-useless-constructor': 'error',
    'no-useless-rename': [
      'error',
      { ignoreDestructuring: false, ignoreImport: false, ignoreExport: false },
    ],
    'object-curly-newline': 'off',
    'padded-blocks': [
      'error',
      { blocks: 'never', switches: 'never', classes: 'never' },
    ],
    'prefer-const': 'error',

    'import/default': 'error',
    'import/named': 'error',
    'import/namespace': 'error',
    'import/extensions': ['error', 'never'],

    'jsx-a11y/aria-props': 'error',
    'jsx-a11y/aria-role': 'error',
    'jsx-a11y/heading-has-content': 'error',
    'jsx-a11y/href-no-hash': 'off',
    'jsx-a11y/label-has-for': 'off',
    'jsx-a11y/mouse-events-have-key-events': 'error',
    'jsx-a11y/role-has-required-aria-props': 'error',
    'jsx-a11y/role-supports-aria-props': 'error',
    'jsx-a11y/img-redundant-alt': 'error',
    'jsx-a11y/no-access-key': 'error',
    'jsx-a11y/anchor-is-valid': 'off',

    'react/jsx-indent': 'off',
    'react/require-default-props': 'off',
    'react/forbid-prop-types': ['error', { forbid: ['any'] }],
    'react/jsx-curly-brace-presence': 'off',
    'react/jsx-filename-extension': ['error', { extensions: ['.js'] }],
    'react/no-array-index-key': 'off',
    'react/prefer-stateless-function': 'off',
    'react/jsx-indent-props': 'off',
    'react/jsx-wrap-multilinis': 'off',

    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',

    '@typescript-eslint/indent': 'off',

    'unicorn/filename-case': 'off',
    'unicorn/catch-error-name': ['error', { name: 'err' }],
    'unicorn/prevent-abbreviations': 'off',
  },
};
