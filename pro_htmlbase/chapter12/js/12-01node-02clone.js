/* 12-1jQuery-DOM节点操作-创建|插入|复制|删除|包裹 */

/* 12-1jQuery-DOM节点操作-复制 */
$(function(e){
	// 为planetDiv中的span标签附加数据
	$('#planetDiv span').data("msg","银河系宇宙星空-图形艺术图");
	// 为planetDiv添加单击事件，在事件中获取div中的span标签的附加数据
	// $('#planetDiv').mouseover(function(){
	// 	alert('planetDiv 鼠标悬浮触发,附加数据:'+$(this).find("span").data('msg'));
	// });
	$('#planetDiv').click(function(){
		alert('planetDiv 鼠标悬浮触发,附加数据:'+$(this).find("span").data('msg'));
	});
	
	// 为planetDiv中的img添加事件
	$('#planet img').click(function(){
		alert($(this).attr('title'));
	});
	
	/* 12-1jQuery-DOM节点操作-复制 */
	// 普通复制
	$('#normalClone').click(function(){
		// 清空cloneDiv的内容
		$('#cloneDiv').empty();
		// 仅复制元素的内容，不对元素的事件处理和元素的附加数据进行复制
		$('#cloneDiv').append($('#planetDiv').clone(false));
	});
	// 元素、事件处理、子元素的时间处理和附加数据同时复制
	$('#normalEventClone').click(function(){
		$('#cloneDiv').append($('#planetDiv').clone(true));
	});
	// 复制元素及事件处理、但不复制子元素事件处理和附加数据
	$('#deepClone').click(function(){
		$('#cloneDiv').append($('#planetDiv').clone(true,false));
	});
	// 元素、事件处理、子元素的事件处理和附加数据同时复制
	$('#deepEventClone').click(function(){
		$('#cloneDiv').append($('#planetDiv').clone(true,true));
	});
})