/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-console */
const gulp = require('gulp');
const eslint = require('gulp-eslint');
// const run = require('gulp-run');

const files = [
  'configuration/*.js',
  'Gulpfile.js',
  'index.js',
  'lib/*.js',
];

gulp.task('lint', () => gulp.src(files)
  .pipe(eslint({}))
  .pipe(eslint.format())
  .pipe(eslint.failOnError()));
