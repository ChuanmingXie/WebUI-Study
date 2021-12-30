/*12-16jQueryPlugin- Global|Object|customPlugin */

/* 12-16jQueryplugin-Global-封装全局函数插件 */
$.extend({
	sayHello:function(name){
		console.log('Hello '+(name?name:"Global-封装全局函数插件")+" !");
	}
});

$.sayHello();		//调用
$.sayHello("chuanmingxie");		//带参调用
jQuery.sayHello('CloudWhales');	//$==jQuery

