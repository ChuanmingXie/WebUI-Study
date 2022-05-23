// gulp 4.0 版本

'use strict'

var gulp = require('gulp');
var environments = require('gulp-environments');
var sass = require('gulp-sass')(require('sass'));
var sourcemaps = require('gulp-sourcemaps');
var minifycss = require('gulp-minify-css');    // css压缩
var rename = require('gulp-rename');			//文件改名
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var mq4HoverShim = require('mq4-hover-shim');
var cssnano = require('gulp-cssnano');
var concat = require('gulp-concat');
var scsslint = require('gulp-scss-lint');

// var port = process.env.SERVER_PORT || 8080;
var development = environments.development;
var production = environments.production;
var bowerpath = process.env.BOWER_PATH || 'src/scss/';



var sassOptions = {
    errLogToConsole: true,
    outputStyle: 'expanded',
    includePaths: bowerpath
};

gulp.task('compile-sass', gulp.series(() => {
    var processors = [
        mq4HoverShim.postprocessorFor({ hoverSelectorPrefix: '.bs-true-hover ' }),
        autoprefixer({
            browsers: [
                'Chrome >= 35',
                'Firefox >= 31', 
                'Edge >= 12',
                'Explorer >= 9',
                'iOS >= 8',
                'Safari >= 8',
                'Android 2.3',
                'Android >= 4',
                'Opera >= 12'
            ]
        })
    ];
    return gulp.src('./src/scss/mdb.free.scss')
		.pipe(concat('app.css'))
        .pipe(development(sourcemaps.init()))
        .pipe(sass(sassOptions).on('error', sass.logError))
        .pipe(postcss(processors))
        .pipe(production(cssnano()))
        .pipe(development(sourcemaps.write()))
        .pipe(rename({ suffix: '.min' }))
		.pipe(minifycss())
		.pipe(gulp.dest('css'))
        .pipe(gulp.dest('./css/'));
}));


gulp.task('compile-js', gulp.series(() => {
    var bs_dir_str = "gulp_compents/bootstrap/dist/js/";
    var jQuery_dir_str = "gulp_compents/jquery/dist/";
    var js_str = [
        jQuery_dir_str + "jquery.min.js",
        bs_dir_str + "bootstrap.min.js",
        "js/main.js"
    ]
    return gulp.src('./src/js/mdb.free.js')
        .pipe(concat('app.js'))
        .pipe(sourcemaps.init())
        .pipe(development(sourcemaps.write()))
        .pipe(gulp.dest('./js/'));
}));

gulp.task('scss-lint', gulp.series(() => {
    return gulp.src('src/scss/**/*.scss')
        .pipe(scsslint({ 'config': 'src/.scss-lint.yml' }));
}));


gulp.task('build', gulp.series('compile-sass','compile-js'));


