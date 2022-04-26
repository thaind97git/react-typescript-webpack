/* eslint-disable indent */
process.env.NODE_ENV = 'production';
const path = require('path');
const { merge } = require('webpack-merge');
const webpack = require('webpack');
const common = require('./webpack.common.js');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const ImageminWebpack = require('image-minimizer-webpack-plugin');
const paths = require('../config/paths');
const { appBuild, appPublic, appHtml } = paths;

const imageTypeIgnoreCopy = ['.png', '.jpg', '.jpeg', '.gif', '.svg'];
// Source maps are resource heavy and can cause out of memory issue for large source files.

module.exports = merge(common, {
  mode: 'production',
  devtool: false,
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(appPublic, 'favicon.ico'),
          to: path.resolve(appBuild, 'favicon.ico'),
          toType: 'file',
        },
        {
          from: path.resolve(appPublic, 'static'),
          to: path.resolve(appBuild, 'static'),
          globOptions: {
            ignore: [
              ...imageTypeIgnoreCopy.map(ext => `**/images/*/*${ext}`),
              '**/fonts/**',
            ],
          },
          toType: 'dir',
        },
      ],
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: 'static/css/[name].[contenthash:8].css',
      chunkFilename: 'static/css/[name].[contenthash:8].chunk.css',
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: appHtml,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
    }),
    new webpack.ProgressPlugin({
      modulesCount: 5000,
    }),
  ],
  output: {
    publicPath: '',
    pathinfo: true,
    // There will be one main bundle, and one file per asynchronous chunk.
    // In development, it does not produce real files.
    filename: 'static/js/[name].[chunkhash].js',
    // There are also additional JS chunk files if you use code splitting.
    chunkFilename: 'static/js/[name].[chunkhash].chunk.js',
    clean: true,
  },
  optimization: {
    nodeEnv: 'production',
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    },
    minimize: true,
    minimizer: [
      // This is only used in production mode
      new TerserPlugin({
        terserOptions: {
          parse: {
            // We want terser to parse ecma 8 code. However, we don't want it
            // to apply any minification steps that turns valid ecma 5 code
            // into invalid ecma 5 code. This is why the 'compress' and 'output'
            // sections only apply transformations that are ecma 5 safe
            // https://github.com/facebook/create-react-app/pull/4234
            ecma: 8,
          },
          compress: {
            ecma: 5,
            warnings: false,
            // Disabled because of an issue with Uglify breaking seemingly valid code:
            // https://github.com/facebook/create-react-app/issues/2376
            // Pending further investigation:
            // https://github.com/mishoo/UglifyJS2/issues/2011
            comparisons: false,
            // Disabled because of an issue with Terser breaking valid code:
            // https://github.com/facebook/create-react-app/issues/5250
            // Pending further investigation:
            // https://github.com/terser-js/terser/issues/120
            inline: 2,
          },
          mangle: {
            safari10: true,
          },
          // Added for profiling in devtools
          // keep_classnames: isEnvProductionProfile,
          // keep_fnames: isEnvProductionProfile,
          output: {
            ecma: 5,
            comments: false,
            // Turned on because emoji and regex is not minified properly using default
            // https://github.com/facebook/create-react-app/issues/2488
            // eslint-disable-next-line camelcase
            ascii_only: true,
          },
        },
      }),
      // This is only used in production mode
      new CssMinimizerPlugin(),
      new ImageminWebpack({
        severityError: 'warning', // Ignore errors on corrupted images
        minimizerOptions: {
          plugins: ['gifsicle'],
        },
        // Disable `loader`
        loader: false,
      }),
    ],
  },
  performance: {
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
});
