function SetCookieValue(e, o, i, t) {
	var a = new Date;
	"number" == typeof i && 0 == isNaN(i) ? 0 != i ? "number" == typeof t && 0 == isNaN(t) && 1 == t ? a.setTime(a
			.getTime() + 1e3 * i) : a.setTime(a.getTime() + 24 * i * 3600 * 1e3) : a = null : a.setTime(a.getTime() +
			31536e8), document.cookie = e + "=" + escape(o) + (null != a ? ";expires=" + a.toGMTString() : "") +
		";path=/;domain=.caixin.com"
}

function GetCookieValue(e) {
	var o = e + "=";
	if (document.cookie.length > 0) {
		var i = document.cookie.indexOf(o);
		if (-1 != i) {
			i += o.length;
			var t = document.cookie.indexOf(";", i); - 1 == t && (t = document.cookie.length);
			var a = document.cookie.substring(i, t);
			return a.match(/%u/gi) ? unescape(a) : decodeURIComponent(a)
		}
		return ""
	}
}

function DelCookieValue(e) {
	GetCookieValue("SA_USER_auth") ? (SetCookieValue("SA_USER_NICK_NAME", "", -1), SetCookieValue("SA_USER_USER_PWD",
			"", -1), SetCookieValue("SA_USER_USER_TYPE", "", -1), SetCookieValue("SA_USER_USER_ACTIVE", "", -1),
		SetCookieValue("SA_USER_USER_SCHOLARSHIP", "", -1), SetCookieValue("SA_USER_EXT_FUNCTION", "", -1),
		SetCookieValue("UID", "", -1), SetCookieValue("SA_USER_UID", "", -1), SetCookieValue("SA_USER_auth", "", -
		1), window.location = e) : (SetCookieValue("SA_USER_weibouser[uid]", "", -1), SetCookieValue(
			"SA_USER_weibouser[name]", "", -1), SetCookieValue("SA_USER_weibouser[nickname]", "", -1),
		SetCookieValue("SA_USER_weibouser[avatar]", "", -1), SetCookieValue("SA_USER_weibouser[location]", "", -1),
		SetCookieValue("SA_USER_weibouser[weiboid]", "", -1), location.reload())
}

function logoutFn() {
	$.ajax({
		url: "https://gateway.caixin.com/api/ucenter/user/v1/logout",
		type: "GET",
		dataType: "jsonp",
		success: function(e) {
			0 == e.code ? (DelCookieValue(), window.location.reload()) : window.location.reload()
		}
	})
}

function calcTime(e, o) {
	var i = new Date;
	i.setTime(i.getTime() + 3600 * e * 1e3 * 24);
	var t = i.getTime() + 6e4 * i.getTimezoneOffset();
	return new Date(t + 36e5 * o)
}

function cookieInit() {
	if (GetCookieValue("SA_USER_auth")) var e = GetCookieValue("SA_USER_NICK_NAME");
	else if (GetCookieValue("SA_USER_weibouser[nickname]")) var e = GetCookieValue("SA_USER_weibouser[nickname]");
	else var e = "";
	if (SetCookieValue("backUrl", window.location.href, 365), GetCookieValue("SA_USER_auth")) var o =
		"<a href='https://u.caixin.com/user/userinfo.html'><b>" + e +
		"</b></a>　<a href='#' target='_self' onclick=\"javascript:logoutFn();\"><b>退出</b></a>";
	else if (GetCookieValue("SA_USER_weibouser[nickname]")) var o = "<b>" + e +
		"</b>　<a href='#' target='_self' onclick=\"javascript:javascript:logoutFn();\"><b>退出</b></a>";
	else if ("undefined" != typeof regFrom) var o = "<a href='" + mainUrl +
		"/usermanage/login/' target='_self'>财新通行证登录</a> <span>|</span> <a href='" + mainUrl +
		"/user/register.html' target='_self' rel='nofollow'>注册</a>";
	else var o = "<a href='" + mainUrl + "/usermanage/login/' target='_self'>财新通行证登录</a> <span>|</span> <a href='" +
		mainUrl + "/user/register.html' target='_self' rel='nofollow'>注册</a>";
	document.getElementById("showLoginId").innerHTML = o
}

function caixinCookieInit(e, o, i) {
	if (GetCookieValue("SA_USER_auth")) var t = GetCookieValue("SA_USER_NICK_NAME");
	else if (GetCookieValue("SA_USER_weibouser[nickname]")) var t = GetCookieValue("SA_USER_weibouser[nickname]");
	else var t = "";
	SetCookieValue("backUrl", window.location.href, 365);
	var a = ' <li><a href="https://mall.caixin.com" rel="nofollow">财新商城</a></li>';
	t ? "little" == i ? a +=
		' <li style="max-width: 100px;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;"><a href="https://u.caixin.com/user/userinfo.html" target="_self">' +
		t + '</a></li> <li><a href="#" target="_self" onclick="javascript:logoutFn();"s>退出</a></li>' : GetCookieValue(
			"SA_USER_weibouser[nickname]") ? a +=
		' <li style="max-width: 100px;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;"><span>' + t +
		'</span></li> <li><a href="#" target="_self" onclick="javascript:logoutFn();">退出</a></li>' : a +=
		' <li style="max-width: 100px;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;"><a href="https://u.caixin.com/user/userinfo.html" target="_self">' +
		t + '</a></li> <li><a href="#" target="_self" onclick="javascript:logoutFn();">退出</a></li>' : "undefined" !=
		typeof regFrom ? a += "little" == i ?
		' <li><a href="javascript:;" onclick="openLoginWindow() target="_self" rel="nofollow">登录</a></li> <li><a href="' +
		mainUrl + '/user/register.html" target="_self" rel="nofollow">注册</a></li>' :
		' <li><a href="javascript:;" onclick="openLoginWindow()" target="_self" rel="nofollow">登录</a></li> <li><a href="' +
		mainUrl + '/user/register.html" target="_self" rel="nofollow">注册</a></li>' : a +=
		' <li><a href="javascript:;" onclick="openLoginWindow()" target="_self" rel="nofollow">登录</a></li> <li><a href="' +
		mainUrl + '/user/register.html" target="_self" rel="nofollow">注册</a></li>', "little" == i ? document
		.getElementById("showLoginId").innerHTML = a : document.getElementById("showLoginId").innerHTML += a
}

function DOMReady(e) {
	document.addEventListener ? document.addEventListener("DOMContentLoaded", function() {
		document.removeEventListener("DOMContentLoaded", arguments.callee, !1), e()
	}, !1) : document.attachEvent && document.attachEvent("onreadystatechange", function() {
		"complete" == document.readyState && (document.detachEvent("onreadystatechange", arguments.callee), e())
	})
}

function runscript(s) {
	var jsIframe = window.document.createElement("iframe");
	with(jsIframe.style.display = "none", window.document.body.appendChild(jsIframe), window.frames[window.frames
		.length - 1]) document.open(), document.write(s), document.close()
}
DOMReady(function() {
	"undefined" == typeof openLoginWindow && (window.openLoginWindow = function() {
		window.location.href = "https://u.caixin.com/user/quick_login.html?url=" + encodeURIComponent(
			window.location.href)
	})
});
