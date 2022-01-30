/*3-2 jQueryDOM操作 */

$(function(e){
	//findNode();
	createNode();
	insertNode();
	// moveNode();
	
});

// 查找节点
function findNode(){
	var $para=$('p');		//获取p节点
	var $li=$('ul li:eq(1)');	//获取第二个li元素
	
	var p_txt=$para.attr('title');	//获取p元素的title属性
	var ul_txt=$li.attr('title');	//获取ul里的第二个li元素的title属性
	var li_txt=$li.text();			//获取第二个li元素节点的text
	
	alert(ul_txt);
	alert(li_txt);
	alert(p_txt);
}

// 创建节点
function createNode(){
	var newli_1=$("<li></li>");
	var newli_2=$("<li></li>");
	var newli_3=$("<li title='黄瓜'>黄瓜</li>");
	newli_1.attr("title","香蕉");
	newli_1.text("香蕉");
	newli_2.text("西瓜");	
	$("ul").append(newli_1).append(newli_2).append(newli_3);
}

// 插入节点
function insertNode(){
	var newli_1=$('<li title="番茄">番茄</li>');
	var newli_2=$("<li></li>");
	var newli_3=$("<li title='玉米'>玉米</li>");
	$('ul').append(newli_1).prepend(newli_2);
	newli_3.insertAfter($("ul li:eq(1)"));
}

// 移动节点
function moveNode(){
	$("ul li:gt(3)").remove();
	var one_li=$("ul li:eq(1)");
	var two_li=$("ul li:eq(2)");
	two_li.insertBefore(one_li);
}