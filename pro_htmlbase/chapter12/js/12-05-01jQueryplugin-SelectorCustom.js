/*12-5-1jQueryPlugin- Global|Object|customPlugin */


/* 12-5-1jQueryplugin-Global-封装全局函数插件 */

$.extend({
	sayHello:function(name){
		console.log('Hello '+(name?name:"Global-封装全局函数插件")+" !");
	}
});

$.sayHello();		//调用
$.sayHello("chuanmingxie");		//带参调用
jQuery.sayHello('CloudWhales');	//$==jQuery


/* 12-5-1jQueryplugin-Object-封装对象方法的插件 */
//页面加载时的执行
$(function (){
	var options={'color':'#2c9929'};
	// 使用默认参数
	//$('a').myPlugin(options);
	// 调用无参方法时，将使用插件的默认值
	$('a').myPlugin().fadeOut('slow').delay(1000).slideDown('slow');
});

/* 通过$.fn封装一个对象方法的插件 */
//参数options中包含指定的CSS样式
$.fn.myPlugin=function(options){
	// 默认的CSS样式
	var defaults={
		'color':'red',
		'fontSize':'12px'
	};
	// defaults默认参数将被改变
	// var settings=$.extend(defaults,options);
	// defaults默认参数将不会被改变
	var settings=$.extend({},defaults,options);
	// 返回一个jQuery对象，以便后面进行链式操作
	return this.css({
		'color':settings.color,
		'fontSize':settings.fontSize
	});
}

/*自调用你买哪个函数包裹起来的jQuery插件 */
;(function($,window,document,undefined){
	// 插件部分代码
})(jQuery,window,document);


/* 12-5-1jQueryPlugin- customPlugin-自定义选择器插件 */
/* 通过自定义选择器插件 和 自调匿名函数包裹的对象方法插件，定义一个 自定义选择器*/
;(function($){
	$.expr[":"]['color']=function(obj,index,meta){
		console.log(meta);
		return $(obj).css('color',meta[3]);
	};
	$.expr[":"].search=function(obj,index,meta){
		return $(obj).text().toUpperCase().indexOf(meta[3].toUpperCase())>=0;
	}
})(jQuery);

// 页面加载时执行
$(function(e){
	$("td:search('果')").css({"background-color":"#5FF"});
	$('td span:color(blue)').css('font-weight','bold');
});
