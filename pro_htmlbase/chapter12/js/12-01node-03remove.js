/* 12-1jQuery-DOM节点操作-创建|插入|复制|删除|包裹 */

/* 12-1jQuery-DOM节点操作-删除 */
$(function(e){
	var firstImage;
	var secondImage;
	// 为每幅图附加数据
	$("img:first").data("msg",'宇宙星空图-土星1');
	$("img:eq(1)").data("msg",'宇宙星空图-土星2');
	$("img:last").data("msg",'宇宙星空图-土星3');
	
	// 为每张图绑定click事件
	$('img').click(function(){
		alert($(this).data('msg'));
	});
	
	/* jQuery-DOM节点操作-删除 */
	//remove()
	$("#removeBtn").click(function(){
		if(($('#firstCell img').length)>0){
			// 先执行赋值语句在执行remove()方法
			firstImage=$('#firstCell img').remove();	
		}
	});
	
	/* 恢复remove()删除的图像 */
	$("#recoveryRemoveBtn").click(function(){
		$('#firstCell').append(firstImage);
	});
	
	//detach()
	$("#detachBtn").click(function(){
		if(($('#secondCell img').length)>0){
			secondImage=$('#secondCell img').detach();
		}
	});
	
	/* 恢复detach()删除的图像 */
	$("#recoveryDetachBtn").click(function(){
		$('#secondCell').append(secondImage);
	});
	
	//empty()
	$("#emptyBtn").click(function(){
		$('#thirdCell').empty();
	});
})