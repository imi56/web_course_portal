const webpack = require("webpack");
const path = require("path");
const fs = require("fs");
const dotenv = require("dotenv");

let envKeys = {},
  fileEnv = {};
module.exports = (env = {}) => {
  if (env && env.ENVIRONMENT) {
    // Get the root path
    const currentPath = path.join(__dirname);

    // Create the fallback path (the production .env)
    const basePath = currentPath + "/.env";
    const envPath = basePath + "." + env.ENVIRONMENT;
    const finalPath = fs.existsSync(envPath) ? envPath : basePath;

    // Set the path parameter in the dotenv config
    fileEnv = dotenv.config({ path: finalPath }).parsed;

    // reduce it to a nice object, the same as before (but with the variables from the file)
    envKeys = Object.keys(fileEnv).reduce((prev, next) => {
      prev[`process.env.${next}`] = JSON.stringify(fileEnv[next]);
      return prev;
    }, {});
  } else {
    envKeys = {
      "process.env.REACT_APP_API_URL": JSON.stringify(
        process.env.REACT_APP_API_URL
      ),
      "process.env.REACT_APP_PORT": JSON.stringify(process.env.REACT_APP_PORT),
      "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
      "process.env.NODE_PATH": JSON.stringify(process.env.NODE_PATH),
    };
  }

  return {
    devtool: "#inline-source-map",
    entry: "./src/index.js",
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ["babel-loader"],
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: ["file-loader"],
        },
        {
          test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          use: "url-loader?limit=10000",
        },
        {
          test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/,
          use: "file-loader",
        },
      ],
    },
    resolve: {
      extensions: ["*", ".js", ".jsx"],
      alias: {
        src: path.resolve(__dirname, "src/"),
        routes: path.resolve(__dirname, "src/routes/"),
        assets: path.resolve(__dirname, "src/assets/"),
        pages: path.resolve(__dirname, "src/views/pages/"),
        components: path.resolve(__dirname, "src/components/"),
        helpers: path.resolve(__dirname, "src/helpers/"),
        classes: path.resolve(__dirname, "src/classes/"),
        lib: path.resolve(__dirname, "src/lib/"),
      },
    },
    output: {
      path: __dirname + "/dist",
      publicPath: "/",
      filename: "bundle.js",
    },
    plugins: [
      new webpack.DefinePlugin(envKeys),
      new webpack.HotModuleReplacementPlugin(),
    ],
    devServer: {
      contentBase: "./dist",
      historyApiFallback: true,
      hot: true,
    },
  };
};
