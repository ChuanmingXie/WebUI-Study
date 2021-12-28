/* 11-19jQuery事件处理-解除事件绑定-unbind|undelegate|off */

$(function(){
	//使用bind绑定事件
	$('#manyBindBtn').bind({
		click:function(){$('#rightDiv').slideToggle();},
		mouseover:function(){$('#rightDiv').css('background-color','red');},
		mouseout:function(){$('#rightDiv').css('background-color','yellow');},
	});
	
	// 使用delegate 绑定事件
	$(document).delegate("#delegateBindBtn","click",function(){
		$('#rightDiv').slideToggle();
	});
	
	// 使用hover绑定事件
	$('#rightDiv').hover(
	function(){$(this).css('background-color','gray');},
	function(){$(this).css('background-color','white');}
	);
	
	// 使用on ()方法绑定事件
	$('#leftDiv').on('click','#bindBtn',function(){
		alert('使用bind()方法绑定事件处理');
	});
	
	/* 解除事件绑定 */
	$('#removeBindBtn').on('click',function(){
		$('#manyBindBtn').off('click');
		$(document).off('click','#delegateBindBtn');
		$("input[type='button']").off();
	});
})