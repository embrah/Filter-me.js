var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require ('browser-sync').create();

gulp.task('sass',function(){
	return gulp.src('src/assets/styles/sass/main.sass')
	.pipe(sass())
	.pipe(gulp.dest('src/assets/styles/css'))
	.pipe(browserSync.reload({
		stream: true
	}))
});

gulp.task('watch',['browser-sync','sass'],function(){
	gulp.watch('src/assets/styles/sass/**/*.sass',['sass']);
	gulp.watch('src/*.html',browserSync.reload);
	gulp.watch('src/assets/scripts/*.js',browserSync.reload);
});

gulp.task('browser-sync',function(){
	browserSync.init({
		server: {
			baseDir: 'src'
		},
	});
});