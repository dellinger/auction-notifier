var gulp = require('gulp');
var jshint = require('gulp-jshint');
var gls = require('gulp-live-server');
var ngConstant = require('gulp-ng-constant');
var env = process.env.NODE_ENV;

gulp.task('config', function () {
  var constants = {environment : {
      rest_api_uri: "http:localhost:3000/api"
  }};
  if (env === 'production') {
    constants = {environment : {
      rest_api_uri: "https://infinite-sierra-7821.herokuapp.com/api"
    }};
  }
  gulp.src('./config/config.json')
    .pipe(ngConstant({
      name: 'ahNotifier.config',
      environment: env,
      deps: [],
      constants: constants
    }))
    // Writes config.js to dist/ folder
    .pipe(gulp.dest('./public/javascripts'));
});

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
    gulp.watch(['styles/**/*.css', 'views/**/*.jade','public/**/*.js'], function () {
        server.notify.apply(server, arguments);
    });
});


gulp.task('default', ['hint','config','watch']);
gulp.task('build', ['hint','config']);
gulp.task('server',['hint','config','serve']);
 
