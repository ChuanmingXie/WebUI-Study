/* 11-11jQuery基本操作 - 属性操作-函数 */
/* 知识点 

// 1.attr()方法 :获取或设置元素的属性
	// 语法：
		attr(name)
		
		参数由properties是一个由key/value键值对构成的集合，用户设置元素中1-n个属性		 
		attr(properties)
		attr(key,value)
		
		使用函数的返回值作为属性的值，
		index表示当前元素在集合中的索引位置，oldAttr表示当前元素在修改后前的属性值		 
		attr(key,function(index,oldAttr)
	//示例：
		$('img').attr('src');
		$('#myImg').attr('src');
		$('#myImg').attr('src',"img/flower2.png");
		$('#myImg').attr({src:"img/flower2.png",title:"鲜花之王-玫瑰花"});
		$('#myImg').attr('title',function(){return this.src;});
		
// 2.removeAttr()方法
	//语法：
		removeAttr(name)	name 表示要删除的属性名		
	// 示例：
		$('img').removeAttr("title");


// 3.prop()方法：
	用户获取匹配元素的集合中第1个元素的属性，
	或者设置所匹配的元素的一个或多个属性，该方法多用于boolean类型的属性，如checked、selected
	//语法：
		prop(name)
		prop(properties)
		prop(key,value)
		prop(key,function(index,oldAttr):
	//示例:
		$("input[type='checkbox']").prop("checked");		//返回第一个复选框的状态
		$("input[type='checkbox']").prop("checked",true);	//将所有复选框选中
		// 通过属性键值对的方式，将所有复选框设置为禁用、选中状态 
		$("input[type='checkbox']").prop(disabled:true,checked:true);	
		// 使用函数的返回值作为属性值, 此处是为了实现反选
		$("input[type='checkbox']").prop("checked",function(index,oldValue){return !oldValue;})

// 4.removeProp() 方法：
	// 语法：
		removeProp(name)	
	// 示例:
		$("input[type='checkbox']").removeProp("disabled");
		
*/

/* 示例演示 */
// 改变flower的src引用
function changeFlower() {
	var flowerSrc = $('#flower1').attr('src');
	$('#flower1').attr('src', function() {
		return $('#flower2').attr('src')
	});
	$('#flower2').attr('src', flowerSrc);
}

// 全部选中
function changeSelect() {
	$("input[type='checkbox']").prop("checked", true);
}

// 反选
function reverseSelect() {
	$("input[type='checkbox']").prop('checked', function(index, oldValue) {
		return !oldValue;
	});
}

// 禁用
function disabledSelect() {
	$("input[type='checkbox']").prop({
		checked: true,
		disabled: true
	});
}

// 取消禁用
function enabledSelect() {
	$("input[type='checkbox']").removeProp('disabled');
}

/* 
易错bug：
 1. 函数方法 书写错误，名称和调用不对应
 2. $()选择器里没有加 双引号 ("")
 3. 设置的属性拼写错误，如checked 写成 checkbox等
 */