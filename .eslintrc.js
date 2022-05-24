module.exports = {
  root: true,
  extends: ['airbnb'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'import/no-unresolved': 'off',
        'no-use-before-define': 'off',
        'arrow-body-style': 'off',
        'linebreak-style': 'off',
        'no-unused-vars': 'warn',
        'import/prefer-default-export': 'off',
        'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
        'import/extensions': ['error', 'ignorePackages', {
          js: 'never', jsx: 'never', ts: 'never', tsx: 'never',
        },
        ],
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        'no-undef': 'off',
      },
      settings: {
        'import/resolver': { node: { extensions: ['.js', '.jsx', '.ts', '.tsx'] } },
      },
    },
  ],
};
