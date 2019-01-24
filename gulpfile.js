const gulp = require("gulp");
const pug = require("gulp-pug");
const sass = require("gulp-sass");
const notify = require("gulp-notify");
const plumber = require("gulp-plumber");
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require("browser-sync");

gulp.task('pug', () => {
  return gulp.src(['./src/pug/**/*.pug', '!' + './src/pug/**/_*.pug'])
    .pipe(plumber({
      errorHandler: notify.onError("Error: <%= error.message %>")
    }))
    .pipe(pug({
      pretty: true
    }))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('sass', () => {
  return gulp.src('./src/sass/**/*.sass')
    .pipe(plumber({
      errorHandler: notify.onError("Error: <%= error.message %>")
    }))
    .pipe(sass({
      outputStyle: 'expanded'
    }))
    .pipe(autoprefixer())
    .pipe(gulp.dest('./dist/css/'))
});

gulp.task('bs-reload', (done) => {
  browserSync.reload();
  done();
});

gulp.task('browser-sync', () => {
  browserSync.init ({
    server: {
      baseDir: './dist/',
    }
  });
  gulp.watch('./dist/**/*.html', gulp.task('bs-reload'));
  gulp.watch('./dist/css/**/*.css', gulp.task('bs-reload'));
  gulp.watch('./dist/js/**/*.js', gulp.task('bs-reload'));
});

gulp.task('watch', () => {
  gulp.watch(['./src/pug/**/*.pug', '!' + './src/pug/**/_*.pug'], gulp.task('pug'));
  gulp.watch('./src/sass/**/*.sass', gulp.task('sass'));
});

gulp.task('default', gulp.parallel('pug', 'sass', 'watch', 'browser-sync', 'bs-reload'));
