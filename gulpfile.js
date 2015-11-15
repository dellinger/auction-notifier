var gulp = require('gulp');
var tsd = require('gulp-tsd');
var ts = require('gulp-typescript');
var tsProject = ts.createProject('tsconfig.json');

gulp.task('build', ['tsd', 'scripts', 'copy'], function(cb) {
});

gulp.task('tsd', function (callback) {
    tsd({
        command: 'reinstall',
        config: './tsd.json'
    }, callback);
});

gulp.task('scripts', function() {
    var tsResult = tsProject.src()
        .pipe(ts(tsProject));

    return tsResult.js.pipe(gulp.dest('dist'));
});

gulp.task('copy', function () {
    return gulp
        .src('config/*.json')
        .pipe(gulp.dest('dist/config'))
});