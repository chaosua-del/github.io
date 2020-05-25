const gulp = require('gulp');
const {
  src,
  dest,
  watch,
  series
} = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const minify = require('gulp-minify');
const htmlmin = require('gulp-htmlmin');
const tinypng = require('gulp-tinypng-compress');

exports.default = () => (
  gulp.src('src/app.css')
    .pipe(autoprefixer({
      cascade: false
    }))
    .pipe(gulp.dest('dist'))
);

function buildCSS(done) {
  src('src/css/*.css')
    .pipe(cleanCSS({
      compatibility: 'ie8'
    }))
    .pipe(dest('dist/css'));
  done();
}


function buildJS(done) {
  src(['src/js/*.js', '!src/js/*.min.js'])
    .pipe(minify({
      ext: {
        min: '.js'
      }
    }))
    .pipe(dest('dist/js'));
  src('src/js/*.min.js').pipe(dest('dist/js'));
  done();
}

function html(done) {
  src('src/*.html')
    .pipe(htmlmin({
      collapseWhitespace: true
    }))
    .pipe(dest('dist/'));
  done();
}

function php(done) {
  src('src/*.php')
    .pipe(dest('dist/'));
  src('src/phpmailer/**')
    .pipe(dest('dist/phpmailer'));
  done();
}

function fonts(done) {
  src('src/fonts/**/**')
    .pipe(dest('dist/fonts'));
  done();
}

function imagemin(done) {
  src('src/img/**/*.{png,jpg,jpeg}')
    .pipe(tinypng({
      key: 'Kl5n7ZXB3BkL9t3pRbGlSwSrwfdq6NXS',
    }))
    .pipe(dest('dist/img'));


  src('src/img/**/*.svg')
    .pipe(dest('dist/img'));
  done();

}

exports.build = series(buildCSS, buildJS, html, php, fonts);
exports.html = html;