var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('styles', () =>
      gulp.src('styles.css')
        .pipe(autoprefixer({
            browsers: ['last 99 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('build'))
);


/* Use ¡npx gulp styles' to run the task in the command line
Better change app.js to > gulpfile.js*/