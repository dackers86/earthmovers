var gulp = require('gulp');
var imageop = require('gulp-image-optimization');
 
gulp.task('images', function(cb) {
    gulp.src(['public/*.png','public/*.jpg','public/*.gif','public/*.jpeg']).pipe(imageop({
        optimizationLevel: 5,
        progressive: true,
        interlaced: true
    })).pipe(gulp.dest('public/images')).on('end', cb).on('error', cb);
});

// Default task
gulp.task('default', ['images'], function() {
    gulp.run('images');
});