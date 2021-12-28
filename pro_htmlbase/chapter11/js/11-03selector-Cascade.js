/* 11-3jQuery选择器-层次选择器 */
$(function(e) {
	// form标签内的所有子孙层的input元素
	$('form input').css("Width", "200px");
	// form标签内的第一层(孩子层,非孙子层)input元素
	$('form > input').css("background", "gray")
	// 紧跟label标签的input元素
	//$('label+input').css("border-color","blue");
	$('label').next('input').css("border-color", "red");
	//form标签之后的所有form同级别层的input元素
	//$('form~input').css("border-bottom-width","10px");
	$('form').nextAll('input').css("border-bottom-width", "10px");
	$("*").css("padding-top", "3px");
})
