import path from 'path';

export default {
  mode: process.env.NODE_ENV,
  devtool: 'source-map',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist/js'),
    filename: 'app.js',
  },
  target: 'web',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
          },
        },
      },
    ],
  },
  resolve: {
    alias: {
      'react/jsx-runtime$': path.resolve(__dirname, 'libs/react/jsx-runtime'),
      'react/jsx-dev-runtime$': path.resolve(
        __dirname,
        'libs/react/jsx-dev-runtime'
      ),
    },
  },
};
