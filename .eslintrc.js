module.exports = {
    root: true,
    env: {
        node: true
    },
    'extends': [
        // 'plugin:vue/vue3-essential',
        // 'eslint:recommended',
        '@vue/typescript/recommended'
    ],
    parserOptions: {
        ecmaVersion: 2020
    },
    rules: {
        'semi': 0,
        'no-deprecated-slot-attribute': 'off',
        'no-deprecated-slot-scope-attribute': 'off',

        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        '@typescript-eslint/no-use-before-define': 'off',
        'no-prototype-builtins': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        'vue/no-mutating-props': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
    }
}
