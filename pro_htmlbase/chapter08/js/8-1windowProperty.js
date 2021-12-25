/* 8-1window对象-windowProperty */

window.defaultStatus="漫步时尚广场，体育休闲一体的综合性广场";

function chanageStatus(){
	window.status="漫步时尚广场，不一样的广场";
}

function getWidthAndHeight(){
	alert("当前窗口的宽度："+window.innerWidth+"高度："+window.innerHeight)
}

/* 使用HTML元素的属性绑定事件 */
function doSomething(){
	alert("响应的用户事件");
}

/* 使用JS脚本动态绑定 */
var mybutton=$('#myButton').get(0);
mybutton.onmouseover=function(){
	alert('鼠标移动到了按钮上面')
}