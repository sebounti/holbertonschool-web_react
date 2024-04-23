const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js", // Point d'entrée de votre application
  output: {
    filename: "bundle.js", // Le nom du fichier de sortie
    path: path.resolve(__dirname, "dist"), // Le chemin du dossier de sortie
  },
  devtool: "inline-source-map", // Pour les source maps
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"], // Pour charger et injecter des styles CSS
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource", // Charge et émet les fichiers d'images
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Development", // Le titre de votre page HTML
      template: "src/index.html", // Le template HTML
    }),
  ],
  devServer: {
    contentBase: "./dist", // Dossier source pour le serveur de développement
    hot: true, // Active le hot reloading
  },
};
