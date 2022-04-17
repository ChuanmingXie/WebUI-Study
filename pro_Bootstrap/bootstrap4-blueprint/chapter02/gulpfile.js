// gulp 4.0 版本

'use strict'

var gulp = require('gulp');
var environments = require('gulp-environments');
var sass = require('gulp-sass')(require('sass'));
var sourcemaps = require('gulp-sourcemaps');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var mq4HoverShim = require('mq4-hover-shim');
var rimraf = require('rimraf').sync;
var cssnano = require('gulp-cssnano');
var browser = require('browser-sync');
var panini = require('panini');
var validator = require('gulp-html');
var bootlint = require('gulp-bootlint');
var concat = require('gulp-concat');
var scsslint = require('gulp-scss-lint');

var port = process.env.SERVER_PORT || 8080;
var development = environments.development;
var production = environments.production;
var bowerpath = process.env.BOWER_PATH || 'sass/components/';


// Watch files for changes
gulp.task('watch', gulp.series(() => {
    gulp.watch('sass/**/*', ['compile-sass', browser.reload]);
    gulp.watch('html/pages/**/*', ['compile-html']);
    gulp.watch(['html/{layouts,includes,helpers,data}/**/*'], ['compile-html:reset', 'compile-html']);
}));

// Erases the dist folder
gulp.task('clean', gulp.series(() => {
    rimraf('_site');
}));


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
    return gulp.src('./sass/app.scss')
        .pipe(development(sourcemaps.init()))
        .pipe(sass(sassOptions).on('error', sass.logError))
        .pipe(postcss(processors))
        .pipe(production(cssnano()))
        .pipe(development(sourcemaps.write()))
        .pipe(gulp.dest('./_site/css/'));
}));

gulp.task('compile-html', gulp.series((cb) => {
    gulp.src('html/pages/**/*.html')
        .pipe(panini({
            root: 'html/pages/',
            layouts: 'html/layouts/',
            partials: 'html/includes/',
            helpers: 'html/helpers/',
            data: development() ? 'html/data/development' : 'html/data/production'
        }))
        .pipe(gulp.dest('_site'));
    //.on('finish', browser.reload);
    cb();
}));


gulp.task('compile-html:reset', gulp.series((done) => {
    panini.refresh();
    done();
}));

gulp.task('compile-js', gulp.series(() => {
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
        .pipe(development(sourcemaps.write()))
        .pipe(gulp.dest('./_site/js/'));
}));

gulp.task('scss-lint', gulp.series(() => {
    return gulp.src('sass/**/*.scss')
        .pipe(scsslint({ 'config': 'sass/.scss-lint.yml' }));
}));

// Copy assets
gulp.task('copy', gulp.series(() => {
    gulp.src(['assets/**/*']).pipe(gulp.dest('_site'));
}));

gulp.task('set-development', development.task);
gulp.task('set-production', production.task);

gulp.task('validate-html',gulp.series('compile-html', function(){
    gulp.src('_site/**/*.html')
        .pipe(validator())
        .pipe(bootlint());
}));

gulp.task('test', gulp.series('scss-lint', 'validate-html'));
gulp.task('build', gulp.series( 'compile-html', 'compile-sass','compile-js','copy','clean'));

// Starts a BrowerSync instance
gulp.task('server', gulp.parallel('build', function() {
    browser.init({ server: './_site', port: port });
}));
gulp.task('default', gulp.series('set-development', 'server', 'watch'));
gulp.task('deploy', gulp.series('set-production', 'server', 'watch'));

