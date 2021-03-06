const path = require('path');

module.exports = {
  entry: {
    lasergame: './src/lasergame/frontend/FrontendLasergame.ts',
    webgl: './src/webgl/WebglEntry.ts',
    tsiege: './src/tsiege/main.ts'
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  output: {
    filename: '[name]-bundle.js',
    path: path.resolve(__dirname, "assets")
  }
};