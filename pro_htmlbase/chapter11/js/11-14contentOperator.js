/* 11-14jQuery基本操作-内容操作-html|text|val */

/* 获取元素的内容 */
function getHTMLContent() {
	console.log('<div>中的HTML内容如下：' + $('#newsContent').html());
}

/* 获取元素的内容 */
function getTextContent() {
	console.log("<div>中的text内容如下：" + $('#newsContent').text());
}

/* 根据元素在集合中的位置不同，所赋的值也不同 */
function changeContent() {
	$('p').html(function(index, htmlCode) {
		switch (index) {
			case 0:
				return "<h1>" + htmlCode + "</h1>";
			case 1:
				return "<h2>" + htmlCode + "</h2>";
			default:return htmlCode;
		}
	});
}

/* 设置元素的HTML内容 */
function setHTMLContent(){
	$('#newsContent').html("<hr/>补充如下：Mall全称Shoping Mall(大型购物中心)，属于一种新型的复合商业");
}

/* 设置元素的文本内容 */
function setTextContent(){
	$('#newsDiscuss').text("<hr/>补充如下：Mall全称Shoping Mall(大型购物中心)，属于一种新型的复合商业");
}