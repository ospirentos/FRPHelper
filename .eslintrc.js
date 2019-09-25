module.exports = {
  root: true,
  extends: ['airbnb', 'prettier', 'prettier/react'],
  rules: {
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx'],
      },
    ],
    'prettier/prettier': [
      'error',
      {
        trailingComma: 'es5',
        singleQuote: true,
        printWidth: 100,
      },
    ],
    "react/state-in-constructor": [0, 'never']
  },
  plugins: ['prettier'],
  "parser": "babel-eslint",
  "globals": {
    "fetch": "writable",
}
};
