module.exports = {
    'env': {
        'browser': true,
        'es6': true
    },
    extends: 'eslint:recommended',
    parserOptions: {
      ecmaVersion: 2018,
      sourceType: 'module',
    },
    'rules': {
        strict: ['error', 'global'],
        'multiline-comment-style': ['error', 'starred-block'],
        'spaced-comment': ['error', 'always'],
        semi: ['error', 'always'],
        'semi-spacing': 'error',
        'no-extra-semi': 'error',
        'no-unexpected-multiline': 'error',
        'max-len': ['error', {'code': 80}],
        'comma-style': ['error', 'last'],
        'comma-dangle': ['error', 'always-multiline'],
        indent: ['error', 2],
        'space-infix-ops': 'error',
        'brace-style': 'error',
        'space-before-blocks': 'error',
        'keyword-spacing': 'error',
        'arrow-spacing': 'error',
        'no-self-compare': 'error',
        'func-names': ['error', 'as-needed'],
        'func-style': ['error', 'expression'],
        'no-sparse-arrays': 'error',
        'no-template-curly-in-string': 'error',
        'no-cond-assign': 'error',
        'no-constant-condition': 'error',
        'valid-typeof': 'error',
    },
};