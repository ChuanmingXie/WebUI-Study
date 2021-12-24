/* Math对象-属性的使用 */
(function() {
	document.write('<br />Math.PI=' + Math.PI);
	document.write('<br />Math.E=' + Math.E);
	document.write('<br />Math.LN2=' + Math.LN2);
	document.write('<br />Math.LN10=' + Math.LN10);
	document.write('<br />Math.LOG2E=' + Math.LOG2E);
	document.write('<br />Math.LOG10E=' + Math.LOG10E);
	document.write('<br />半径为4的圆的面积' + circularArea(4));
	document.write("<br />半径为8，高为10的圆柱体的体积" + CylinderCapacity(8, 10));
})()

function circularArea(radius) {
	return Math.PI * radius * radius;
}

function CylinderCapacity(radius, height) {
	return Math.PI * radius * radius * height;
}


/* Math 对象-方法的使用 */
(function() {
	maxAndMin();
	var randomNum = 60 + Math.random() * 40;
	document.write("随机生成一个60-100之间的数：" + randomNum);
	document.write("<br />round()四舍五入的结果" + Math.round(randomNum));
	document.write("<br />ceil()向上取整的结果：" + Math.ceil(randomNum));
	document.write("<br />向下取整的结果：" + Math.floor(randomNum));
	document.write("<hr />");
	document.write("2的3次幂：" + Math.pow(2, 3));
	document.write("<br />16的平方根：" + Math.sqrt(16));
	document.write("<br />90<sup>o</sup>的正弦值是：" + Math.sin(90 * Math.PI / 180));
})()

function maxAndMin() {
	var num = 10;
	document.write("<br/><br/><hr />随机生成" + num + "个整数:");
	var array = [];
	var maxNum = 0;
	var minNum = 0;
	for (var i = 0; i < num; i++) {
		var tmp = Math.random() * 100;
		array[i] = Math.floor(tmp);
		document.write(array[i] + "\t");
		if (i == 0) {
			maxNum = array[0];
			minNum = array[0];
		} else {
			maxNum = Math.max(maxNum, array[i]);
			minNum = Math.min(minNum, array[i]);
		}
	}
	document.write("<br />随机数中，最大数为：" + maxNum);
	document.write("<br />随机数中，最小数为：" + minNum);
	document.write("<hr />")
}
