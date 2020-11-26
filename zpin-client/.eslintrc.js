
module.exports = {
  env: {
    es6: true,
    node: true,
    browser: true,
    commonjs: true
  },
  globals: {
    expect: true,
    it: true,
    describe: true
  },
  extends: [ 'eslint:recommended' ],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true
    },
    sourceType: 'module',
  },
  plugins: [ 'react' ],
  rules: {
    'quotes': [ 2, 'single' ],
    'linebreak-style': [ 'error', 'unix' ],
    'no-unused-vars': 2,
    'no-trailing-spaces': 1,
    semi: [ 'error', 'always' ],
    'react/jsx-uses-react': 2,
    'react/jsx-uses-vars': 2,
    'no-undef': 2,
    'no-use-before-define': 2,
    'react/jsx-indent-props': [ 2, 4 ],
    'react/jsx-no-duplicate-props': 2,
    'react/jsx-sort-props': 2,
    'react/no-direct-mutation-state': 2,
    'arrow-parens': 0,
    'array-bracket-spacing': [ 'error', 'always' ],
    'object-curly-spacing': [ 'error', 'always' ],
    'space-before-function-paren': 1
  },
  settings: {
    'import/ignore': [
      'node_modules'
    ]
  }
};
