/* 11-11属性操作-函数 */
// 1.attr()方法 :获取或设置元素的属性
	// 语法：
		attr(name)
		attr(properties)
		attr(key,value)
		attr(key,function(index,oldAttr):
			使用函数的返回值作为属性的值，
			index表示当前元素在集合中的索引位置，oldAttr表示当前元素在修改后前的属性值
	//示例：
		$('img').attr('src');
		$('#myImg').attr('src');
		$('#myImg').attr('src',"img/flower2.png");
		$('#myImg').attr({src:"img/flower2.png",title:"鲜花之王-玫瑰花"});
		$('#myImg').attr('title',function(){return this.src});
		
		