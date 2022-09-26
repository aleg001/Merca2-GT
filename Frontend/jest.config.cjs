module.exports = {
  moduleNameMapper: {
    '\\.css$': '<rootDir>/mocks/styleMocks.js',
    '\\.png$': '<rootDir>/mocks/styleMocks.js',
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$/": "/mocks/styleMocks.js",
    'd3': '<rootDir>/node_modules/d3/dist/d3.min.js',
  },
  testEnvironment: 'jsdom',
  transformIgnorePatterns: [
    "node_modules/(?!(react-native|react-native-vector-icons|@react-native-community/picker)/)"
  ],
}
