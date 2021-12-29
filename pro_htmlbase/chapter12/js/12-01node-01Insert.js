/* 12-1jQuery-DOM节点操作-创建|插入|复制|删除|包裹 */

$(function(e){
	createNode();
	innerInsertNode();
	outInsertNode();
})

/* 1.jQuery-DOM操作-创建 */
function createNode() {
	var span1 = $("<span></span> <br/>"); //创建一个元素节点
	var span2 = $("<span>具有文本内容的节点</span> <br/>"); //创建一个元素节点
	var span3 = $("<span title='属性节点'>具有属性和文本内容的节点</span> <br/>"); //创建一个元素节点

	$('#containerDiv').append(span1);
	$('#containerDiv').append(span2);
	$('#containerDiv').append(span3);
	alert($('#containerDiv span').length);
}

/* 1.jQuery-DOM操作-插入-内部插入 */
function innerInsertNode(){
	/* append()方法的使用 */	
	// 在appendDiv尾部追加一副图像
	$('#appendDiv').append($("<img src='img/n1.png'/>"));
	// 根据ID进行匹配，在index 为 0的div 尾部追加衣服图像
	$('div[id^=append]').append(function(index,htmlCode){
	// 将匹配的元素的index和原有的内容打印到控制台
		console.log("append()方法：下标记"+index+",原有的内容："+htmlCode);
		if(index==0){
			return "<img src='img/n2.png' />";
		}
	});
	
	
	/* appendTo()方法的使用 */
	// 创建一个节点并添加到appendToDiv尾部
	$("<img src='img/n3.png' />").appendTo($("#appendToDiv"));
	// 将id为img8的图像追加到appendToDiv尾部(相当于元素的移动操作)
	$('#img8').appendTo($('#appendToDiv'));
	
	
	/* prepend()方法的使用 */
	// 在prependDiv的头部插入一副图像
	$('#prependDiv').prepend($("<img src='img/n3.png'/>"));
	$('div[id^=prepend]').prepend(function(index,oldHtmlCode){
		console.log("prepend()方法：下标"+index+",原有内容："+oldHtmlCode);
		if(index==0){
			return "<img src='img/n4.png'/>";
		}
	});
	
	/* prependTo()的使用 */
	// 创建一个节点，并插入到prependToDiv头部
	$("<img src='img/n5.png' />").prependTo($('#prependToDiv'));
	$('#img9').prependTo($('#prependToDiv'));
}

function outInsertNode(){
	/* after()方法 */
	// 在afterDiv后面插入一副图片
	$('#afterDiv').after("<img src='img/n1.png'/>");
	// 更具ID选择器匹配，在index为0的div元素的后面
	$('#afterDiv,#insertAfterDiv').after(function(index,htmlCode){
		console.log("after() 方法：下表"+index+",元素内容"+htmlCode);
		if(index==0){
			return $("<img src='img/n2.png'/>");
		}
	});
	
	/* insertAfter() 方法 */
	// 创建一个节点，并在insertAfterDiv元素后面插入该节点
	$("<img src='img/n3.png' />").insertAfter($('#insertAfterDiv'));
	// 将ID为img6 的图像插入到insertAfterDiv元素的后面(相当于元素的移动操作)
	$('#img6').insertAfter($('#insertAfterDiv'));
	
	/* before() 方法 */
	$('#beforeDiv').before($("<img src='img/n4.png' />"));
	$('#beforeDiv,#insertBeforeDiv').before(function(index,htmlCode){
		console.log("Before()方法：下标"+index+",元素内容："+htmlCode);
		if(index==0){
			return $("<img src='img/n5.png' />");
		}
	});
	
	/* insertBefore() 方法 */
	$("<img src='img/n6.png' />").insertBefore($('#insertBeforeDiv'));
	$('#img7').insertBefore($('#insertBeforeDiv'));
}