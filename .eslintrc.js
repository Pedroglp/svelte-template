module.exports = {
  extends: "airbnb-base",
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module'
  },
  env: {
    es6: true,
    browser: true
  },
  plugins: [
    'svelte3'
  ],
  overrides: [
    {
      files: ['**/*.svelte'],
      processor: 'svelte3/svelte3'
    }
  ],
  rules: {
    // ...
    "import/prefer-default-export": 0,
    "import/no-mutable-exports": 0,
  },
  settings: {
    "svelte3/ignore-styles": (style) => {
      if(style.type !== 'text/css') {
        return true
      }
      return false;
    },
  }
};