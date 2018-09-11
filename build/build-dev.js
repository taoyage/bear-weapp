const gulp = require('gulp');
const sass = require('gulp-sass');
const cssmin = require('gulp-clean-css');
const rename = require('gulp-rename');
const watch = require('gulp-watch');

gulp.task('compile-css', () => {
	return gulp.src(['../src/**/*.scss'])
		.pipe(sass())
		.pipe(cssmin())
		.pipe(rename(path => {
			path.extname = '.wxss';
		}))
		.pipe(gulp.dest('../examples/dist/'))
});

gulp.task('compile-js', () => {
	return gulp.src(['../src/**/*.js'])
		.pipe(gulp.dest('../examples/dist/'))
});

gulp.task('compile-json', () => {
	return gulp.src(['../src/**/*.json'])
		.pipe(gulp.dest('../examples/dist/'))
});

gulp.task('compile-wxml', () => {
	return gulp.src(['../src/**/*.wxml'])
		.pipe(gulp.dest('../examples/dist/'))
})

gulp.task('auto', () => {
  gulp.watch('../src/**/*.less', ['compile-css']);
  gulp.watch('../src/**/*.js', ['compile-js']);
  gulp.watch('../src/**/*.json', ['compile-json']);
  gulp.watch('../src/**/*.wxml', ['compile-wxml']);
});

gulp.task('default', ['compile-css', 'compile-js', 'compile-json', 'compile-wxml', 'auto']);
