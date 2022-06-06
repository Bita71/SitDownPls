const gulp = require("gulp");

const serve = require("./gulp/tasks/serve");
const pug2html = require("./gulp/tasks/pug2html");
const styles = require("./gulp/tasks/styles");
const script = require("./gulp/tasks/script");
const scriptModules = require("./gulp/tasks/scriptModules");
const php = require("./gulp/tasks/php");
const fonts = require("./gulp/tasks/fonts");
const imageMinify = require("./gulp/tasks/imageMinify");
const clean = require("./gulp/tasks/clean");
const copyDependencies = require("./gulp/tasks/copyDependencies");
const svgSprite = require("./gulp/tasks/svgSprite");

function setMode(isProduction = false) {
  return (cb) => {
    process.env.NODE_ENV = isProduction ? "prod" : "dev";
    cb();
  };
}

const dev = gulp.parallel(
  pug2html,
  styles,
  script,
  scriptModules,
  php,
  fonts,
  imageMinify,
  svgSprite
);

const build = gulp.series(clean, copyDependencies, dev);

module.exports.start = gulp.series(setMode(), build, serve);
module.exports.build = gulp.series(setMode(true), build);
