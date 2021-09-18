module.exports = {
  root: true,
  extends: '@react-native-community',
  rules: {
    'react-native/no-inline-styles': ['off'],
    semi: ['off'],
    curly: ['off'],
    'prettier/prettier': ['error', {endOfLine: 'auto'}, {usePrettierrc: true}],
  },
}
