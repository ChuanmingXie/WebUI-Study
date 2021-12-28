/* 11-14jQuery基本操作-内容操作-html|text|val */

/* 知识点 

// 1.html()
// 返回#mainContentDiv标签的HTML内容
$('#mainContentDiv').html();
// 设置#mainContentDiv标签的HTML内容设置为 htmlCode:红色标题格式的"漫步时代广场"
$('#mainContentDiv').html("<h1><font color='red'>漫步时代广场</font></h1>");
// 根据元素在集合中不同的位置，设置不同的HTML内容
$('p').html(function(index, htmlCode) {
	switch (index) {
		case 0:
			return "<h1>" + htmlCode + "</h1>";
		case 1:
			return "<h2>" + htmlCode + "</h2>";
		default:
			return htmlCode;
	}
});

//2.text()
返回 #mainContentDiv标签的文本内容, 即使该标签包含HTML标签， 也会返回标签信息
$('#mainContentDiv').text();
将inputDiscuss内容作为newsDisscuss的文本内容
$('#newsDiscuss').text("<hr/>补充如下：" + $('#inputDiscuss') val() + "<hr/>");
*/


/* 实例演示 */
// html() | text()
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
			default:
				return htmlCode;
		}
	});
}

/* 设置元素的HTML内容 */
function setHTMLContent() {
	$('#newsContent').html("<hr/>补充如下：Mall全称Shoping Mall(大型购物中心)，属于一种新型的复合商业");
}

/* 设置元素的文本内容 */
function setTextContent() {
	$('#newsDiscuss').text("<hr/>补充如下：Mall全称Shoping Mall(大型购物中心)，属于一种新型的复合商业");
}

// val()
function submitNewsDiscuss() {
	var inputDiscuss = $('#inputDiscuss').val();
	$('#newsDiscuss')
		.html("<hr/>评论如下：" + inputDiscuss)
		.css("color", $('#discussColor').val())
		.css("font-size", $("[name=discussSize]:checked").val());
}
