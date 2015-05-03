var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-ruby-sass');
var reload      = browserSync.reload;

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

    browserSync.init({
        proxy: "http://localhost:2368/"
    });

    gulp.watch("./assets/css/*.scss", ['sass']);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return sass('./assets/css/main.scss')
        .pipe(gulp.dest("./assets/css"))
        .pipe(reload({stream: true}));
});

gulp.task('default', ['serve']);