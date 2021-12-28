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
	
	/* live() 方法*/
	$('.eventBind2').live('click',function(){
		alert($(this).html());
	});
	
	/* 通过新增div代码测试 */
	$('.eventBind2').append("<div id='rightDiv'>通过代码新增的Div</div>");
	
	/* delegate() 方法：对对象内符合条件的子元素绑定事件*/
	$('span').delegate('button','click',function(){
		//div的显示与隐藏
		$('div').slideToggle();	
	})
	
	/* on()方法 */
	/* 绑定事件,代替bind()方法 */
	$('.eventBind3 #leftDiv').on('click','#bindBtn',function(){
		alert('使用bind()方法绑定事件处理');
	});
	
	/* 绑定事件，并额外传递数据，代替degelate() */
	$('.eventBind3').on('click','#dataBindBtn',{msg:'额外传递数据'},function(e){
		alert(e.data.msg);
	});
		
	//绑定事件,替代live() 方法
	$('.eventBind3').on('click',"div[id!=leftDiv]",function(){
		alert($(this).html());
	});
	
	/* hover()方法 */
	//绑定事件 hover() 方法
	
	$('.eventBind3 #rightDiv').hover(
	function(){
		var r=parseInt(Math.random()*255);
		var g=parseInt(Math.random()*255);
		var b=parseInt(Math.random()*255);
		var rgb='rgb('+r+','+g+','+b+')';
		$(this).css('background-color',rgb);
	},function(){
		$(this).css('background-color','white');
	});
})