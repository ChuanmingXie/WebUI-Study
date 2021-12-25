/* 7-1Array对象-应用演示 */
/* 用于演示数组的属性 */
function arrayAttribute() {
	var movie = new Array('飓风营救', '复仇者联盟：无限战争2', '疯狂的麦克斯：狂暴之路', '分歧者2：绝地反击');
	switch (movie.constructor) {
		case String:
			confirm('movie是一个字符串对象');
			break;
		case Array:
			confirm('movie是一个数组对象');
			alert("movie是一个数组对象,其中元素的个数为：" + movie.length +
				"\n-------------\n" + movie.constructor);
			break;
		case Date:
			confirm('movie是一个日期对象');
			break;
		default:
			confirm('暂时不知道什么对象')
			break;
	}
}

/*
 用于演示 concat() 和 join() 方法
*/
function arrayMehod1() {
	var movies = new Array("分歧者2：绝地反击", "疯狂的麦克斯：狂暴之路", "复仇者联盟：无限战争2", "飓风营救");
	var newMoive = "长津湖";
	var hotMoive = movies.concat(newMoive);
	(function(movieArray, description) {
		document.write(description + ":<hr />\t");
		for (var i = 0; i < movieArray.length; i++) {
			document.write(movieArray[i]);
			if (i == movieArray.length - 1) {
				document.write('、');
			}
		}
		document.write("<hr />");
	})(movies, "原来的影片");

	(function(moiveArray, description) {
		document.write(description + ":<hr />\t");
		document.write(moiveArray.join('_'));
	})(hotMoive, "热映电影");
}

/* 用于演示push、pop、shift、sort 等方法*/
function arrayMehod2() {
	//匿名函数 定义一个排序规则
	var sortNumber = function(a, b) {
		return b - a;
	}

	//匿名函数 定义一个连接子串
	var showFoodsByJoin = function(foods) {
		document.write("<hr>中国美食：\t");
		document.write(foods.join(','));
	}

	var foods = new Array();
	foods[0] = "兰州拉面";
	foods[1] = "肉夹馍";
	foods.push('潍坊火烧');
	var length = foods.push("泰山火烧");
	document.write("<hr>当前数组的长度：" + foods.length);

	showFoodsByJoin(foods);

	var lastFood = foods.pop();
	document.write("<hr>最后一个美食为：" + lastFood);
	var firstFood = foods.shift();
	document.write('<hr>第一个美食为：' + firstFood);

	showFoodsByJoin(foods);

	foods.push("周黑鸭");
	foods.push("流亭猪蹄");
	foods.push("德州扒鸡");

	showFoodsByJoin(foods);

	foods.unshift("淄博烧饼");

	showFoodsByJoin(foods);
	/*
	向数组中添加1-n个元素或者从数组中删除元素，
	index必选，规定添加和删除元素的位置，index<0 时从数组尾部向前计数,-1表示最后一个元素，-2表示导数第二
	howmany必选，表示要删除元素的数量，0代表不删除数据
	[items]可选：表示向数组中添加和替换的元素
	*/
	foods.splice(2, 2, "北京烤鸭");	//从第二项开始删除两项，替换为“北京烤鸭”,总数减少一项

	showFoodsByJoin(foods);
	/* 从数组中返回指定的元素 */
	var betterFood = foods.slice(1, 4);	//
	document.write("<hr>获赞的美食：" + betterFood);
	document.write("<hr>获赞的美食反向显示：" + betterFood.reverse());

	var prices = [35, 82, 10, 16, 55];
	document.write("<hr>排序前的数组：" + prices);
	document.write("<hr>默认的排序方式：" + prices.sort());
	document.write("<hr>指定排序方式的排序：" + prices.sort(sortNumber));
}

/* 演示二维数组的实现 */
function matrixArray() {
	var title = new Array("电影类型", "电影名称", "票价");
	var movies = [
		["科幻", "流浪地球", 57.9],
		["动漫", "雾山五行", 27.9],
		["战争", "长津湖", 87.9],
		["历史", "我和我的父辈", 97.9],
	];
	document.write('<table width="400px" border="1" rules="all">');
	document.write("<tr>");
	for (var i = 0; i < title.length; i++) {
		document.write("<th>" + title[i] + "</th>");
	}
	document.write('</tr>');
	for (var i = 0; i < movies.length; i++) {
		document.write('<tr>');
		for (var j = 0; j < movies[i].length; j++) {
			document.write('<td>' + movies[i][j] + '</td>')
		}
		document.write('</tr>');
	}
	document.write('</table>');
}
