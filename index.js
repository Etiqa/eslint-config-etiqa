//TODO add Travis and auto publish!
module.exports = {
    extends: "eslint:recommended",
    rules: {
        "no-alert": 2,
        "no-console": 2,
        "curly": [2, "all"],
        "brace-style": [2, "1tbs"],
        "camelcase": 2,
        "eqeqeq": 2,
        "guard-for-in": 2,
        "keyword-spacing": [2, {"before": true, "after": true}],
        "wrap-iife": [2, "outside"],
        "space-infix-ops": 2,
        "space-in-parens": 2,
        "comma-spacing": 2,
        "quote-props": [2, "as-needed"],
        "key-spacing": 2,
        "operator-linebreak": [2, "after"],
        "object-curly-spacing": [2, "always", {
            "arraysInObjects": false
        }],
        "max-len": [2, 120, 4],
        "dot-notation": 2,
        "yoda": [2, "never"],
        "indent": [2, 4, {"SwitchCase": 1}],
        "linebreak-style": [2, "unix"],
        "no-mixed-spaces-and-tabs": 2,
        "no-trailing-spaces": 2,
        "no-multiple-empty-lines": [2, {"max": 1 }],
        "comma-dangle": [2, "never"],
        "no-multi-str": 2,
        "no-empty": 2,
        "no-unused-vars": [2, {
            "vars": "all",
            "varsIgnorePattern": "^React",
            "args": "after-used"
        }]
    },
    env: {
        "es6": true,
        "browser": true,
        "node": true
    },
    parserOptions: {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true,
            "modules": true,
            "experimentalObjectRestSpread": true
        }
    }
};
