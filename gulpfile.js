var gulp = require('gulp');
var imageop = require('gulp-image-optimization');
 
gulp.task('images', function(cb) {
    gulp.src(['src/images/*.png','src/images/*.jpg','src/images/*.gif','src/images/*.jpeg']).pipe(imageop({
        optimizationLevel: 5,
        progressive: true,
        interlaced: true
    })).pipe(gulp.dest('dist/images/')).on('end', cb).on('error', cb);
});

gulp.task('views', function() {
    gulp.src(['src/index.html', 'ng-grid/ng-grid-2.0.8.debug.js'])
        .pipe(gulp.dest('dist'))
});


// Default task
gulp.task('default', ['images', 'views'], function() {
    gulp.run('images');
});