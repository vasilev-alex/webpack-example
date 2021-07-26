const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: './src/index.tsx',
  plugins: [
    new webpack.LoaderOptionsPlugin({
      options: {
        external: [
          'react',
          'react-dom',
          'react/jsx-runtime',
        ],
      },
    }),
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader',
            // options: {
            //   transpileOnly: true,
            // },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      core: path.join(__dirname, 'core'),
    },
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'lib'),
    libraryTarget: 'commonjs2'
    // libraryTarget: 'module',
  },
  // experiments: {
  //   outputModule: true
  // },
  mode: 'development'
};
