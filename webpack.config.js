const path = require('path')
const ROOT_PATH = path.resolve(__dirname)
const BUILDS_PATH = path.resolve(ROOT_PATH + '/builds')
const SRC_PATH = path.resolve(ROOT_PATH, '/src')

module.exports = {
  entry: './src',
  output: {
    path: BUILDS_PATH,
    filename: 'bundle.js'
  },
  module: {
    rulesgit: [{
      test: /\.js/,
      loader: 'babel-loader',
      include: SRC_PATH,
    }],
  }
}