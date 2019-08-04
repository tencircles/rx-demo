module.exports = {
    "extends": "",
    "plugins": [
        "align-assignments"
    ],
    "parserOptions": {
        "sourceType": "module",
        "ecmaVersion": 9,
        "ecmaFeatures": {
            "impliedStrict": true,
            "jsx": true
        }
    },
    "env": {
        "browser": true,
        "node": true,
        "es6": true,
        "jest": true,
        "serviceworker": true,
        "worker": true
    },
    "globals": {},
    "rules": {
        "align-assignments/align-assignments": [
            "error",
            {
                "requiresOnly": false
            }
        ],
        "accessor-pairs": "error",
        "array-callback-return": "error",
        "array-bracket-newline": "error",
        "array-bracket-spacing": [
            "error",
            "never"
        ],
        "array-element-newline": "off",
        "arrow-body-style": [
            "error",
            "as-needed"
        ],
        "arrow-parens": [
            "error",
            "as-needed"
        ],
        "arrow-spacing": "error",
        "block-scoped-var": "error",
        "block-spacing": [
            "error",
            "always"
        ],
        "brace-style": [
            "error",
            "1tbs"
        ],
        "callback-return": "error",
        "camelcase": [
            "error",
            {
                "properties": "always"
            }
        ],
        "capitalized-comments": "off",
        "class-methods-use-this": "error",
        "comma-dangle": [
            "error",
            "never"
        ],
        "comma-spacing": [
            "error",
            {
                "before": false,
                "after": true
            }
        ],
        "comma-style": [
            "error",
            "last"
        ],
        "complexity": [
            "error",
            8
        ],
        "computed-property-spacing": [
            "error",
            "never"
        ],
        "consistent-return": "error",
        "consistent-this": "off",
        "constructor-super": "error",
        "curly": [
            "error",
            "all"
        ],
        "default-case": "error",
        "dot-location": [
            "error",
            "property"
        ],
        "dot-notation": "error",
        "eol-last": "error",
        "eqeqeq": [
            "error",
            "always"
        ],
        "for-direction": "error",
        "func-call-spacing": "error",
        "func-name-matching": "error",
        "func-names": [
            "error",
            "always"
        ],
        "func-style": [
            "error",
            "declaration",
            {
                "allowArrowFunctions": true
            }
        ],
        "function-paren-newline": [
            "error",
            "consistent"
        ],
        "generator-star-spacing": [
            "error",
            {
                "before": true,
                "after": true
            }
        ],
        "getter-return": "error",
        "global-require": "off",
        "guard-for-in": "off",
        "handle-callback-err": "error",
        "id-blacklist": "off",
        "id-length": [
            "error",
            {
                "min": 0,
                "max": 24
            }
        ],
        "id-match": "off",
        "implicit-arrow-linebreak": "off",
        "indent": [
            "error",
            4
        ],
        "init-declarations": "off",
        "jsx-quotes": [
            "error",
            "prefer-double"
        ],
        "key-spacing": [
            "error",
            {
                "multiLine": {
                    "beforeColon": true,
                    "afterColon": true
                },
                "align": {
                    "beforeColon": true,
                    "afterColon": true,
                    "on": "colon"
                }
            }
        ],
        "keyword-spacing": [
            "error",
            {
                "before": true,
                "after": true
            }
        ],
        "line-comment-position": "off",
        "linebreak-style": [
            "error",
            "unix"
        ],
        "lines-around-comment": "off",
        "lines-around-directive": "off",
        "lines-between-class-members": [
            "error",
            "never"
        ],
        "max-depth": "off",
        "max-len": [
            "error",
            120
        ],
        "max-lines": [
            "error",
            {
                "max": 250
            }
        ],
        "max-nested-callbacks": [
            "error",
            3
        ],
        "max-params": [
            "error",
            5
        ],
        "max-statements": [
            "error",
            25
        ],
        "max-statements-per-line": [
            "error",
            {
                "max": 1
            }
        ],
        "multiline-comment-style": "off",
        "multiline-ternary": "off",
        "new-cap": "off",
        "new-parens": "off",
        "newline-after-var": "off",
        "newline-before-return": "error",
        "newline-per-chained-call": "off",
        "no-alert": "off",
        "no-array-constructor": "error",
        "no-await-in-loop": "error",
        "no-bitwise": "off",
        "no-buffer-constructor": "off",
        "no-caller": "error",
        "no-case-declarations": "error",
        "no-catch-shadow": "error",
        "no-class-assign": "error",
        "no-compare-neg-zero": "error",
        "no-cond-assign": "error",
        "no-confusing-arrow": "off",
        "no-console": "off",
        "no-const-assign": "error",
        "no-constant-condition": "error",
        "no-continue": "error",
        "no-control-regex": "error",
        "no-debugger": "error",
        "no-delete-var": "error",
        "no-div-regex": "error",
        "no-dupe-args": "error",
        "no-dupe-class-members": "error",
        "no-dupe-keys": "error",
        "no-duplicate-case": "error",
        "no-duplicate-imports": "error",
        "no-else-return": "off",
        "no-empty": "error",
        "no-empty-character-class": "error",
        "no-empty-function": "error",
        "no-empty-pattern": "error",
        "no-eq-null": "error",
        "no-eval": "error",
        "no-ex-assign": "error",
        "no-extend-native": "error",
        "no-extra-bind": "error",
        "no-extra-boolean-cast": "error",
        "no-extra-label": "error",
        "no-extra-parens": "off",
        "no-extra-semi": "error",
        "no-fallthrough": "error",
        "no-floating-decimal": "error",
        "no-func-assign": "error",
        "no-global-assign": "error",
        "no-implicit-coercion": "error",
        "no-implicit-globals": "error",
        "no-implied-eval": "error",
        "no-inline-comments": "off",
        "no-inner-declarations": "error",
        "no-invalid-regexp": "error",
        "no-invalid-this": "error",
        "no-irregular-whitespace": "error",
        "no-iterator": "error",
        "no-label-var": "error",
        "no-labels": "error",
        "no-lone-blocks": "error",
        "no-lonely-if": "error",
        "no-loop-func": "error",
        "no-magic-numbers": [
            "error",
            {
                "ignore": [
                    -1,
                    0,
                    1,
                    1000,
                    60
                ]
            }
        ],
        "no-mixed-operators": "off",
        "no-mixed-requires": "error",
        "no-mixed-spaces-and-tabs": "error",
        "no-multi-assign": "off",
        "no-multi-spaces": [
            "error",
            {
                "ignoreEOLComments": true,
                "exceptions": {
                    "AssignmentExpression": true,
                    "AssignmentPattern": true,
                    "VariableDeclarator": true,
                    "ImportDeclaration": true,
                    "Property": true
                }
            }
        ],
        "no-multi-str": "error",
        "no-multiple-empty-lines": [
            "error",
            {
                "max": 1,
                "maxEOF": 1
            }
        ],
        "no-native-reassign": "error",
        "no-negated-condition": "error",
        "no-negated-in-lhs": "error",
        "no-nested-ternary": "off",
        "no-new": "off",
        "no-new-func": "error",
        "no-new-object": "error",
        "no-new-require": "error",
        "no-new-symbol": "error",
        "no-new-wrappers": "error",
        "no-obj-calls": "error",
        "no-octal": "error",
        "no-octal-escape": "error",
        "no-param-reassign": "error",
        "no-path-concat": "error",
        "no-plusplus": "off",
        "no-process-env": "off",
        "no-process-exit": "off",
        "no-proto": "error",
        "no-prototype-builtins": "off",
        "no-redeclare": "error",
        "no-regex-spaces": "error",
        "no-restricted-globals": "off",
        "no-restricted-imports": "off",
        "no-restricted-modules": "off",
        "no-restricted-properties": "off",
        "no-restricted-syntax": "off",
        "no-return-assign": "error",
        "no-return-await": "error",
        "no-script-url": "error",
        "no-self-assign": "error",
        "no-self-compare": "error",
        "no-sequences": "off",
        "no-shadow": "error",
        "no-shadow-restricted-names": "error",
        "no-spaced-func": "off",
        "no-sparse-arrays": "error",
        "no-sync": "off",
        "no-tabs": "error",
        "no-template-curly-in-string": "error",
        "no-ternary": "off",
        "no-this-before-super": "error",
        "no-throw-literal": "error",
        "no-trailing-spaces": "error",
        "no-undef": "error",
        "no-undef-init": "error",
        "no-undefined": "error",
        "no-underscore-dangle": "error",
        "no-unexpected-multiline": "error",
        "no-unmodified-loop-condition": "error",
        "no-unneeded-ternary": "error",
        "no-unreachable": "error",
        "no-unsafe-finally": "error",
        "no-unsafe-negation": "error",
        "no-unused-expressions": "error",
        "no-unused-labels": "error",
        "no-unused-vars": "off",
        "no-use-before-define": "off",
        "no-useless-call": "error",
        "no-useless-computed-key": "error",
        "no-useless-concat": "error",
        "no-useless-constructor": "error",
        "no-useless-escape": "error",
        "no-useless-rename": "error",
        "no-useless-return": "error",
        "no-var": "error",
        "no-void": "error",
        "no-warning-comments": "error",
        "no-whitespace-before-property": "error",
        "no-with": "error",
        "nonblock-statement-body-position": [
            "error",
            "below"
        ],
        "object-curly-newline": [
            "error",
            {
                "consistent": true
            }
        ],
        "object-curly-spacing": [
            "error",
            "never"
        ],
        "object-property-newline": "off",
        "object-shorthand": [
            "error",
            "always"
        ],
        "one-var": [
            "error",
            "never"
        ],
        "one-var-declaration-per-line": [
            "error",
            "always"
        ],
        "operator-assignment": "off",
        "operator-linebreak": [
            "error",
            "after"
        ],
        "padded-blocks": [
            "error",
            "never"
        ],
        "padding-line-between-statements": "off",
        "prefer-arrow-callback": [
            "error",
            {
                "allowNamedFunctions": true
            }
        ],
        "prefer-const": "off",
        "prefer-destructuring": "off",
        "prefer-numeric-literals": "error",
        "prefer-promise-reject-errors": "error",
        "prefer-reflect": "error",
        "prefer-rest-params": "error",
        "prefer-spread": "error",
        "prefer-template": "error",
        "quote-props": [
            "error",
            "as-needed"
        ],
        "quotes": [
            "error",
            "backtick"
        ],
        "radix": "error",
        "require-await": "error",
        "require-jsdoc": "off",
        "require-yield": "error",
        "rest-spread-spacing": [
            "error",
            "never"
        ],
        "semi": [
            "error",
            "always"
        ],
        "semi-spacing": "error",
        "semi-style": [
            "error",
            "last"
        ],
        "sort-imports": "off",
        "sort-keys": "off",
        "sort-vars": "off",
        "space-before-blocks": [
            "error",
            "always"
        ],
        "space-before-function-paren": [
            "error",
            "always"
        ],
        "space-in-parens": [
            "error",
            "never"
        ],
        "space-infix-ops": "error",
        "space-unary-ops": [
            "error",
            {
                "words": true,
                "nonwords": false,
                "overrides": {
                    "++": false,
                    "--": false
                }
            }
        ],
        "spaced-comment": [
            "error",
            "always"
        ],
        "strict": [
            "error",
            "never"
        ],
        "switch-colon-spacing": [
            "error",
            {
                "after": true,
                "before": true
            }
        ],
        "symbol-description": "error",
        "template-curly-spacing": [
            "error",
            "never"
        ],
        "template-tag-spacing": [
            "error",
            "never"
        ],
        "unicode-bom": "off",
        "use-isnan": "error",
        "valid-jsdoc": "off",
        "valid-typeof": "error",
        "vars-on-top": "error",
        "wrap-iife": "error",
        "wrap-regex": "off",
        "yield-star-spacing": "error",
        "yoda": "error"
    }
};
