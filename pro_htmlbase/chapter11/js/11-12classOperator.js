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
