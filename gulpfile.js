var gulp = require('gulp');
var jshint = require('gulp-jshint');

// Lint Task
gulp.task('lint', function() {
    return gulp.src(['./routes/*.js','./public/javascripts/**/*.js'])
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch(['./routes/*.js','./public/javascripts/**/*.js'], ['lint']);
    gulp.watch('scss/*.scss', ['sass']);
});


gulp.task('default', ['lint','watch']);
gulp.task('build', ['lint']);
 
