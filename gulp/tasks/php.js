const gulp = require("gulp");

module.exports = function php() {
  return gulp
    .src("src/php/**/*")
    .pipe(gulp.dest(["build/php"]));
};
