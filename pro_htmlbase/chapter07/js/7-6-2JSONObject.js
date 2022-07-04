/* 7-6自定义对象-JSON方式 */
// 简单JSON对象
var goods = {
	name: "男士衬衫",
	type: "男装",
	price: 200,
	color: "白色",
	showInfo: function() {
		alert("商品名称为：" + this.name +
			"\n商品类型为：" + this.type +
			"\n商品价格为：" + this.price +
			"\n商品颜色为：" + this.color);
	},
	showColor: function() {
		alert("商品颜色为：" + this.color);
	}
}

// 稍复杂的JSON对象
var customer = {
	name: "guogy",
	type: "admin",
	adderss: {
		province: "山东",
		city: "青岛"
	},
	enjoy: ["科幻", "购物", "戏剧", "足球"],
	order: [{
			name: "男士衬衫",
			quantity: 3
		},
		{
			name: "耐克运动鞋",
			quantity: 2
		}]
};


// evel()方式 ：将字符串解析为JSON对象
var movieStrEval = '{' +
	'name:"长津湖",' +
	'type:"战争",' +
	'price:80,' +
	'showInfo:function(){' +
	'document.write("影片名称："+this.name+"，影片类型："+this.type+"，票价："+this.price+"<br />");' +
	'}' +
	'}';

// Function对象方式将字符串转换为JSON对象
// 在创建Function对象时，第一个参数是一个列表，用于传递数据，第二个参数作为函数的执行体；在执行中使用return返回JSON内容即可
var movieStrFun = '{' +
	'name:"长津湖",' +
	'type:"战争",' +
	'price:80,' +
	'showInfo:function(){' +
	'document.write("影片名称："+this.name+"，影片类型："+this.type+"，票价："+this.price+"<br />");' +
	'}' +
	'}';

// 调用JSON对象
(function() {
	goods.showInfo();
	document.write("<br/>用户名：" + customer.name +
		",权限" + customer.type +
		",地区" + customer.adderss.province + " " + customer.adderss.city +
		",爱好" + customer.enjoy+"<br />");
		
	// eval()方式
	var movieEval = eval("(" + movieStrEval + ")");
	movieEval.showInfo();
	
	// 转换方式 1
	var movie = (new Function("", "return" + movieStrFun))();
	movie.showInfo();
	// 转换方式 2
	var movieFun = new Function("", "return" + movieStrFun);
	var movies = movieFun();
	movies.showInfo();
})()


