const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index.js',
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'Production',
      template: './src/template.html', // Use your src/index.html as a template
      filename: 'index.html', // Output file in the dist folder
    }),
  ],

  module: {
    rules: [
      // Add your rules for custom modules here
			// Learn more about loaders from https://webpack.js.org/loaders/
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