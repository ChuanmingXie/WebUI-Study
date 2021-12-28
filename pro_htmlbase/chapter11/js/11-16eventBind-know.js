/* 11-16jQuery事件处理-事件绑定-bind|one|toggle|live|delegate|on|hover */

1. bind() 方法示例

// 绑定click事件
$('p').bind('click',function(){
	alert($(this).text());
});

$('p').bind('mouseenter mouseleave',function(){
	$(this).toggleClass('entered');
});

//对一个对象同时绑定多个事件，每个事件具有单独的处理函数
$('button').bind({
	click:function(){$('p').slideToggle();},
	mouseenter:function(){$('body').css('background-color','red');},
	mouseleave:function(){$('body').css('background-color','#FFFFFF');}
});

/* 事件处理之前传递一些附加参数 */
function handler(e){
	alert(e.date.foo);
}
$('p').bind('click',{foo:'bar'},handler);

/* 事件绑定的简写 */
$('input[type=button]').click(function(){
	$(this).toggleClass('entered');
})

2. one() 方法
$('p').one('click',function()){
	alert($(this).text());
}

4. live()方法
$('div').live('click',function(){
	alert($(this).html());
});

5. delegate() 方法
$('div').delegate('button','click',function(){
	$('p').slideToggle();
});

$('div').delegate('#dataBindBtn','click',{msg:'传递额外数据'},function(){
	alert(e.data.msg);
})

6. on ()方法
// live绑定事件
$('div[id!=leftDiv]').live('click',function(){
	//事务处理函数
});	
//on() 绑定事件,替代live() 方法
$(document).on('click',"div[id!=leftDiv]",function(){
	alert($(this).html());
});

/* delegate 绑定事件 */
$('div').delegate("#dataBindBtn",'click',{msg:'额外传递数据'},function(e){
	alert(e.data.msg);
})
/* on() 绑定事件，并额外传递数据，代替degelate() */
$('.eventBind3').on('click','#dataBindBtn',{msg:'额外传递数据'},function(e){
	alert(e.data.msg);
});


7. hover() 方法
$('td').hover(
	function(){$(this).addClass('hover');},
	function(){$(this).removeClass('hover')};
)
