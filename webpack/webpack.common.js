const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');

const configPath = '../config';
const paths = require(`${configPath}/paths`);
const getClientEnvironment = require(`${configPath}/env`);

const { appIndexJs, esLintFile, appBuild, publicUrlOrPath } = paths;

// We will provide `paths.publicUrlOrPath` to our app
// as %PUBLIC_URL% in `index.html` and `process.env.PUBLIC_URL` in JavaScript.
// Omit trailing slash as %PUBLIC_URL%/xyz looks better than %PUBLIC_URL%xyz.
// Get environment variables to inject into our app.
const env = getClientEnvironment(publicUrlOrPath);

const cssRegex = /\.css$/;
const sassRegex = /\.(scss|sass)$/;

module.exports = {
  entry: appIndexJs,
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(s[ac]ss|js|ts)/,
        enforce: 'pre',
        loader: 'import-glob',
      },
      {
        enforce: 'pre',
        test: /\.(js|jsx|tsx)$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          configFile: esLintFile,
        },
      },
      {
        test: /\.(js|jsx)$/,
        exclude: [/node_modules/],
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.svg$/,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack'],
      },
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
      {
        test: cssRegex,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: sassRegex,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'static/fonts/[hash][ext][query]',
        },
      },
      {
        test: /\.(png|jpg|jpeg)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'static/images/[hash][ext][query]',
        },
      },
      {
        test: /\.(gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'static/gifs/[hash][ext][query]',
        },
      },
    ],
  },
  resolve: {
    alias: {
      '@/static': path.resolve(__dirname, '../public/static'),
      '@': path.resolve(__dirname, '../src'),
    },
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins: [
    // Makes some environment variables available in index.html.
    // The public URL is available as %PUBLIC_URL% in index.html, e.g.:
    // <link rel="icon" href="%PUBLIC_URL%/favicon.ico">
    // It will be an empty string unless you specify "homepage"
    // in `package.json`, in which case it will be the pathname of that URL.
    new InterpolateHtmlPlugin(HtmlWebpackPlugin, env.raw),
    // Makes some environment variables available to the JS code, for example:
    // if (process.env.NODE_ENV === 'production') { ... }. See `./env.js`.
    // It is absolutely essential that NODE_ENV is set to production
    // during a production build.
    // Otherwise React will be compiled in the very slow development mode.
    new webpack.DefinePlugin(env.stringified),
    new WebpackManifestPlugin(),
    new LodashModuleReplacementPlugin(),
    // new webpack.optimize.UglifyJsPlugin({}),
  ],
  output: {
    // The build folder.
    path: appBuild,
    // this defaults to 'window', but by setting it to 'this' then
    // module chunks which are built will work in web workers as well.
    globalObject: 'this',
  },
};
