/* @By chuanmingxie */

// 定义一个商品对象
var goods = {
	goodsSrc: null,
	goodsNum: 1
};

// 购物车的显示与隐藏
function showCar() {
	var shopCar = $('.dropdown').get(0);
	var rightNav = $('.right_nav').get(0);
	switch (shopCar.style.display) {
		case "":
		case "none":
			shopCar.style.display = "block";
			rightNav.style.position = "relative";
			shopCar.innerHTML = loadCar();
			break;
		case "block":
			shopCar.style.display = "none";
			rightNav.style.position = "static";
			break;
		default:
			break;
	}
}
// 构造购物车内的html布局
function loadCar() {
	if (localStorage.length != 0) {
		// var ulObject = $("<ul></ul>");
		var ulObject = document.createElement("ul");
		ulObject.className = "shop_pic";
		for (var i = 0; i < localStorage.length; i++) {
			var key = localStorage.key(i);
			goods = getlocalStorage(key);
			if (goods != null) {
				// var liObject = $('<li></li>');
				var liObject = document.createElement("li");
				liObject.innerHTML = '<a href="#"><img src="' +
					goods.goodsSrc + '" width="80px" height="96px" /></a><p>' +
					goods.goodsNum +
					'件<a href="javascript:void(0)" onclick="delStorage(this)"><span class="orange floatr">删除</span></a></p>';
			}
			ulObject.appendChild(liObject);
		}
		return ulObject.outerHTML;
	}
	return "购物车还是空的，赶快选购心仪的商品吧 ！";
}

/* 数据库localStorage操作 */
// 从localStorage获取数据
function getlocalStorage(key) {
	var jsonStr = localStorage.getItem(key);
	var newGoods = JSON.parse(jsonStr);
	return newGoods;
}
// 从localStorage删除数据 
function delStorage(element) {
	// 获得被点击的<a>元素的对应的img标签的src属性
	var targetSrc = element.parentNode.parentNode.childNodes[0].childNodes[0].src;
	var delGoods = getlocalStorage(targetSrc);
	delGoods.goodsNum -= 1;
	// 如果商品数量等于0，则移出该商品
	if (delGoods.goodsNum == 0) {
		localStorage.removeItem(targetSrc);
	} else {
		localStorage.setItem(targetSrc, JSON.stringify(delGoods));
	}
	$('.dropdown').get(0).innerHTML = loadCar();
}

/* 数据添加的拖拽操作 */
// 设置拖拽效果
function drag(e) {
	var e = e || event;
	e.dataTransfer.effectAllowed = "copy";
	// IE兼容写法
	e.dataTransfer.setData("text", e.target.src);
	// 标准写法
}
// 拖拽释放效果
function drop(e) {
	allowDrop(e);
	var data = e.dataTransfer.getData("text");
	if (e.target.id == "dropdown" ||
		e.target.parentNode.id == "dropdown" ||
		e.target.parentNode.parentNode.id == "dropdown" ||
		e.target.parentNode.parentNode.parentNode.id == "dropdown" || 
		e.target.parentNode.parentNode.parentNode.parentNode.id=="dropdown") {
			var newGoods=getlocalStorage(data);
			// 如loaclStorage存在数据，则计数器加1
			if(newGoods!=null){
				for (var i = 0; i < localStorage.length; i++) {
					if(data==newGoods.goodsSrc){
						newGoods.goodsNum+=1;
						goods=newGoods;
						break;
					}
				}
			}else{
				goods.goodsSrc=data;
				goods.goodsNum=1;
			}
			localStorage.setItem(data,JSON.stringify(goods));
			$(".dropdown").get(0).innerHTML=loadCar();
	}
}
// 阻止被拖拽的图片在新窗口中打开
function allowDrop(e) {
	e.preventDefault(); //通知浏览器不在执行事件相关的默认动作
	e.stopPropagation(); //阻止事件冒泡
}

/* 窗口加载时,允许拖拽的图片添加draggable属性和ondragStart */
window.onload=function(){
	// var pic_list_div=$(".pic_list div");
	var pic_list = document.getElementsByClassName("pic_list")[0];
	var pic_list_div = pic_list.getElementsByTagName("div");
	for (var i = 0; i < pic_list_div.length; i++) {
		var image= pic_list_div[i].getElementsByTagName("img")[0];
		image.setAttribute("draggable",true);
		image.ondragstart=drag;
	}
}