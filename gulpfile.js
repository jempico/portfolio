var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('styles', function() {
    return gulp
        .src('styles.css')
        .pipe(autoprefixer())
        .pipe(gulp.dest('build'));
});

/* Use ¡npx gulp styles' to run the task in the command line
Better change app.js to > gulpfile.js */