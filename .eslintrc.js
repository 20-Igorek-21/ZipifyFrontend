module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true,
    },
    extends: [
        'plugin:vue/vue3-recommended',
    ],
    rules: {
        'no-console': 'off',
        'no-alert': 'off',
        'no-unused-vars': ['warn', { vars: 'local', args: 'after-used' }],
        'no-extra-bind': 'error',

// override default options for rules from base configurations
        'no-cond-assign': ['error', 'always'],
        eqeqeq: ['warn', 'smart'],

// disable rules from base configurations
        'block-scoped-var': 'error',
        'guard-for-in': 'error',
        'no-loop-func': 'error',
        'no-self-compare': 'error',
        'no-use-before-define': 'error',
        'no-unneeded-ternary': 'error',
        'no-prototype-builtins': 'off',
        'no-extend-native': 'error',
        'padding-line-between-statements': [
            'error',
            // offset after variables
            { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
            { blankLine: 'any', prev: ['const', 'let', 'var'], next: ['const', 'let', 'var'] },

            // offset after imports
            { blankLine: 'always', prev: 'import', next: '*' },
            { blankLine: 'any', prev: 'import', next: 'import' },

            // offset after oneline if statements
            { blankLine: 'always', prev: 'if', next: '*' },
            { blankLine: 'any', prev: 'if', next: 'if' },
            { blankLine: 'any', prev: 'multiline-block-like', next: '*' }
        ],
        'comma-dangle': ['error', 'never'],
        quotes: ['error', 'single'],
        semi: ['error', 'always'],
        curly: ['error', 'multi-line'],
        'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
        'padded-blocks': ['error', 'never'],
        'object-curly-spacing': ['error', 'always'],
        'array-bracket-spacing': ['error', 'never'],
        'comma-spacing': [
            'error',
            {
                before: false,
                after: true
            }
        ],
        'space-infix-ops': 'error',
        'keyword-spacing': 'off',
        'comma-style': ['error', 'last'],
        'space-before-blocks': 'error',
        'arrow-spacing': [
            'error',
            {
                before: true,
                after: true
            }
        ],
        'brace-style': ['error', '1tbs', { allowSingleLine: true }],
        'template-curly-spacing': ['error', 'never'],
        'prefer-template': 'error',
        'no-useless-concat': 'error',
        'no-duplicate-imports': 'error',
        'no-param-reassign': ['error', { props: false }],
        'new-parens': ['error', 'always'],
        'default-param-last': 'error',
        'max-params': ['error', 4],
        'no-useless-computed-key': ['error', { enforceForClassMembers: true }],
        'dot-notation': 'error',
        'import/named': 'error',
        'import/default': 'error',
        'import/namespace': 'error',
        'import/no-absolute-path': 'error',
        'import/no-self-import': 'error',
        'import/no-useless-path-segments': 'error',
        'import/export': 'error',
        'import/no-deprecated': 'warn',
        'import/first': 'error',
        'import/no-namespace': 'error'
    }
}
