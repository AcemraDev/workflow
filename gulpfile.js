/**
 * Web 工作流
*/

// 查询需要使用的模块
const gulp = require('gulp');
const less = require('gulp-less');
const concat = require('gulp-concat');
const minifyCss = require('gulp-minify-css');
const htmlmin = require('gulp-htmlmin');
const imagemin = require('gulp-imagemin');
const uglifyJs = require('gulp-uglify');
const browserSync = require('browser-sync');


// 创建任务匹配使用的路径
let srcPaths = {
  scripts: ['src/scripts/*.js'],
  images: ['src/images/*.*'],
  styles: ['src/styles/*.less'],
  html: ['src/*.html']
};

let distPaths = {
  scripts: 'dist/scripts',
  images: 'dist/images',
  styles: 'dist/styles/',
  html: 'dist/'
};

// 创建less任务
gulp.task('less',() => {
    return gulp.src(srcPaths.styles)
               .pipe(less())
               .pipe(concat('app.css'))
               .pipe(minifyCss())
               .pipe(gulp.dest(distPaths.styles))
               .pipe(browserSync.stream());
}).task('image',() => {
    return gulp.src(srcPaths.images)
               .pipe(imagemin())
               .pipe(gulp.dest(distPaths.images))
               .pipe(browserSync.stream());
}).task('script',() => {
    return gulp.src(srcPaths.scripts)
               .pipe(concat('app.js'))
               .pipe(uglifyJs())
               .pipe(gulp.dest(distPaths.scripts))
               .pipe(browserSync.stream());
}).task('html',() => {
    return gulp.src(srcPaths.html)
               .pipe(htmlmin({collapseWhitespace: true}))
               .pipe(gulp.dest(distPaths.html))
               .pipe(browserSync.stream());
});

// gulp默认执行任务
gulp.task('default',['less','image','script','html'],() => {
    browserSync.init({
        server: distPaths.html
    });
    // 监控一下源文件
    gulp.watch(srcPaths.scripts, ['script']);
    gulp.watch(srcPaths.styles, ['less']);
    gulp.watch(srcPaths.images, ['image']);
    gulp.watch(srcPaths.html, ['html']);
});