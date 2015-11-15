var gulp = require('gulp');
var tsd = require('gulp-tsd');
var ts = require('gulp-typescript');
var tsProject = ts.createProject('tsconfig.json');
gulp.task('default', function() {
  // place code for your default task here
});

gulp.task('tsd', function (callback) {
    tsd({
        command: 'reinstall',
        config: './tsd.json'
    }, callback);
});

gulp.task('scripts', function() {
    var tsResult = tsProject.src() // instead of gulp.src(...)
        .pipe(ts(tsProject));

    return tsResult.js.pipe(gulp.dest('dist'));
});