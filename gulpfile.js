var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
const { task } = require('gulp');

function watch(){
    browserSync.init({
        server: "dist/",
        notify: false
    });

    gulp.watch("dist/").on('change', browserSync.reload);
}
task('live',watch);