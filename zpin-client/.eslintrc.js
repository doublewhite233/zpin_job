module.exports = {
  root: true,
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
    'quotes': [ 1, 'single' ],
    'linebreak-style': [ 0, 'windows' ],
    'comma-style': [2, 'last'],
    'no-unused-vars': 1,
    'no-trailing-spaces': 1,
    'block-spacing': [ 1, 'always' ],
    'semi': [ 2, 'always' ],
    'react/jsx-uses-react': 2,
    'react/jsx-uses-vars': 2,
    'no-undef': 2,
    'no-use-before-define': 2,
    'react/jsx-indent-props': [ 2, 4 ],
    'react/jsx-no-duplicate-props': 2,
    'react/jsx-sort-props': 1,
    'react/no-direct-mutation-state': 2,
    'arrow-parens': 0,
    'array-bracket-spacing': [ 1, 'always' ],
    'object-curly-spacing': [ 2, 'always' ],
    'space-before-function-paren': 1
  },
  settings: {
    'import/ignore': [
      'node_modules'
    ]
  }
};
