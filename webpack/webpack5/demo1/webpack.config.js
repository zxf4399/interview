const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  mode: 'production',
  entry: {
    a: './src/a.js',
    b: './src/b.js',
  },
  output: {
    clean: true,
    // filename: '[name].[chunkhash].bundle.js',
    filename: '[name].[contenthash].bundle.js',
  },
  plugins: [
    new MiniCssExtractPlugin({
      // filename: '[chunkhash].css',
      filename: '[contenthash].css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
}
