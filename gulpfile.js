var gulp = require('gulp');
var jshint = require('gulp-jshint');
var gls = require('gulp-live-server');

// Hint Task
gulp.task('hint', function() {
    return gulp.src(['./routes/*.js','./api/**/*.js','./public/javascripts/**/*.js'])
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch(['./routes/*.js','./public/javascripts/**/*.js'], ['lint']);
    gulp.watch('scss/*.scss', ['sass']);
});


gulp.task('serve', function() {
    //1. serve with default settings
    var server = gls.new('bin/www'); //equals to gls.static('public', 3000);
    server.start();

    //use gulp.watch to trigger server actions(notify, start or stop)
    gulp.watch(['styles/**/*.css', 'views/**/*.jade'], function () {
        server.notify.apply(server, arguments);
    });
});


gulp.task('default', ['lint','watch']);
gulp.task('build', ['lint']);
gulp.task('server',['serve']);
 
