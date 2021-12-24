/*  */

var filePrefix = "<img src='img/Number_";
var fileSuffix = ".png'/>";

(function() {
	var myDate = new Date();
	showPicTime(myDate);

	myDate.setFullYear(2045, 2, 23);
	myDate.setHours(11, 23, 54);
	showPicTime(myDate);

	myDate.setDate(myDate.getDate() + 5);
	showPicTime(myDate);
})()

function showPicTime(myDate) {
	var year = myDate.getFullYear();
	var month = myDate.getMonth() + 1;
	var date = myDate.getDate();
	var hour = myDate.getHours();
	var minute = myDate.getMinutes();
	var second = myDate.getSeconds();
	document.write(numImage(year) + "<img src='img/year.jpg' />" +"<span>年</span>"+
		numImage(fixTime(month)) + "<img src='img/month.jpg' />" +"<span>月</span>"+
		numImage(fixTime(date)) + "<img src='img/day.jpg' />" +"<span>日</span>"+
		numImage(fixTime(hour)) + "<img src='img/hour.jpg' />" +"<span>时</span>"+
		numImage(fixTime(minute)) + "<img src='img/minute.jpg' />" +"<span>分</span>"+
		numImage(fixTime(second)) + "<img src='img/second.jpg' />" + "<span>秒</span>"+ "<br/>")
}

function numImage(num) {
	var str = num.toString();
	var result = "";
	for (var i = 0; i < str.length; i++) {
		var c = "00"+str.charAt(i);
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
