const path = require('path');
// import 'scss/modules.container.scss';
const webpack = require('webpack');

module.exports = {
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    path.resolve(__dirname, 'js/index.js'),
  ],

  output: {
    filename: 'bundle.js',
    path: __dirname,
    publicPath: '/',
  },

  devtool: 'inline-source-map',

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [
          'react-hot-loader/webpack',
          'babel-loader',
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.(css|less)$/,
        // loader: styleExtractor.extract("style-loader", "css-loader!less-loader"),
        use: ["style-loader", "css-loader"]
      }
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ],

  devServer: {
    contentBase: __dirname,
    host: '0.0.0.0',
    port: 3000,
    historyApiFallback: true,
    hot: true,
  },
};
