const gulp = require('gulp');
const browserSync = require('browser-sync').create()

gulp.task('serve', function (done) {
  browserSync.init({
    server: {
      baseDir: './',
      index: 'index.html',
    },
  })
  done();
})
gulp.task('bs-reload', function (done) {
  browserSync.reload();
  done();
})
gulp.task('watch', function (done) {
  gulp.watch('./*.html', gulp.task('bs-reload'));
  gulp.watch('./*.css', gulp.task('bs-reload'));
})

gulp.task('default', gulp.series('serve', 'watch'))
