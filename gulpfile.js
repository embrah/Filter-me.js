var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass',function(){
	return gulp.src('src/assets/styles/sass/main.sass')
	.pipe(sass())
	.pipe(gulp.dest('src/assets/styles/css'))
});

