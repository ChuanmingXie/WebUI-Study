/*  */
// 数字对象的创建 
	语法:
		new Array();
		new Array(size);
		new Array(element0,element1,element2,...,elementn);
	示例：
		var goodTypes=new Array();
		goodTypes[0]="男装";
		goodTypes[1]="女装";
		var foodTypes=new Array("卤菜","川菜"，"粤菜");
		var MovieTypes=new Array(8);
		简写：
			var foods=["兰州拉面","潍坊火烧","背景烤鸭","德州扒鸡"];

//数组对象属性：
	foods.constructor :返回对此对象的构造函数的引用
	foods.length :数组的长度
	foods.prototype :为对象添加属性和方法

//数组对象的常用方法
	arrayA.concat(arrayB,arrayC,...arrayN);用于连接俩个或多个数组，返回合并后的新数组,而原数组保持不变
	arrayA.join(separator);将数组中的元素通过指定的字符串连接
	arrayA.push(newElement1,newElement2,...,newElementX);用于像数组尾部添加一个或多个元素，返回数组的新长度
	arrayA.slice(start,[end]);从数组中返回指定的元素
	arrayA.sort([sortby]);用于对当前数组进行排序
	/*
	向数组中添加1-n个元素或者从数组中删除元素，
	index必选，规定添加和删除元素的位置，index<0 时从数组尾部向前计数,-1表示最后一个元素，-2表示导数第二
	howmany必选，表示要删除元素的数量，0代表不删除数据
	[items]可选：表示向数组中添加和替换的元素
	*/
	arrayA.splice(index,howmany,[item1,...itemX)]);

// 二维数组
在JS中，没有二维数组或多维数组，不能通过new Array()的方式来创建。只能利用Js的若数据类型特点，在一维数组中存放另一个数组的方式来模拟实现二维数组
	var array=new Array();
	array[0] = new Array('科幻','流浪地球',80);
	array[1]=new Array('战争','长津湖',79);
	array[2]='从1992到2012年这二十年时本次太阳纪的最后一个周期,又被称为"地球更新期"...';
	array[3]=88;
简写：
	var movies=[
		['科幻','流浪地球',80],
		['战争','长津湖',79],
		['动漫','雄狮少年',6],
		['戏剧','赵氏孤儿',100]
	]