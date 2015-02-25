var gulp = require('gulp');

var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

var babel = require('gulp-babel');
var browserify = require('browserify');
var babelify = require('babelify');

var less = require('gulp-less');
var minify = require('gulp-minify-css');

gulp.task('less', function () {
    return gulp.src('./source/less/**/*.less')
        .pipe(less())
        .pipe(minify({
            keepBreaks: false,
            processImport: true
        }))
        .pipe(gulp.dest('./build/css'));
});

// TODO: This needs to be refactored to be both correct and use babel/browserify
gulp.task('scripts', function () {
    return gulp.src('./source/js/**/*.js')
        .pipe(concat('all.js'))
        .pipe(gulp.dest('./dist'))
        .pipe(rename('all.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./build/js'));
});

gulp.task('watch', function () {
    gulp.watch('./source/js/**/*.js', ['scripts']);
    gulp.watch('./source/less/**/*.js', ['less']);
});

gulp.task('default', ['less', 'scripts', 'watch']);
