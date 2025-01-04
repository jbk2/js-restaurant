const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index.js',
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'Production',
      template: './src/template.html', // Use src/template.html as template
      filename: 'index.html', // Output file name in dist/
    }),
  ],

  module: {
    rules: [
			{
        test: /\.css$/i,
				use: ['style-loader','css-loader'],
			},
			{
        test: /\.html$/i,
				loader: "html-loader",
			},
			{
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif|webp)$/i,
				type: 'asset',
			}
		],
	},

  output: {
    path: path.resolve(__dirname, 'dist'),
  },
};