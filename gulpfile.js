var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('styles', function() {
    return gulp
        .src('styles.css')
        .pipe(autoprefixer())
        .pipe(gulp.dest('build'));
});