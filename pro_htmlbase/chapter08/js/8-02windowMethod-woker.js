/* 8-2window对象-windowMethod-多线程设置动态时钟 */
var filePrefix = "<img src='img/Number_";
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
	dateStr = numImage(year) + " " + "<span>年</span>" +
		numImage(fixTime(month)) + " " + "<span>月</span>" +
		numImage(fixTime(date)) + " " + "<span>日</span>" +
		numImage(fixTime(hour)) + " " + "<span>时</span>" +
		numImage(fixTime(minute)) + " " + "<span>分</span>" +
		numImage(fixTime(second)) + " " + "<span>秒</span>" + "<br/>";
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
