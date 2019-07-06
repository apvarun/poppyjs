const Webpack = require("webpack");
const gulp = require("gulp");
const webpack = require("gulp-webpack");
const del = require("del");
const run = require("run-sequence");
const TerserPlugin = require("terser-webpack-plugin");

gulp.task("clean", () => {
  del(["./dist", "./docs/Poppy"]);
});

const webpackConfig = minimize => ({
  mode: "production",
  output: {
    filename: minimize ? "Poppy.min.js" : "Poppy.js",
    libraryTarget: "umd"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: ["@babel/plugin-transform-runtime"]
          }
        }
      }
    ]
  },
  optimization: {
    minimizer: minimize
      ? [
          new TerserPlugin({
            cache: true,
            parallel: true,
            sourceMap: false,
            terserOptions: {
              // https://github.com/webpack-contrib/terser-webpack-plugin#terseroptions
            }
          })
        ]
      : []
  }
});

gulp.task("script", () => {
  gulp
    .src("./src/Poppy.js")
    .pipe(webpack(webpackConfig(false), Webpack))
    .pipe(gulp.dest("./dist"))
    .pipe(webpack(webpackConfig(true), Webpack))
    .pipe(gulp.dest("./dist"))
    .pipe(gulp.dest("./docs/Poppy"));
});

gulp.task("default", ["clean"], () => {
  run("script");
  gulp.watch("./src/Poppy.js", ["script"]);
});
