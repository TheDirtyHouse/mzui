var gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('web', function() {
  var ret = browserSync.init({
    browser: ["google chrome canary"],
    server: {
      baseDir: "./dist",
      directory: true
    }
  });

});



