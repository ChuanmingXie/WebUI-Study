/* 11-1搭建jQuery开发环境-测试示例 */

/* 
window.onload  与 $().ready() 的区别

执行时间：
	window.onload 必须在页面全部加载完毕后才能执行	在
	$(document).ready():页面中所有DOM结构下载完成后执行，此时可能DOM元素关联的内容没有加载完毕
执行次数:
	一个页面只能有一个，当页面中存在多个window.onload时，仅输出最后一个结果，无法完成多个结果同时输出
	一个页面中可以有多个，结果可以相继输出
简化写法：
	$(document).ready():可以简写成  $()

 */

$().ready(function(e){
	alert($('#myDiv').html());
});
