/* 8-7document对象-属性 */

// 1.referrer 属性:返回加载指定文档的URL地址
// alert(document.referrer);

// 2.cookie 属性
// 是浏览器客户端保存的用户访问服务器时的会话信息，该信息允许服务器端访问。cookie的本质是一个字符串

// document.cookie=cookieStr;

/* 追加cookie信息的分隔符 */
var cookieSplit = "@";
/* 新建cookie信息 */
function saveCookie(cookieName) {
	var userName = document.forms[0].userName.value;
	var userPwd = document.forms[0].userPwd.value;
	var saveTime = document.forms[0].saveTime.value;
	var expireDate = new Date();
	if (saveTime != "-1") {
		expireDate.setDate(expireDate.getDate() + saveTime);
	}
	document.cookie = cookieSplit +
		cookieName + "=" + escape(userName) + "," + escape(userPwd) +
		";expires=" + expireDate.toGMTString();
	loadCookie(cookieName);
}

/* 读取cookie信息 */
function loadCookie(cookieName) {
	/* 获取页面的cookie信息 */
	var currentCookie = document.cookie;
	var beginPart = cookieSplit + cookieName + "=";
	var startPosition = currentCookie.indexOf(beginPart);
	var cookieData = "";
	if (startPosition == -1) {
		document.forms[0].userName.value = "";
		document.forms[0].userPwd.value = "";
	} else {
		var endPosition = currentCookie.indexOf(";", startPosition);
		if (endPosition == -1) {
			endPosition == currentCookie.length;
		}
		cookieData = currentCookie.substring(startPosition + (beginPart).length, endPosition);
		var datas = cookieData.split(',');
		document.forms[0].userName.value = unescape(datas[0]);
		document.forms[0].userPwd.value = unescape(datas[1]);
	}
	$(".cookieDiv").get(0).innerHTML = "所有的Cookie信息：+<br/>" +
		(document.cookie == "" ? "<font color='red'>暂无cookie信息</font>" : document.cookie);
}
