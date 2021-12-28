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
		/* unbind() - off() */
		// 使用unbind解除click事件绑定
		$('#manyBindBtn').unbind('click');
		// 解除该元素上所有的事件绑定
		$('#manyBindBtn').unbind();
		// 使用off()解除事件绑定
		$('#manyBindBtn').off('click');
		$(document).off('click','#manyBindBtn');
		$('#manyBindBtn').off();
		
		/* undelegate() - off */
		// 使用undelegate()方法解除delegate()方法绑定的事件
		$(document).undelegate('#delegateBindBtn','click');
		// 使用off()方法解除delegate()方法绑定的事件
		$(document).off('click','#delegateBindBtn');
		
		/*  */
		// 使用off()解除on()方法绑定的事件
		$('#leftDiv').off('click','#bindBtn');
		// 使用off()方法解除所有按钮上的事件绑定
		$("input[type='button']").off();
	});
})