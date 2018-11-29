
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
      devtools: 'eval-source-map',
      mode: "development",
      entry: path.join(__dirname, '/client/index.js'),
      output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'bundle.js'
      },
      module: {
            rules: [
                  {
                        test: /\.js$/,
                        use: 'babel-loader',
                  },
                  {
                        test: /\.css$/,
                        use: ['style-loader', 'css-loader']
                  }
            ]
      },
      plugins: [
            new HtmlWebpackPlugin({
                  template: 'server/index.html'
            })
      ]
}