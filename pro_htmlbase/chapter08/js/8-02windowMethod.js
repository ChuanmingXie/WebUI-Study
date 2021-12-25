/* 8-2window对象-windowMethod */

/* window对象方法的语法 */
/* 
// 1.open(url,name,features,relace);
var newWindow=window.open("http://www.baidu.com","弹出广告"
,"width=1300,height=400,toolbar=no,menubar=no,location=no,status=no,resizable=yes");

// 2.close()
newWindow.close();

// 3.setTimeout()
var id_Of_timeout=setTimeout(code,millisec);

// 4.clearTimeout()
clearTimeout(id_Of_timeout);

// 5.setInterval()
var id_Of_Interval=setInterval(code,millisec);

// 6.clearInterval()
clearInterval(id_Of_Interval);

 */

/* window对象-方法的演示-open|close|moveBy|setTimeout()|clearTimeout() */
var x = 0;
var y = 0;
var timer;
var myWindow;

function openWin() {
	myWindow = window.open('', '', 'width=200,height=200');
	myWindow.document.write('this is my create window');
}

function moveWin() {
	x += 10;
	y += 10;
	myWindow.moveBy(x, y);
	timer = setTimeout("moveWin()", 1000);
}

function stopMove() {
	clearTimeout(timer);
}

function closeWin() {
	myWindow.close();
}


/* 单线程- 动态钟表时间 
var filePrefix = "<img src='img/Number_";
var fileSuffix = ".png'/>";

(function() {
	setInterval("showCurrentTime()", 1000);
})()

function showCurrentTime() {
	var myDate = new Date();
	showTime(myDate);
}

function showTime(myDate) {
	var year = myDate.getFullYear();
	var month = myDate.getMonth() + 1;
	var date = myDate.getDate();
	var hour = myDate.getHours();
	var minute = myDate.getMinutes();
	var second = myDate.getSeconds();
	$(".timeDiv").get(0).innerHTML = numImage(year) + "<img src='img/year.jpg' />" + "<span>年</span>" +
		numImage(fixTime(month)) + "<img src='img/month.jpg' />" + "<span>月</span>" +
		numImage(fixTime(date)) + "<img src='img/day.jpg' />" + "<span>日</span>" +
		numImage(fixTime(hour)) + "<img src='img/hour.jpg' />" + "<span>时</span>" +
		numImage(fixTime(minute)) + "<img src='img/minute.jpg' />" + "<span>分</span>" +
		numImage(fixTime(second)) + "<img src='img/second.jpg' />" + "<span>秒</span>" + "<br/>"
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
*/