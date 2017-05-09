# Etiqa: ESLint Configuration 

Etiqa JavaScript ES6 Styles configuration for [ESLint](http://eslint.org/).

## Usage 

```bash
$ npm install eslint-config-etiqa --save-dev
```

ESLint configuration

```json
{
    "extends": "etiqa"
}
```

#### Webpack 1.x with eslint-loader

eslint-loader will search configuration in

- `.eslintrc` file at the root of the project
- `eslintConfig` property inside package.json

Example: package.json

```json
{
    "eslintConfig": {
        "extends": "etiqa"
    }
}
```

#### Webpack 2.x with eslint-loader

In your webpack configuration

```javascript
module.exports = {
  // ...
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "eslint-loader",
        options: {
          extends: "etiqa"
        }
      },
    ],
  },
  // ...
}
```
