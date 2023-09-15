/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable global-require */
import { fileURLToPath } from "url";
import path, { dirname } from "path";
import webpack from "webpack";
import CopyPlugin from "copy-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import { TsconfigPathsPlugin } from "tsconfig-paths-webpack-plugin";

const webpackConfig = (_) => ({
  entry: "./src/index.tsx",
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
    modules: [
      path.resolve(dirname(fileURLToPath(import.meta.url)), "src"),
      "node_modules",
    ],
    plugins: [new TsconfigPathsPlugin()],
  },
  output: {
    filename: "build.js",
    path: path.join(dirname(fileURLToPath(import.meta.url)), "build"),
    clean: true,
    publicPath: "/",
  },
  devServer: {
    port: 3000,
    host: "0.0.0.0",
    allowedHosts: "all",
    historyApiFallback: true,
    watchFiles: {
      paths: "src/**/*",
      options: {
        poll: true,
      },
    },
    static: path.join(dirname(fileURLToPath(import.meta.url)), "public"),
    client: {
      webSocketURL: "ws://0.0.0.0/ws",
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: new URL("./src", import.meta.url).pathname,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                [
                  "@babel/preset-env",
                  {
                    targets: "defaults",
                  },
                ],
                "@babel/preset-react",
              ],
            },
          },
        ],
      },
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        options: {
          transpileOnly: true,
        },
        exclude: /dist/,
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 25000,
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new ForkTsCheckerWebpackPlugin({}),
    new webpack.ProvidePlugin({
      React: "react",
    }),
    new CopyPlugin({
      patterns: [
        { from: "*.png", to: "", context: "public" },
        { from: "*.json", to: "", context: "public" }
      ]
    })
  ],
});

export default webpackConfig;
