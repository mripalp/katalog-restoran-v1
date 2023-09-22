const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  entry: {
    app: path.resolve(__dirname, 'src/scripts/index.js'),
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, 'src/templates/index.html'),
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/public/'),
          to: path.resolve(__dirname, 'dist/'),
        },
      ],
    }),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [path.resolve(__dirname, 'dist')],
    }),
    new FaviconsWebpackPlugin({
      logo: path.resolve(__dirname, 'src/public/images/resto-radar.svg'),
      outputPath: 'assets/icons',
      mode: 'webapp',
      devMode: 'webapp',
      favicons: {
        appName: 'RadarResto',
        background: '#fff',
        theme_color: '#fff',
        icons: {
          coast: false,
          yandex: false,
          windows: false,
          appleStartup: false,
          firefox: false,
          android: false,
          appleIcon: false,
          favicons: true,
        },
      },
    }),
  ],
  optimization: {
    minimizer: [
      new CssMinimizerPlugin({
        minify: CssMinimizerPlugin.cssoMinify,
        parallel: true,
        parallel: 4,
      }),
      new TerserPlugin({}),
      new ImageMinimizerPlugin({
        minimizer: {
          implementation: ImageMinimizerPlugin.imageminMinify,
          options: {
            encodeOptions: {
              mozjpeg: {
                quality: 50,
              },
              webp: {
                quality: 50,
              },
              avif: {
                quality: 50,
              },
              png: {},
              svg: {
                quality: 50,
              },
              gif: {},
              jpg: {
                quality: 50,
              },
            },
            plugins: [
              ['gifsicle', { interlaced: true }],
              ['mozjpeg', { quality: 50 }],
              ['pngquant', { quality: [0.5, 0.5] }],
              ['svgo', { quality: 50 }],
            ],
          },
        },
      }),
    ],
  },
};
