//导入工具包 require('node_modules里对应模块')
var gulp = require('gulp'),				 	//本地安装gulp所用到的地方
	less = require('gulp-less'),			//less to css
	minifycss = require('gulp-minify-css'),    // css压缩
	uglify = require('gulp-uglify'),			//js压缩
	concat = require('gulp-concat'),			//文件合并
	rename = require('gulp-rename'),			//文件改名
	notify = require('gulp-notify');			//提示信息

//定义一个testLess任务（自定义任务名称）
gulp.task('testLess', gulp.series(() => {
	gulp.src('less/__main.less')		//该任务针对的文件
		.pipe(concat('app.css'))
		.pipe(less()) 					//该任务调用的模块
		.pipe(gulp.dest('css'))			//将会在src/css下生成index.css		
		.pipe(rename({ suffix: '.min' }))
		.pipe(minifycss())
		.pipe(gulp.dest('css'))
		.pipe(notify({ message: 'less to css task ok !' }));
}));

gulp.task('js', gulp.series(() => {
	var js_src_dir = 'js/bootstrap/';
	var js_src = [
		js_src_dir + 'transition.js',
		js_src_dir + 'alert.js',
		js_src_dir + 'button.js',
		js_src_dir + 'carousel.js',
		js_src_dir + 'collapse.js',
		js_src_dir + 'dropdown.js',
		js_src_dir + 'modal.js',
		js_src_dir + 'tab.js',
		js_src_dir + 'affix.js',
		js_src_dir + 'scrollspy.js',
		js_src_dir + 'tooltip.js',
		js_src_dir + 'popover.js'
	];
	gulp.src(js_src)
		.pipe(concat('main.js'))
		.pipe(gulp.dest('js'))
		.pipe(rename({ suffix: '.min' }))
		.pipe(uglify())
		.pipe(gulp.dest('js'))
		.pipe(notify({ message: 'js task ok !' }));
}))

gulp.task('default', gulp.series('testLess', 'js')); //定义默认任务

//gulp.task(name[, deps], fn) 定义任务  name：任务名称 deps：依赖任务名称 fn：回调函数
//gulp.src(globs[, options]) 执行任务处理的文件  globs：处理的文件路径(字符串或者字符串数组)
//gulp.dest(path[, options]) 处理完后文件生成路径
