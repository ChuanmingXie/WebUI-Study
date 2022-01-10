/* 2-1Vue实例与绑定-属性-el */
/* 实例化一个Vue对象-并通过id挂载 */
var app = new Vue({
	// el:'#app',
	el: document.getElementById('app')
});

/* Vue实例对象-并通过类名挂载 */
var appClass = new Vue({
	el: '.appClass'
});

/* 引用同一个通过类名挂载的Vue实例对象 */
var app_new = new Vue({
	el: '#app'
});

function bindAndConsoleVue() {
	/* 查看Vue对象和$el属性的内容 */
	console.log(app);
	console.log(app.$el);


	/* 查看Vue对象和jQuery对象内容 */
	console.log("我是来自Vue的对象" + appClass);
	console.log("我是来自Vue的对象的el属性：" + appClass.$el);
	console.log("我是来自jQuery的对象：" + $(".appClass"));
	console.log("我是来自jQuery的对象的首个对象：" + $(".appClass").get(0));

}

function operatorElementByVue() {
	/* 比较Vue对象获取的Element与jQuery获取的Element的异同 */
	console.log("我是来自Vue实例:" + app_new);
	console.log("我是来自Vue实例的el属性:" + app_new.$el);
	console.log("我是来自jQuery的对象：" + $("#app"));
	console.log("我是来自jQuery的对象的首个对象：" + $("#app").get(0));

	/* 操作从Vue获取的Element和jQuery获取的Element */
	$(app_new.$el).text("<ul><li>12124</li></ul>");
	app.$el.innerText = "<ul><li>12124</li></ul>";
	var newli_1 = $("<ul><li>12124</li></ul>");
	var newli_2 = $("<ul><li>12124</li></ul>");
	$("#app").append(newli_1);
	$(app_new.$el).append(newli_2);
	console.log("我是通过Vue实例的el属性访问的outerHTML" + app.$el.outerHTML);
	console.log("我是通过Vue实例的el属性访问的outerHTML" + $("#app").outerHTML);
	console.log("我是通过Vue实例的el属性访问的outerHTML" + $("#app").get(0).outerHTML);
}


var apptoggleBtn = new Vue({
	el: '#toggleBtn'
});

$(function() {
	bindAndConsoleVue();
	operatorElementByVue();
	
	/* 分析下面操作错误的原因： */
	/* 1. 通过id选择器返回的是单个jQuery对象,无需再次获取 */
	// $("#app").get(0).text("这是通过jQuery访问，并使用jQuery的text方法,进行添加");
	$("#app").text("这是通过jQuery访问，并使用jQuery的text方法,进行添加");
	/* 2.DOM对象不能直接使用jQuery方法，需要通过$()进行转化 */
	// (app.$el).style.width="300px";
	// (app.$el).slideDown();
	
	$(app_new.$el).toggle(
		function() {
			$(this).css("background-color", "red");
		},
		function() {
			$(this).css('background-color', 'green')
		},
	);
	$(apptoggleBtn.$el).toggle(
		function() {
			$(app_new.$el).slideToggle();
		},
		function() {
			$(this).css('background-color', 'red');
		},
		function() {
			$(this).css('background-color', 'green')
		},
		function() {
			$(this).css('background-color', 'yellow')
		},
		function() {
			$(this).css('background-color', 'white')
		}
	);	
	
	/* 3.DOM对象不能直接使用jQuery方法，需要通过$()进行转化，或者使用javaScript内置属性或方法 */
	// (app.$el).text('这是通过Vue访问，并使用jQuery的text方法,进行添加');
	// (app_new.$el).appendChild("<p>这是通过Vue访问，并使用jQuery的appendChild方法,进行添加</p>");
	(app.$el).innerText = '这是通过Vue访问，并使用javascript的innerText方法,进行添加';
	$(app_new.$el).append("<p>这是通过Vue访问，并使用jQuery的appendChild方法,进行添加</p>");
});

