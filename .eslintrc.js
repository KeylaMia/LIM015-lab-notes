module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true
    },
    extends: [
        "plugin:react/recommended",
        "airbnb"
    ],
    parserOptions: {
        ecmaFeatures: {
            "jsx": true
        },
        ecmaVersion: 13,
        sourceType: "module"
    },
    plugins: [
        "react"
    ],
    rules: {
        "linebreak-style": 0,
        "react/jsx-filename-extension": [0]
    }
};
