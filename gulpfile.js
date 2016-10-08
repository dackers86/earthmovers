var gulp = require('gulp');
var imageop = require('gulp-image-optimization');
 
gulp.task('images', function(cb) {
    gulp.src(['src/images/*.png','src/images/*.jpg','src/images/*.gif','src/images/*.jpeg']).pipe(imageop({
        optimizationLevel: 5,
        progressive: true,
        interlaced: true
    })).pipe(gulp.dest('dist/images/')).on('end', cb).on('error', cb);
});

// Default task
gulp.task('default', ['images'], function() {
    gulp.run('images');
});