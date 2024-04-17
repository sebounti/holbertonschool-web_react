const path = require("path");

module.exports = {
  mode: "production",
  entry: "./js/dashboard_main.js",
  performance: {
    maxAssetSize: 1000000,
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public"),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "assets/",
            },
          },
          {
            loader: "image-webpack-loader",
            options: {
              bypassOnDebug: true, // webpack@1.x
            },
          },
        ],
      },
      {
        // Règle séparée pour le transpilage JavaScript
        test: /\.js$/, // Appliquer le loader aux fichiers .js
        exclude: /node_modules/, // Exclure les fichiers dans node_modules
        use: {
          loader: "babel-loader", // Utiliser babel-loader
          options: {
            presets: ["@babel/preset-env"], // Utiliser le preset-env
          },
        },
      },
    ],
  },
};
