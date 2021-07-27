const Webpack = require("webpack");
const gulp = require("gulp");
const webpack = require('webpack-stream');
const del = require("del");
const run = require("run-sequence");

gulp.task("clean", done => {
  del(["./dist", "./docs/Poppy"]);
  done();
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
    minimize: minimize,
  },
});

gulp.task("script", () => {
  return gulp
    .src("./src/Poppy.js")
    .pipe(webpack(webpackConfig(false), Webpack))
    .pipe(gulp.dest("./dist"))
    .pipe(gulp.dest("./docs/Poppy"));
});

gulp.task("script-min", () => {
  return gulp
    .src("./src/Poppy.js")
    .pipe(webpack(webpackConfig(true), Webpack))
    .pipe(gulp.dest("./dist"))
    .pipe(gulp.dest("./docs/Poppy"));
});

gulp.task("build", gulp.series("clean", "script", "script-min"), done => done());

gulp.task("default", () => {
  return gulp.watch("./src/Poppy.js", gulp.series("clean", "script"));
});
