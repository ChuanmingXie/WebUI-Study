/* 自定义对象 */

	// 1.原始方式 : 首先创建一个Object对象，然后为对象添加所需的属性和方法
	// 语法:
		var object = new Object();
		object.propertyName = value;
		object.methodName = functionName | function() {};
		/*
		使用Object创建一个对象object
		propertyName表示为object对象添加的属性名
		methodName表示为object对象添加的方法名，其值可以是预先定义好的函数名或者匿名函数
		*/
	// 示例：
		var goodsOrigin = new Object();
		goodsOrigin.name = "男士白领衬衫";
		goodsOrigin.type = "男装";
		goodsOrigin.price = "580";
		goodsOrigin.color = "white";
		goodsOrigin.showInfo = function() {
			alert("商品名称为：" + goodsOrigin.name +
				"\n商品类型为：" + goodsOrigin.type +
				"\n商品价格为：" + goodsOrigin.price +
				"\n商品颜色为：" + goodsOrigin.color);
		}
		goodsOrigin.showColor = showColor;

		function showColor() {
			alert("商品颜色为：" + goodsOrigin.color);
		}
		//调用
		goodsOrigin.showInfo();
		goodsOrigin.showColor();

	// 2.构造函数方式：
	// 通过构造函数(constructor function)创建一个JS对象。构造函数名即为类名，使用时通过new运算符和构造函数参数创建
	// 语法：
		function ClassName([param1], [param2], ...) {
			this.propertyName = value;
			// 其他属性
			this.methodName = functionName | function() {};
			//其他方法
		}
	// 示例:
	// 通过构造函数创建对象
		function Goods(name, type, price, color) {
			this.name = name;
			this.type = type;
			this.price = price;
			this.color = color;
			this.showInfo = function() {
				alert("商品名称为：" + this.name +
					"\n商品类型为：" + this.type +
					"\n商品价格为：" + this.price +
					"\n商品颜色为：" + this.color);
			}
			this.showColor = showColor;

			function showColor() {
				alert("商品颜色为：" + this.color);
			}
		}
		// 使用对象
		var goods1 = new Goods("男士衬衫", "男装", 200, "白色");
		var goods2 = new Goods("女士花裙", "女装", 700, "红色");
		// 调用方法
		goods1.showInfo();
		goods2.showColor();

	// 3.原型方式
	// 通过prototyp属性为对象添加新的属性和方法
	// 语法:
		object.prototype.name = value;
		/* 
		 object表示被扩展的对象,包括系统内置对象和自定义对象
		 prototype 表示对象的原型
		 name 表示所添加的属性或方法.当添加属性时,value为属性值;当添加方法时,value为函数的引用
		 */
	// 示例 1 为用户自定义对象添加属性:
		function Goods() {}
		Goods.prototype.name = "耐克运动鞋";
		Goods.prototype.type = "鞋类";
		Goods.prototype.price = "1200";
		Goods.prototype.color = "白色";
		Goods.prototype.showInfo = function() {
			alert("商品名称为：" + this.name +
				"\n商品类型为：" + this.type +
				"\n商品价格为：" + this.price +
				"\n商品颜色为：" + this.color);
		}
		Goods.prototype.showColor = showColor;

		function showColor() {
			alert("商品颜色为：" + this.color);
		}
		// 使用自定义的对象
		var goods = new Goods();
		goods.showInfo();
	
	// 示例 2 为Date和Array 对象添加方法
		Date.prototype.showTime = function() {
			var year = this.getFullYear();
			var month = this.getMonth() + 1;
			var date = this.getDate();
			var hour = this.getHours();
			var minute = this.getMinutes();
			var second = this.getSeconds();
			return year + "年" + month + "月" + date + "日 " + hour + ":" + minute + ":" + second;
		}

		Array.prototype.count = function(param) {
			var num = 0;
			for (var i = 0; i < this.length; i++) {
				if (this[i] == param) {
					num++;
				}
			}
			return num;
		}
		
		Array.prototype.search=function (param){
			for (var i = 0; i < this.length; i++) {
				if(this[i]==param){
					return true;
				}
			}
			return false;
		}
		//对日期对象的测试
		var date=new Date();
		document.write(date.showTime());
		// 数组对象
		var array=[3,6,8,30,3,7,6,3];
		var countParam=6;
		var searchParam=9;
		document.write("数组["+array+"]中包含'"+countParam+"'的个数："+array.count(countParam)+"<br />");
		document.write("数组["+array+"]中"+(array.search(searchParam)?"":"不")+"包含元素"+searchParam);
		
	// 4.混合方式：使用构造方式默认创建对象的属性；使用原型方式动态添加对象的方法，
	// 示例：
		function Goods(name,type,price,color){
			this.name=name;
			this.type=type;
			this.price=price;
			this.color=color;
		}
		Goods.prototype.showInfo=function(){
			alert("商品名称为：" + this.name +
				"\n商品类型为：" + this.type +
				"\n商品价格为：" + this.price +
				"\n商品颜色为：" + this.color);
		}
		Goos.prototype.showColor = showColor;
	
		function showColor() {
			alert("商品颜色为：" + this.color);
		}
	
		// 使用对象
		var goods1 = new Goods("男士衬衫", "男装", 200, "白色");
		var goods2 = new Goods("女士花裙", "女装", 700, "红色");
		// 调用方法
		goods1.showInfo();
		goods2.showColor();
		
	//5.JSON 方式
	JavaScript Object Notation是一种基于ECMAScript的轻量级数据交换格式，采用完全独立于语言的文本格式，能够以更加简明的方式创建对象
	JSON对象以{开始，以}结束
	属性名和属性值之间使用冒号隔开，属性的类型可以是字符串、数值、日期、数组或自定义对象等类型
	方法部分是由方法名和匿名函数构造，并使用冒号(":")隔开
	属性或方法之间使用逗号（,）隔开，最后一项不需要逗号
	var goods={
		name:"男士衬衫";
		type:"男装";
		price:200,
		color:"白色",
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
	goods.showInfo();
	
	var customer={
		name:"guogy",
		type:"admin",
		adderss:{
			province:"山东",
			city:"青岛"
		},
		enjoy:["科幻","购物","戏剧","足球"],
		order:[
			{name:"男士衬衫",quantity:3},
			{name:"耐克运动鞋",quantity:2}
		]
	};
	document.write("用户名："+customer.name
	+",权限"+customer.type
	+",地区"+customer.adderss.province+" "+customer.adderss.city
	+",爱好"+customer.enjoy);
	
	
	与XML数据相比，JSON数据格式具有简洁易读、数据的体积小、传输速度快等特点。
	JSON对象是一种轻量级的数据交换格式，是理想的数据交换格式。
	在传输过程中，JSON对象往往以字符串的形式进行传输，
	所以在页面中需要通过JavaScript中的 eval() 方法或者Function对象的方式将字符串解析成JavaScript
	
	// evel()方式 ：将字符串解析为JSON对象
	var movieStr='{' +
		'name:"长津湖",' +
		'type:"战争",' +
		'price:80,' +
		'showInfo:function(){' +
			'document.write("影片名称："+this.name+"，影片类型："+this.type+"，票价："+this.price+"<br />");' +
			'}' +
	'}';
	var movie=eval("("+movieStr+")");
	movie.showInfo();
	// 注意：
		alert(typeof(eval("{}")))		//return undefined
		alert(typeof(eval("({})"))		//return object[object]
		即，进行JSON转换时，要添加一对小括号才能进行正常转化
		
	// Function对象方式将字符串转换为JSON对象
	// 在创建Function对象时，第一个参数是一个列表，用于传递数据，第二个参数作为函数的执行体；在执行中使用return返回JSON内容即可
	var movieStr='{' +
		'name:"长津湖",' +
		'type:"战争",' +
		'price:80,' +
		'showInfo:function(){' +
			'document.write("影片名称："+this.name+"，影片类型："+this.type+"，票价："+this.price+"<br />");' +
			'}' +
	'}';
	// 转换方式 1
	var movie=(new Function("","return"+movieStr))();
	movie.showInfo();
	// 转换方式 2
	var movieFun=new Function("","return"+movieStr);
	var movie=movieFun();
	movie.showInfo();
		
