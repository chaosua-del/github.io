const gulp = require('gulp');
const {
  series
} = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const tinypng = require('gulp-tinypng-compress');

// exports.autoprefixer = () => (
//   gulp.src('src/css/style.css')
//   .pipe(autoprefixer({
//     cascade: false
//   }))
//   .pipe(gulp.dest('dist'))
// );


function imagemin(done) {
  gulp.src('src/img/**/*.{png,jpg,jpeg}')
    .pipe(tinypng({
      key: 'Kl5n7ZXB3BkL9t3pRbGlSwSrwfdq6NXS'
    }))
    .pipe(gulp.dest('dist/img/'))
  done();
}

function svg(done) {
  gulp.src('src/img/**/*.svg')
    .pipe(gulp.dest('dist/img'))
  done();
}

function html(done) {
  gulp.src('src/*.html')
    .pipe(gulp.dest('dist'))
  done();
}

function css(done) {
  gulp.src('src/css/*.css')
    .pipe(gulp.dest('dist/css'))
  done();
}

function js(done) {
  gulp.src('src/js/*.js')
    .pipe(gulp.dest('dist/js'))
  done();
}

// exports.img = series(imagemin, svg);
exports.move = series(html, css, js)