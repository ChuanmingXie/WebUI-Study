/* 11-16jQuery事件处理-事件绑定-bind|one|toggle|live|delegate|on|hover */
$(function(){
	/* bind() 方法的使用 */
	//bind(type,fn1):绑定一个点击事件
	$('#bindBtn').bind('click',function(){
		$('#rightDiv').text('使用bind()方法绑定事件处理');
	});
	
	//bind(types,fn1):为一个对象同时绑定mouseenter和mouseleave事件
	$('#bindBtn2').bind("mouseenter mouseleave",function(){
		$(this).toggleClass('entered');
	});
	
	//bind(type1:fn1,type2:fn2,...type3:fn3):为一个对象同时绑定多个事件，且每个事件具有单独的处理函数
	$('#manyBindBtn').bind({
		click:function(){$('#rightDiv').slideToggle();},
		mouseenter:function(){$('#rightDiv').css('background-color','red');},
		mouseleave:function(){$('#rightDiv').css('background-color','yellow');}
	});
	
	//事件bind的缩写形式
	$('#shortBindBtn').click(function(){
		$('#rightDiv').text('事件绑定的缩写形式');
	});
	
	/* one 方法的使用 */
	$('#rightDiv').one('click',function(){
		alert($(this).text());
	});
	
	/* toggle() 方法的使用 */
	//模拟连续多次单机事件
	$('#toggleBtn').toggle(
		function(){$(this).css('background-color','red');},
		function(){$(this).css('background-color','green')},
		function(){$(this).css('background-color','yellow')},
		function(){$(this).css('background-color','white')}
	);
	
	/* 动画效果结束后再调用处理函数 */
	$('#toggleAnimateBtn').click(function(){
		$('#rightDiv').toggle('slow','swing',function(){
			$('#toggleAnimateBtn').css('background-color','red');
		});
	})
})