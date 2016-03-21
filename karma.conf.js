var webpack = require('webpack');

module.exports = function (config) {
  config.set({

    browsers: [process.env.CI ? 'PhantomJS' : 'Chrome'],

    singleRun: true,

    frameworks: [ 'mocha' ],

    files: [
      './node_modules/phantomjs-polyfill/bind-polyfill.js',
      'tests.webpack.js'
    ],

    preprocessors: {
      'tests.webpack.js': [ 'webpack', 'sourcemap' ]
    },

    reporters: [ 'mocha' ],

    plugins: [
      require('karma-webpack'),
      require('karma-mocha'),
      require('karma-mocha-reporter'),
      require('karma-chrome-launcher'),
      require('karma-phantomjs-launcher'),
      require('karma-sourcemap-loader')
    ],

    webpack: {
      devtool: 'inline-source-map',
      module: {
        loaders: [
          { test: /\.(jpe?g|png|gif|svg)$/, loader: 'url', query: {limit: 10240} },
          { test: /\.jsx?$/, exclude: /node_modules/, loaders: ['babel']},
          { test: /\.json$/, loader: 'json-loader' },
          { test: /\.css$/, loader: 'style!css' }
        ]
      },
      resolve: {
        modulesDirectories: [
          'app',
          'node_modules'
        ],
        extensions: ['', '.json', '.js', '.jsx']
      },
      plugins: [
        new webpack.IgnorePlugin(/\.json$/),
        new webpack.NoErrorsPlugin()
      ]
    },

    webpackServer: {
      noInfo: true
    }

  });
};