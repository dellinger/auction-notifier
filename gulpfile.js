var gulp = require('gulp');
var tsd = require('gulp-tsd');

gulp.task('default', function() {
  // place code for your default task here
});

gulp.task('tsd', function (callback) {
    tsd({
        command: 'reinstall',
        config: './tsd.json'
    }, callback);
});
