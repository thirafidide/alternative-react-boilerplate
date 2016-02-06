import path from 'path';
import webpack from 'webpack';
import merge from 'webpack-merge';

import es6promise from 'es6-promise';
es6promise.polyfill();

const TARGET = process.env.npm_lifecycle_event;
process.env.BABEL_ENV = TARGET;

const PATHS = {
    app: path.join(__dirname, 'app'),
    build: path.join(__dirname, 'build')
};

const common = {
    entry: PATHS.app,
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
    }
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

if (TARGET === 'start' || !TARGET) {
    module.exports = merge(common, devConfiguration);
}

if (TARGET === 'build') {
    module.exports = merge(common, {});
}