module.exports = {
    "env": {
        "es2021": true,
        "browser": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react/recommended",
        "plugin:react-hooks/recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint",
        "react",
        "react-hooks"
    ],
    "rules": {
        "react/react-in-jsx-scope": "off",
        "react-hooks/rules-of-hooks": "warn",
        "react-hooks/exhaustive-deps": "warn",
        "quotes": [
            "error",
            "double"
        ],
        "semi": [
            "error",
            "always"
        ]
    }
}
