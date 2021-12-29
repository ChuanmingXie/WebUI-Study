/* 12-1jQuery-DOM节点操作-创建|插入|复制|删除|包裹 */

/* 1.jQuery-DOM操作-创建 */
function createNode() {
	var span1 = $("<span></span>"); //创建一个元素节点
	var span2 = $("<span>具有文本内容的节点</span>"); //创建一个元素节点
	var span3 = $("<span title='属性节点'>具有属性和文本内容的节点</span>"); //创建一个元素节点

	$('#containerDiv').append(span1);
	$('#containerDiv').append(span2);
	$('#containerDiv').append(span3);
	alert($('#containerDiv span').length);
}

/* 方法 */
1. append()	向每个选择器匹配的元素内部追加由参数指定的内容
2. prepend()	向每个选择器匹配的元素内部前插入参数指定的内容
3. after()	在每个选择器匹配的元素之后插入内容
4. befor()	在每个选择器匹配的元素之前插入内容
	//语法
		$(selector).append|prepend|after|befor(content);
		$(selector).append|prepend|after|befor(function(index[,htmlCode])
	//参数：
		$(selector):选择器选取的对象
		content：被插入的内容
		function(index,htmlCode):将函数的返回值作为插入的内容，
		index表示当前元素的索引位置，htmlCode(可选)表示当前元素的html内容。
		
5. appendTo()	把content追加到指定元素内部的后面
6. prependTo()	把content插入到指定元素内部最前面
7. insertAfter()	把content追加到指定的元素的后面
8. insertBefor()	把content插入到指定的元素的前面
	//语法：
		$(content).appendTo|prependToinsertAfter|insertBefor(selector);
	//参数
		$(selector):选择器选取的对象
		content：被插入的内容
		
