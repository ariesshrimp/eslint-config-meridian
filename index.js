module.exports = {
  // @docs http://eslint.org/docs/user-guide/configuring#specifying-parser-options
  ecmaFeatures: {
    jsx: true,
  },
  // @docs http://eslint.org/docs/user-guide/configuring#specifying-environments
  env: {
    browser: true, // DOM globals
    jest: true, // Jest globals
    node: true, // Node globals
  },
  // @docs http://eslint.org/docs/user-guide/configuring#extending-configuration-files
  extends: [
    'eslint:recommended', // @see http://eslint.org/docs/user-guide/configuring#using-eslintrecommended
    'plugin:react/recommended', // @see https://github.com/yannickcr/eslint-plugin-react#recommended
    'prettier', // @see https://github.com/prettier/eslint-config-prettier#installation
    'prettier/react', // @see https://github.com/prettier/eslint-config-prettier#installation
  ],
  // @docs http://eslint.org/docs/user-guide/configuring#specifying-parser
  parser: 'babel-eslint',
  // @docs http://eslint.org/docs/user-guide/configuring#using-the-configuration-from-a-plugin
  plugins: [
    'babel', // @see https://github.com/babel/eslint-plugin-babel#eslint-plugin-babel
    'react', // @see https://github.com/yannickcr/eslint-plugin-react#list-of-supported-rules
    'prettier', // @see https://github.com/not-an-aardvark/eslint-plugin-prettier#usage
  ],
  // @docs http://eslint.org/docs/user-guide/configuring#configuring-rules
  rules: {
    'prettier/prettier': [
      'error',
      {trailingComma: 'es5', singleQuote: true, bracketSpacing: false},
    ],
  },
};
