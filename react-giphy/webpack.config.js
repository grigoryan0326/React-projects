module.exports = {
  // другие настройки webpack
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              additionalData: `@import "./src/styles/variables.scss";`,
            },
          },
        ],
      },
    ],
  },
};
