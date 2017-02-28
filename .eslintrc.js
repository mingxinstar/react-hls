module.exports = {
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    parserOptions : {
        ecmaVersion : 8,
        sourceType : 'module',
        ecmaFeatures : {
            jsx : true
        }
    },
    plugins : ['react'],
    env : {
        browser : true,
        node : true,
        es6 : true
    },
    rules : {
        "no-console" : 1,
        "no-unused-vars" : 1
    }
}
