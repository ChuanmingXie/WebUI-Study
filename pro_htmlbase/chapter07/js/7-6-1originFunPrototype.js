/* 7-6用户自定义对象-原始方式|构造函数方式|原型方式|混合方式 */

/* 1.原始方式定义用户自定义对象 */
var goodsUserObject = new Object();
goodsUserObject.name = "男士白领衬衫";
goodsUserObject.type = "男装";
goodsUserObject.price = "580";
goodsUserObject.color = "white";
goodsUserObject.showInfo = function() {
	alert("我是来原始方式的自用户自定义对象:" +
		"\n商品名称为：" + goodsUserObject.name +
		"\n商品类型为：" + goodsUserObject.type +
		"\n商品价格为：" + goodsUserObject.price +
		"\n商品颜色为：" + goodsUserObject.color);
}
goodsUserObject.showColor = showColor;

function showColor() {
	alert("商品颜色为：" + goodsUserObject.color);
}

/* 2.构造函数方式定义用户自定义对象 */
function GoodsFun(name, type, price, color) {
	this.name = name;
	this.type = type;
	this.price = price;
	this.color = color;
	this.showInfo = function() {
		alert("我是来自构造函数的用户自定义对象:" +
			"\n商品名称为：" + this.name +
			"\n商品类型为：" + this.type +
			"\n商品价格为：" + this.price +
			"\n商品颜色为：" + this.color);
	}
	this.showColor = showColor;

	function showColor() {
		alert("商品颜色为：" + this.color);
	}
}

/* 3.原型方式创建用户自定义对象 */
// 示例1：
function Goods() {}
Goods.prototype.name = "耐克运动鞋";
Goods.prototype.type = "鞋类";
Goods.prototype.price = 1200;
Goods.prototype.color = "白色";
Goods.prototype.showInfo = function() {
	alert("我是来自原型方式创建的用户自定义对象:" +
		"\n商品名称为：" + this.name +
		"\n商品类型为：" + this.type +
		"\n商品价格为：" + this.price +
		"\n商品颜色为：" + this.color);
}
Goods.prototype.showColors = showColors;

function showColors() {
	alert("商品颜色为：" + this.color);
}
// 示例 2 为Date和Array 对象添加方法

/* 4.混合方式创建用户自定义对象 */
function GoodsMix(name, type, price, color) {
	this.name = name;
	this.type = type;
	this.price = price;
	this.color = color;
}
GoodsMix.prototype.showInfo = function() {
	alert("我是来自混合方式创建的用户自定义对象:" +
		"\n商品名称为：" + this.name +
		"\n商品类型为：" + this.type +
		"\n商品价格为：" + this.price +
		"\n商品颜色为：" + this.color);
}
GoodsMix.prototype.showColor = showColorMix;
function showColorMix() {
	alert("商品颜色为：" + this.color);
}


(function() {
	/* 1.使用原始方式的用户自定义对象 */
	goodsUserObject.showInfo();
	goodsUserObject.showColor();

	// 2.构造函数方式使用对象
	var goods1 = new GoodsFun("男士衬衫", "男装", 200, "白色");
	var goods2 = new GoodsFun("女士花裙", "女装", 700, "红色");
	// 构造函数方式调用方法
	goods1.showInfo();
	goods2.showColor();

	/* 3.原型方式使用对象 */
	var goodsPrototype = new Goods();
	goodsPrototype.showInfo();
	goodsPrototype.showColors();
	//对日期对象的测试
	Date.prototype.showTime = function() {
		var year = this.getFullYear();
		var month = this.getMonth() + 1;
		var date = this.getDate();
		var hour = this.getHours();
		var minute = this.getMinutes();
		var second = this.getSeconds();
		return year + "年" + month + "月" + date + "日 " + hour + ":" + minute + ":" + second + "<br />";
	}
	//对数组对象的测试
	Array.prototype.count = function(param) {
		var num = 0;
		for (var i = 0; i < this.length; i++) {
			if (this[i] == param) {
				num++;
			}
		}
		return num;
	}
	Array.prototype.search = function(param) {
		for (var i = 0; i < this.length; i++) {
			if (this[i] == param) {
				return true;
			}
		}
		return false;
	}
	var date = new Date();
	document.write(date.showTime());
	// 数组对象
	var array = [3, 6, 8, 30, 3, 7, 6, 3];
	var countParam = 6;
	var searchParam = 9;
	document.write("数组[" + array + "]中包含'" + countParam + "'的个数：" + array.count(countParam) + "<br />");
	document.write("数组[" + array + "]中" + (array.search(searchParam) ? "" : "不") + "包含元素" + searchParam);
	
	/* 4.混合方式使用自定义对象 */	
	// 使用对象
	var goodsmix1 = new GoodsMix("男士衬衫", "男装", 200, "白色");
	var goodsmix2 = new GoodsMix("女士花裙", "女装", 700, "红色");
	// 调用方法
	goodsmix1.showInfo();
	goodsmix2.showColor();
})()
