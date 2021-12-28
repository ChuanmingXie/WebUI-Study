/* 11-1jQuery概述-搭建jQuery开发环境-测试示例 */

/* 
window.onload  与 $().ready() 的区别

执行时间：
	window.onload 必须在页面全部加载完毕后才能执行
	$(document).ready():页面中所有DOM结构下载完成后执行，此时可能DOM元素关联的内容没有加载完毕
执行次数:
	一个页面只能有一个，当页面中存在多个window.onload时，仅输出最后一个结果，无法完成多个结果同时输出
	一个页面中可以有多个，结果可以相继输出
简化写法：
	$(document).ready():可以简写成  $()

 */

$().ready(function(e) {
	/* 所有DOM结构下载完成后执行 */
	alert("$().ready()函数："+$('#myDiv').html());
});

$().ready(function(){
	alert('第二次执行');
})

$(document).ready(function(){
	alert('第三次执行');
})

$(function(){
	alert("第四次执行");
})


/* 11-1jQuery概述-DOM对象和jQuery对象 */
//1.DOM对象的获取
var menuDiv = document.getElementById('menuDiv');
var baseSpan = menuDiv.getElementsByClassName('baseClass');
var span = document.querySelector('#menuDiv');

//2.DOM转换为jQuery对象
/* 获取DOM对象 */
var domObject = document.getElementById('myDiv');
// 获取DOM对象中的innerHTML值
alert("DOM："+domObject.innerHTML);
/* 将DOM对象转换为jQuery对象 */
var jQueryObject = $(domObject);
/* 调用jQuery对象的html()方法 */
alert("DOM转换为jQuery："+jQueryObject.html());

//3.jQuery转化为DOM对象
/* 获取jQuery对象 */
var jQueryObjects = $('div');
/* 通过下表获取DOM对象 */
var domObject1 = jQueryObjects[0];
/* 通过get()获取DOM对象 */
var domObject2 = jQueryObjects.get(1);
alert("jQuery转换为DOM：\n"+"第一个DIV的内容:" + domObject1.innerHTML +
	"\n第二个DIV的内容是:" + domObject2.innerHTML);

