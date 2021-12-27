/* 11-12jQuery基本操作-样式操作 */
/* addClass() | removeClass() */
$(function(e) {
	$('#articleTitle').addClass('titleClass'); //添加某种样式
	$("p[title='desc']").addClass("baseClass fontColor"); //添加多种样式
	//根据位置的不同，添加不同的样式，index为索引，oldClass为原来样式
	$("p[title='desc']").addClass(function(index, oldClass) {
		console.log(index + oldClass);
		return 'p' + index;
	});
});

function removeClass() {
	$('p').removeClass("fontSize"); //移出指定的样式
	$('p').removeClass(); //移出所有的样式
}

/* toggle() | css() */

/* 
ID为userName的元素添加样式，如果存在focusClass样式则移除，没有样式则添加
$('userName').toggleClass("focusClass");
第二个参数为真，样式切换为inverseColor
$('#saleDept').toggleClass("inverseColor",true);

用于返回第一个匹配元素的样式
$('img'),css('width');
设置某一匹配元素的样式，
$('img').css('width','200px');
使用 properties(属性键值对) 的方式一次设置多个样式
$('img').css(backgroundColor:"#CCC",borderColor:"#999");
使用函数的返回值作为 css() 方法的value值
$('img').css({
	width:function(index,value){
		return parseFloat(value)*0.9;
	}
})
*/

var count = 0;
//获取焦点
function userNameOnFocus() {
	$('#userName').toggleClass('focusClass');
}
//部门改变
function changeDept() {
	$('#saleDept').toggleClass("inverseColor", ++count % 3 == 0);
}
//图片 放大
function enlargeImage() {
	$('img').css({
		width: function(index, value) {
			return parseFloat(value) * 1.1;
		},
		height: function(index, value) {
			return parseFloat(value) * 1.1;
		}
	});
}
//图片 缩小
function lessenImage() {
	$('img').css({
		width: function(index, value) {
			return parseFloat(value) * 0.9;
		},
		height: function(index, value) {
			return parseFloat(value) * 0.9;
		}
	})
}
