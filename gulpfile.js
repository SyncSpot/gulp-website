var gulp = require('gulp');
var uglify = require('gulp-uglify');

// Styles
gulp.task('styles', function(){
  console.log('Starting styles task');
});

// Scripts
gulp.task('scripts', function(){
  console.log('Starting scripts tasks');

  return gulp.src('public/scripts/*.js')
             .pipe(uglify())
             .pipe(gulp.dest('public/dist'));
});

// Images
gulp.task('images', function(){
  console.log('Starting images task');
});

gulp.task('default', function(){
  console.log('Starting default task');
});
