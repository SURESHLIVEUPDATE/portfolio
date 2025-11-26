module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'airbnb', // or other style guides like 'standard'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    // Add or override any specific linting rules here
    'react/react-in-jsx-scope': 'off',  // Vite doesn't require React to be in scope
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
