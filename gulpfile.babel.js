import gulp from 'gulp';
import babel from 'gulp-babel';
import nodemon from 'gulp-nodemon';

gulp.task('default', ['serve']);
gulp.task('server', ['serve']);

gulp.task('build', () =>
    gulp.src('app/**/*.js')
        .pipe(babel())
        .pipe(gulp.dest('build'))
);

gulp.task('serve', ['build'], () => {
    nodemon({
        script: 'build/main.js',
        watch: 'app',
        tasks: ['build'],
    });
});
