var gulp = require('gulp'),
    gutil= require('gulp-util'),
    coffee=require('gulp-coffee'),
    browserify=require('gulp-browserify'),
    concat = require('gulp-concat');
var coffeesource=['component/coffee/tagline.coffee'];
var jssrc=[
      'component/scripts/rclick.js',
      'component/scripts/pixgrid.js',
      'component/scripts/tagline.js',
      'component/scripts/template.js'
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
        .pipe(gulp.dest('builds/development/js'))
    });
