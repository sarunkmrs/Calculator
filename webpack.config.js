const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const ENV = process.env.APP_ENV;
const isTest = ENV === 'test';
const isProd = ENV === 'prod';

function setDevTool() {
  if (isTest) {
    return 'inline-source-map';
  } else if ('source-map') {
    return 'source-map';
  } else {
    return 'eval-source-map';
  }
}

const config = {
  entry: {
    index: [
      __dirname + '/src/app/index.js',
      __dirname + '/src/style/style.scss'
    ]
  },
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js',
    publicPath: '/',
    pathinfo: true
  },
  devtool: setDevTool(),
  module: {
    rules: [
      {
        test: /\.(css|scss|sass)$/,
        use: [
          {
            loader: "style-loader" // create style nodes from JS strings
          },
          {
            loader: "css-loader", // translate css into commonJS
          },
          {
            loader: "sass-loader" // compiles sass to CSS
          }
        ]
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: __dirname + '/src/app/index.html',
      inject: 'body'
    }),
  ],
  devServer: {
    contentBase: './src/app',
    port: 7700
  }
};

if (isProd) {
  config.plugins.push(
    new UglifyJsPlugin(),
    new CopyWebpackPlugin([{
      from: __dirname + '/src/app'
    }])
  );
};

module.exports = config;
