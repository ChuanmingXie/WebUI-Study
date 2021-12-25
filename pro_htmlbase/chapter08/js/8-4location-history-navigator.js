/* 8-4location|history|navigator对象-应用示例 */

/* 1.location-url */
var url = new URL("http://127.0.0.1:8848/WebUI-Study/pro_htmlbase/chapter08/8-02windowMethod.html?name=guoqy#myAnchor");
// var locations=Location;
// locations.href=url;
document.write("<h2>8-4location|history|navigator对象</h2>");
document.write("<h3>loaction对象-属性</h3>");
document.write("URL: " + url + " 的对象信如下:<br />")
document.write(url.protocol + "<br>");
document.write(url.host + "<br>");
document.write(url.hostname + "<br>");
document.write(url.port + "<br>");
document.write(url.hash + "<br>");
document.write(url.search + "<br>");
document.write(url.pathname + "<br>");
document.write("<hr />");

/* 2.history-方法 */
function goBack() {
	history.go(-1);
}

function histotyBack() {
	history.back();
}

function goForward() {
	history.go(1);
}

function historyForward() {
	history.forward();
}

/* 3.navigator-对象属性 */
document.write("<h3>navigator对象-属性</h3>");
document.write("浏览器:" + navigator.appName + "<br />");
document.write("浏览器版本:" + navigator.appVersion + "<br />");
document.write("浏览器代码:" + navigator.appCodeName + "<br />");
document.write("浏览器平台:" + navigator.platform + "<br />");
document.write("浏览器的Cookies启用情况:" + navigator.cookieEnabled + "<br />");
document.write("浏览器的用户代理报头:" + navigator.userAgent + "<br />");
document.write("<hr />");

function browserType() {
	var typeInfo = ["MSIE", "Trident", "Firefox", "Chrome", "safari", "netscape"]
	var explorer = navigator.userAgent;
	var isExists;
	for (var i = 0; i < typeInfo.length; i++) {
		if (explorer.indexOf(typeInfo[i])>=0) {
			isExists = typeInfo[i];
			break;
		}
	}
	alert('您的浏览器是:' + isExists);
}
