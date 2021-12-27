/* 11-10jQuery选择器-表单选择器 */

//考虑这个 参数 e的作用
$(function(e) {
	var result = "统计结果如下：<hr>"
	result += "<br/>&lt;input&gt;标签数量为：" + $(":input").length;
	result += "<br/>单行文本框数量为：" + $(":text").length;
	result += "<br/>密码框数量为：" + $(":password").length;
	result += "<br/>单选按钮数量为：" + $(":radio").length;
	result += "<br/>上传文本框数量为：" + $(":file").length;
	result += "<br/>复选框数量为：" + $(":checkbox").length;
	result += "<br/>图片按钮数量为：" + $(":image").length;
	result += "<br/>提交按钮数量为：" + $(":submit").length;
	result += "<br/>普通按钮数量为：" + $(":button").length;
	$('#showResult').html(result);
})
