var gulp = require('gulp'),
    gutil= require('gulp-util'),
    coffee=require('gulp-coffee'),
    browserify=require('gulp-browserify'),
    compass=require('gulp-compass'),
    concat = require('gulp-concat');
var coffeesource=['component/coffee/tagline.coffee'];
var jssrc=[
      'component/scripts/rclick.js',
      'component/scripts/pixgrid.js',
      'component/scripts/tagline.js',
      'component/scripts/template.js'
];
var sasssrc=[
      'component/sass/style.css'
];
    gulp.task('coffee',function(){
      gulp.src(coffeesource)
          .pipe(coffee({bare:true})
          .on('error',gutil.log))
          .pipe(gulp.dest('component/scripts'))

    });

    gulp.task('js',function() {
      gulp.src(jssrc)
        .pipe(concat('script.js'))
        .pipe(browserify())
        .pipe(gulp.dest('builds/development/js'))
    });

    gulp.task('compass',function() {
      gulp.src(sasssrc)
      .pipe(compass({
        sass:'component/sass',
        image:'builds/development/images',
        style:'expanded'
      })
        .on('error',gutil.log))
        .pipe(gulp.dest('builds/development/css'))
    });
