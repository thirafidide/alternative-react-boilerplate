import path from 'path';
import webpack from 'webpack';
import merge from 'webpack-merge';
import HtmlWebpackPlugin from 'html-webpack-plugin';

import pkg from './package.json';

import es6promise from 'es6-promise';
es6promise.polyfill();

const TARGET = process.env.npm_lifecycle_event;
process.env.BABEL_ENV = TARGET;

const PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'build')
};

const common = {
  entry: {
    app: PATHS.app
  },
  output: {
      path: PATHS.build,
      filename: 'bundle.js'
  },

  resolve: {
      extensions: ['', '.js', '.jsx']
  },
  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        loaders: ['eslint'],
        include: PATHS.app
      }
    ],
    loaders: [
        {
            test: /\.css$/,
            loaders: ['style', 'css'],
            include: PATHS.app
        },
        {
            test: /\.jsx?$/,
            loaders: ['babel?cacheDirectory'],
            include: PATHS.app
        }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'node_modules/html-webpack-template/index.ejs',
      title: 'Kanban app',
      appMountId: 'app',
      inject: false
    })
  ]
};

const devConfiguration = {
  devServer: {
    contentBase: PATHS.build,

    // Enable history API fallback so HTML5 History API based
    // routing works. This is a good default that will come
    // in handy in more complicated setups.
    historyApiFallback: true,
    inline: true,
    progress: true,

    // Display only errors to reduce the amount of output.
    stats: 'errors-only',

    // Parse host and port from env so this is easy to customize.
    host: process.env.HOST,
    port: process.env.PORT
  },
  devtool: 'eval-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};

const prodConfiguration = {
  entry: {
    vendor: Object.keys(pkg.dependencies).filter(function(v) {
      // Exclude alt-utils as it won't work with this setup
      // due to the way the package has been designed
      // (no package.json main).
      return v !== 'alt-utils';
    })
  },
  output: {
    path: PATHS.build,
    filename: '[name].[chunkhash].js',
    chunkFilename: '[chunkhash].js'
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest']
    }),
    new webpack.DefinePlugin({
       'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]
};

if (TARGET === 'start' || !TARGET) {
    module.exports = merge(common, devConfiguration);
}

if (TARGET === 'build') {
    module.exports = merge(common, prodConfiguration);
}