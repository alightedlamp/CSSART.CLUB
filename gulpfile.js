const gulp = require('gulp');
const gutil = require('gulp-util');

const config = {
  source: 'src/paintings/scss/*.scss',
  build: 'src/paintings/css/'
};

const handleError = function handleError(err) {
  gutil.log(err);
  this.emit('end');
};

gulp.task('paintings-css', () => {
  const sass = require('gulp-sass');
  const cleanCSS = require('gulp-clean-css');
  const postcss = require('gulp-postcss');
  const sourcemaps = require('gulp-sourcemaps');
  const out = config.build;
  return gulp
    .src(config.source)
    .pipe(sourcemaps.init())
    .pipe(sass())
    .on('error', handleError)
    .pipe(postcss([require('precss'), require('autoprefixer')]))
    .pipe(config.production ? cleanCSS({ compatibility: 'ie8' }) : gutil.noop())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(out));
});

gulp.task('app-css', () => {
  const sass = require('gulp-sass');
  const cleanCSS = require('gulp-clean-css');
  const postcss = require('gulp-postcss');
  const sourcemaps = require('gulp-sourcemaps');
  const out = config.build;
  return gulp
    .src('src/styles/scss/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass())
    .on('error', handleError)
    .pipe(postcss([require('precss'), require('autoprefixer')]))
    .pipe(config.production ? cleanCSS({ compatibility: 'ie8' }) : gutil.noop())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('src/styles/css'));
});
