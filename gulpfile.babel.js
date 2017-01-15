import gulp from 'gulp';
import babel from 'gulp-babel';
import nodemon from 'gulp-nodemon';

gulp.task('build', () =>
    gulp.src('app/**/*.js')
        .pipe(babel())
        .pipe(gulp.dest('dist'))
);

gulp.task('serve', ['build'], () => {
    nodemon({
        script: 'dist/main.js',
        watch: 'app',
        tasks: ['build'],
    });
});
