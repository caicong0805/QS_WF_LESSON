var gulp =require('gulp');
// 代码前后端模块化统一的 构建工具
var browserify = require('browserify');
var babelify = require('babelify');
// gulp 任务管理器 进驻流程 在跟具体任务间 中间有一个插件 适配
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var uglify = require('gulp-uglify');
gulp.task('build',function(){
    return browserify({
        entries:'./src/js/main.js',
        debug:true
    })
    .transform("babelify",{
        presets:["env"]
    })
    .bundle()
    // 可以被gulp理解的源码格式
    // browserify -> gulp 转码的过程
    .pipe(source('main.js'))
    .pipe(buffer())
    .pipe(uglify())//压缩
    .pipe(gulp.dest('./dist/js'))
});

gulp.task('watch',['build'],function(){
    gulp.watch('./src/js/*.js',['build']);
});

gulp.task('default',['watch']);