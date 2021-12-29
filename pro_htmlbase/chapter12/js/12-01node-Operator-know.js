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
1. append()
2. prepend()
3. after()
4. befor()
	//语法
		$(selector).append|prepend|after|befor(content);
		$(selector).append|prepend|after|befor(function(index[,htmlCode])
	//参数：
		$(selector):选择器选取的对象
		content：被插入的内容
		function(index,htmlCode):将函数的返回值作为插入的内容，
		index表示当前元素的索引位置，htmlCode(可选)表示当前元素的html内容。
5. appendTo()
6. prependTo()
7. insertafter()
8. insertbefor()
		
