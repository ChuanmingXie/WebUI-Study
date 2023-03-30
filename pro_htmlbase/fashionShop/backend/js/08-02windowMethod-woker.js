/* 8-2window对象-windowMethod-多线程设置动态时钟 */
var filePrefix = "<img src='images/number/Number_";
var fileSuffix = ".png'/>";

onmessage = function(e) {
	var dateStr = "";
	var myDate=e.data;
	var year = myDate.getFullYear();
	var month = myDate.getMonth() + 1;
	var date = myDate.getDate();
	var hour = myDate.getHours();
	var minute = myDate.getMinutes();
	var second = myDate.getSeconds();
	dateStr = numImage(year) + " " + "<b>年</b>" +
		numImage(fixTime(month)) + " " + "<b>月<b>" +
		numImage(fixTime(date)) + " " + "<b>日</b>" +
		numImage(fixTime(hour)) + " " + "<b>时</b>" +
		numImage(fixTime(minute)) + " " + "<b>分</b>" +
		numImage(fixTime(second)) + " " + "<b>秒</b>" + "<br/>";
	postMessage(dateStr);
}

function numImage(num) {
	var str = num.toString();
	var result = "";
	for (var i = 0; i < str.length; i++) {
		var c = "00" + str.charAt(i);
		result += filePrefix + c + fileSuffix;
	}
	return result;
}

function fixTime(time) {
	if (time < 10) {
		return "0" + time;
	}
	return time;
}
