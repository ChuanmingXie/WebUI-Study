// gulp 4.0 版本

'use strict'

var gulp = require('gulp'),
    environments = require('gulp-environments'),
    sass = require('gulp-sass')(require('sass')),
    autoprefixer = require('gulp-autoprefixer'),
    postcss = require('gulp-postcss'),
    mq4HoverShim = require('mq4-hover-shim'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    gulphtml = require('gulp-html'),
    bootlint = require('gulp-bootlint'),
    cssnano = require('gulp-cssnano'),
    sourcemaps = require('gulp-sourcemaps'),
    uglify = require('gulp-uglify'),
    browser = require('browser-sync'),
    panini = require('panini'),
    rimraf = require('rimraf').sync;

var port = process.env.SERVER_PORT || 8080;
var development = environments.development;
var production = environments.production;

gulp.task('watch', gulp.series(() => {
    gulp.watch('sass/**/*', ['buildcss', browser.reload]);
    gulp.watch('html/pages/**/*', ['buildhtml']);
    gulp.watch(['html/{layouts,includes,helpers,data}/**/*'], ['buildhtml:rest', 'bulidhtml'])
}));

gulp.task('buildcss',gulp.series(()=> {
    return gulp.src('./sass/app.scss')
        .pipe(development(sourcemaps.init()))
        .pipe(sass({precision: 8}))
        .pipe(autoprefixer({
            browsers: [
                "Android 2.3",
                "Android >= 4",
                "Chrome >= 20",
                "Firefox >= 24",
                "Explorer >= 8",
                "iOS >= 6",
                "Opera >= 12",
                "Safari >= 6"
            ]
        }))
        .pipe(production(cssnano()))
        .pipe(rename({ suffix: ".min" }))
        .pipe(development(sourcemaps.write()))
        .pipe(gulp.dest('./_site/css'));
}));

gulp.task('buildjs',gulp.series(()=> {
    var bs_dir_str = "gulp_compents/bootstrap/dist/js/";
    var jQuery_dir_str = "gulp_compents/jquery/dist/";
    var js_str = [
        jQuery_dir_str + "jquery.min.js",
        bs_dir_str + "bootstrap.min.js",
        "js/main.js"
    ]
    return gulp.src(js_str)
        .pipe(concat('app.js'))
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(rename({ basename: 'app', suffix: '.min' }))
        .pipe(development(sourcemaps.write()))
        .pipe(gulp.dest('./_site/js'));
}));

gulp.task('buildhtml', gulp.series((cb) => {
    gulp.src('html/pages/**/*.html')
        .pipe(panini({
            root: 'html/pages/',
            layouts: 'html/layouts/',
            partials: 'html/includes/',
            helpers: 'html/helpers/',
            data: development() ? 'html/data/development' : 'html/data/production'
        }))
        .pipe(gulp.dest('./_site'));
    //.on('finish', browser.reload);
    cb();
}));

gulp.task('buildhtml:rest', gulp.series((done) => {
    panini.refresh();
    done();
}));

gulp.task('gulp-boot-html', gulp.series('buildhtml', function () {
    gulp.src('_site/**/*.html')
        .pipe(gulphtml())
        .pipe(bootlint());
}));

//清空文件夹
gulp.task('clean', gulp.series(() => {
    rimraf('_site');
}));

//复制图片文件
gulp.task('copy', gulp.series(() => {
    gulp.src(['assets/**/*']).pipe(gulp.dest('./_site'));
}));


gulp.task('set-development', development.task);
gulp.task('set-production', production.task);

gulp.task('build', gulp.series('buildhtml', 'buildcss', 'buildjs', 'copy'));

gulp.task('server', gulp.parallel('build', function () {
    browser.init({ server: './_site', port: port });
}));

gulp.task('default', gulp.series('set-development', 'server', 'watch'));
gulp.task('deploy', gulp.series('set-production', 'server', 'watch'));
