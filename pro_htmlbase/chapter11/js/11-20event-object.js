/* 11-20Query事件处理-事件对象 */
$(function(){
	// 提交按钮 默认提交表单
	$('#submitBtn').on('click',function(e){
		console.log('单击"普通按钮提交"');
	});
	// 使用preventDefault()方法阻止元素的默认行为(如表单提交、超链接)
	// 但事件会继续向外传递
	$('#stopSubmitBtn').on('click',function(e){
		console.log("单击'阻止默认按钮',阻止默认元素的默认行为(如提交表单等)");
		e.preventDefault();
	});
	
	// 普通按钮 具有事件冒泡行为
	$('#normalBtn').on('click',function(e){
		console.log("单击'普通按钮'");
	});
	// 普通按钮,并组织冒泡行为
	$('#stopPropagateBtn').on('click',function(e){
		console.log("单击'阻止冒泡按钮',阻止事件的冒泡行为");
		e.stopPropagation();
	});
	
	// 用于接受内部按钮传递来的冒泡事件
	$('#innerDiv').on('click',printEvent);
	// 鼠标移动时,获取鼠标在事件源中的相对坐标
	$('#middleDiv').on('mousemove',function(e){
		var x=parseInt(e.pageX-$(this).offset().left);
		var y=parseInt(e.pageY-$(this).offset().top);
		$(this).html('鼠标位置'+x+","+y);
	});
	//鼠标单击事件判断
	$('#rightDiv').on('mousedown',{user:'chuanming'},function(e){
		switch (e.which){
			case 1:$('#rightDiv').html(e.data.user+' 单击了鼠标左键').css('background-color','#FFC');break;
			case 2:$('#rightDiv').html(e.data.user+' 单击了鼠标中键').css('background-color','#FF6');break;
			case 3:$('#rightDiv').html(e.data.user+' 单击了鼠标右键').css('background-color','#FC6');break;
			default:$('#rightDiv').html(e.data.user+' 单击了鼠标');break;
		}
	});
});

function printEvent(e){
	var result='事件来源:'+e.target.value;
	result+="当前事件类型"+e.type;
	result+="当前标签类型"+$(this).get(0).tagName;
	console.log(result);
}