"use strict";

var gulp = require('gulp'),
	sass = require('gulp-sass'),
	postcss = require('gulp-postcss'),
	autoprefixer = require('autoprefixer'),
	cssnano = require('cssnano'),
	server = require("browser-sync"),
	sourcemaps = require('gulp-sourcemaps'),
	imagemin = require('gulp-imagemin'),
	pngquant = require('imagemin-pngquant'),
	del = require('del'),
	runSequence = require('run-sequence').use(gulp),
	svgstore = require('gulp-svgstore'),
	svgmin = require('gulp-svgmin'),
	cheerio = require('gulp-cheerio'),
	pug = require('gulp-pug'),
	rigger = require('gulp-rigger'),
	plumber = require('gulp-plumber'),
	uglify = require('gulp-uglify'),
	rename = require('gulp-rename');

gulp.task('layout', function () {
	return gulp.src(['src/pages/*.pug'])
		.pipe(plumber())
		.pipe(pug({pretty: true}))
		.pipe(gulp.dest('build'))
		.pipe(server.reload({stream: true}));
});

gulp.task('styles', function () {
	var processors = [
		autoprefixer({
			browsers: ['last 2 versions']
		}), cssnano
	];
	return gulp.src('src/scss/style.scss')
		.pipe(plumber())
		.pipe(sourcemaps.init())
		.pipe(sass())
		.pipe(postcss(processors))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('build/css'))
		.pipe(server.reload({stream: true}));
});

gulp.task('images', function () {
	return gulp.src(['src/images/**/*', '!src/images/svg', "!src/images/svg/*.svg"])
		.pipe(plumber())
		.pipe(imagemin({
			progressive: true,
			svgoPlugins: [{removeViewBox: false}],
			use: [pngquant()]
		}))
		.pipe(gulp.dest('build/images'))
		.pipe(server.reload({stream: true}));
});

gulp.task('scripts', function () {
	return gulp.src(['src/js/index.js'])
		.pipe(plumber())
		.pipe(rigger())
		.pipe(uglify())
		.pipe(gulp.dest('build/js'))
		.pipe(server.reload({stream: true}));
});

gulp.task('svgstore', function () {
	return gulp.src('src/images/svg/*.svg')
		.pipe(plumber())
		.pipe(svgmin())
		.pipe(cheerio({
			run: function ($) {
				$('[fill]').removeAttr('fill');
				$('[style]').removeAttr('style');
			},
			parserOptions: {xmlMode: true}
		}))
		.pipe(rename({prefix: 'icon-'}))
		.pipe(svgstore({inlineSvg: true}))
		.pipe(cheerio({
			run: function ($) {
				$('svg').attr('style', 'display:none');
			},
			parserOptions: {xmlMode: true}
		}))
		.pipe(rename('sprite.svg'))
		.pipe(gulp.dest('build/images'));
});

gulp.task('fonts', function () {
	return gulp.src([
		'src/font/**/*'
	])
		.pipe(plumber())
		.pipe(gulp.dest('build/font'))
		.pipe(server.reload({stream: true}));
});

gulp.task('clean', function () {
	del('build/*');
});

gulp.task('build', function (callback) {
	runSequence('clean', 'layout', 'styles', 'scripts', 'images', 'fonts', 'svgstore', callback)
});

gulp.task('serve', ['layout', 'styles', 'scripts', 'images', 'fonts', 'svgstore'], function () {
	server.init({
		server: 'build',
		notify: false,
		open: true,
		ui: false
	});

	gulp.watch('src/**/*.{scss,sass}', ['styles']);
	gulp.watch(['src/**/pages/*.pug', 'src/**/pages/layout/*.pug'], ['layout']);
	gulp.watch(['src/**/*.js', 'src/**/parts/*.js'], ['scripts']);
	gulp.watch(['src/**/*.+(jpg,png)', 'src/**/**/*.+(jpg,png)'], ['images']);
	gulp.watch('src/**/*.+(woff,woff2)', ['fonts']);
	gulp.watch('src/**/**/*.svg', ['svgstore']);
});
