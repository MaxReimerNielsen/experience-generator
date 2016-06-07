const webpack = require('webpack');
const path = require('path');
const buildPath = path.resolve(__dirname, 'build');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TransferWebpackPlugin = require('transfer-webpack-plugin');

const config = {
  // Entry point to the project
  entry: [
    path.join(__dirname, '/src/app/app.js'),
  ],
  // Webpack config options on how to obtain modules
  resolve: {
    // When requiring, you don't need to add these extensions
    extensions: ['', '.js', '.md', '.txt'],
    alias: {
      // material-ui requires will be searched in src folder, not in node_modules
      'material-ui': path.resolve(__dirname, '../src'),
    },
  },
  devtool: 'source-map',
  // Configuration for server
  devServer: {
    contentBase: 'build',
  },
  // Output file config
  output: {
    path: buildPath, // Path of output file
    filename: 'app.js', // Name of output file
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
      output: {
        comments: false,
      },
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"',
        RESOURCE_PATH_PREFIX: '"/api/exg"',
      },
    }),
    new HtmlWebpackPlugin({
      inject: false,
      template: path.join(__dirname, '/src/www/index.html'),
    }),
    // Allows error warninggs but does not stop compiling. Will remove when eslint is added
    new webpack.NoErrorsPlugin(),
    // Transfer Files
    new TransferWebpackPlugin([
      {from: 'www/css', to: 'css'},
      {from: 'www/images', to: 'images'},
    ], path.resolve(__dirname, 'src')),
  ],
  externals: {
    fs: 'fs', // To remove once https://github.com/benjamn/recast/pull/238 is released
  },
  module: {
    // Allow loading of non-es5 js files.
    loaders: [
      {
        test: /\.png$/, loader: 'url-loader',
      },
      {
        test: /\.gif$/, loader: 'url-loader',
      },
      {
        test: /\.js$/,
        loaders: [
          'react-hot',
          'babel-loader',
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.jsx$/,
        loaders: [
          'react-hot', 
          'babel?presets[]=es2015,presets[]=react,presets[]=stage-1,plugins[]=transform-decorators-legacy,plugins[]=transform-object-rest-spread'
        ],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
      },
      {
        test: /\.scss$/,
        loaders: [
          'style',
          'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
          'resolve-url',
          'sass',
        ],
      },
    ],
  },
  eslint: {
    configFile: '../.eslintrc',
  },
};

module.exports = config;
