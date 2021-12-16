function getCookie(e) {
	var i, t = new RegExp("(^| )" + e + "=([^;]*)(;|$)");
	return (i = document.cookie.match(t)) ? unescape(i[2]) : null
}

function SetCookieValue(e, i, t, o) {
	var n = new Date;
	"number" == typeof t && 0 == isNaN(t) ? 0 != t ? "number" == typeof o && 0 == isNaN(o) && 1 == o ? n.setTime(n
			.getTime() + 1e3 * t) : n.setTime(n.getTime() + 24 * t * 3600 * 1e3) : n = null : n.setTime(n.getTime() +
			31536e8), document.cookie = e + "=" + escape(i) + (null != n ? ";expires=" + n.toGMTString() : "") +
		";path=/;domain=.caixin.com"
}

function GetCookieValue(e) {
	var i = e + "=";
	if (0 < document.cookie.length) {
		var t = document.cookie.indexOf(i);
		if (-1 == t) return "";
		t += i.length;
		var o = document.cookie.indexOf(";", t); - 1 == o && (o = document.cookie.length);
		var n = document.cookie.substring(t, o);
		return n.match(/%u/gi) ? unescape(n) : decodeURIComponent(n)
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
			0 == e.code && DelCookieValue(), window.location.reload()
		}
	})
}

function calcTime(e, i) {
	var t = new Date;
	t.setTime(t.getTime() + 3600 * e * 1e3 * 24);
	var o = t.getTime() + 6e4 * t.getTimezoneOffset();
	return new Date(o + 36e5 * i)
}

function StringBuffer() {
	this.buffer = [], arguments[0] && this.append(arguments[0])
}

function articlePopup() {
	ajax_bind("//gateway.caixin.com/api/ucenter/user/v1/valMobile", {}, function(e) {
		1e3 == e.code && openChooseLayerwz()
	})
}
document.writeln('<link href="//file.caixin.com/webchannel/all/css/dialog.css" rel="stylesheet" type="text/css" />'),
	document.writeln(
		"<script type='text/javascript' src='//file.caixin.com/webchannel/all/js/login-updata.js';><\/script>"),
	StringBuffer.prototype.append = function() {
		return this.buffer.push(arguments[0]), this
	}, StringBuffer.prototype.toString = function() {
		return this.buffer.join("")
	}, StringBuffer.prototype.release = function() {
		this.buffer = []
	}, $(function() {
		$(".regist span a").click(function(e) {
			var i = window.location.href;
			e.preventDefault(), getSearch("RegisterSource") ? window.location.href =
				"//u.caixin.com/user/register.html?RegisterSource=" + getSearch("RegisterSource") +
				"&url=" + encodeURIComponent(i) : window.location.href =
				"//u.caixin.com/user/register.html?url=" + encodeURIComponent(i)
		}), $("#showLoginId li:eq(1) a").click(function(e) {
			if ("退出" == $(this).html()) return !1;
			e.preventDefault(), getSearch("RegisterSource") ? window.location.href =
				"//u.caixin.com/user/register.html?RegisterSource=" + getSearch("RegisterSource") : window
				.location.href = "//u.caixin.com/user/register.html"
		});
		var i = $(".littlenav").offset().top - 23;
		$(".mainnav").before("<div class='nav_holder' style='display:none;height: " + ($(".mainnav").outerHeight(!
			0) + 35) + "px;'></div>"), $(window).scroll(function() {
			var e = $(this).scrollTop();
			i <= e ? ($(".logimage").hide(), $(".nav_holder").show(), $(".mainnav").addClass(
					"mainnavscroll"), $(".littlenav").addClass("littlenavscroll"), $(".littlenavmore")
				.show(), $(".nav_more").show()) : e < i && ($(".logimage").show(), $(".nav_holder")
				.hide(), $(".mainnav").removeClass("mainnavscroll"), $(".littlenav").removeClass(
					"littlenavscroll"), $(".littlenav").removeClass("more_display"), $(".littlenavmore")
				.hide(), $(".nav_more").hide())
		})
	}), /\d{9}.html/.test(window.location.href) && "" !== GetCookieValue("SA_USER_UID") && window.addEventListener(
		"load",
		function() {
			var e = getCookie("myStast"),
				i = new Date,
				t = i.getFullYear() + "-" + (i.getMonth() + 1) + "-" + i.getDate();
			e != t && (articlePopup(), setCookie("myStast", t))
		});
var validator = {
		phoneValidate: function() {
			var e = $("#tele").val();
			return e ? !!/^1\d{10}$/.test(e) || (layer.msg("手机号格式不正确"), !1) : (layer.msg("请输入手机号"), !1)
		},
		verificationCode: function() {
			return "" != $("#verification_Code").val() || (layer.msg("请输入验证码"), !1)
		}
	},
	variable = {
		sendingTimes: 0,
		countDown: 60,
		uuid: "",
		chooseLayer: ""
	};

function openChooseLayerwz() {
	navigator.userAgent.match(/iphone|ipad|itouch/gi) && window.scrollTo(0, 0), variable.chooseLayer = layer.open({
		type: 1,
		title: ["绑定手机号",
			"height:50px; font-size:24px;font-weight: 400; text-align: center; background:transparent; border:none; padding:61px 0px 20px 0px; line-height:50px;"
		],
		skin: "login-layer",
		closeBtn: 2,
		anim: -1,
		area: "550px",
		shadeClose: !0,
		content: "<div class='prompt_wz'>                    <p class='title_h2'>为了优化使用体验，让您更好的享受服务，请您完成手机号绑定验证。</p>                    <ul class='yanzheng'>                    <li><select class='select_login_wz'></select><p class='area_code_wz'>  +86 <i class='down_login'>></i></p><input type='text' class='inp'  id='tele' placeholder='请输入手机号'/></li>                    <li id='loginGraphic'><input type='text' name='password' id='Graphic' placeholder='请输入图形码'  /><span class='loginYan'><img src='https://gateway.caixin.com/api/ucenter/user/v1/validate_code?key=123' id='findcode_img' alt='code'></span></li>                    <li><input type='text' class='inp'  id='verification_Code'  placeholder='请输入验证码'/><button class='btn_yan isStast'>获取短信验证码</button></li>                    </ul>                    <p class='VoiceReg_bd'>收不到短信验证码？<a id='registCode_bd' href='javascript:;'>接收语音验证码</a></p>                    <button class='btn mybtn_bc'>确定</button>                    </div>",
		success: function(e, i) {
			$(".layui-layer-close").attr("target", "_self"), $("#registCode_bd").attr("target", "_self"),
				areaCodeRequest(), areaCodeChange(), submitBind(), $(".btn_yan").click(function() {
					VerifiedCode(this)
				});
			var t = !0;
			$(".VoiceReg_bd").on("click", "#registCode_bd", function() {
				var e = $(this).html(); - 1 != $(".btn_yan").html().indexOf("重新") ? $(".btn_yan")
					.html("重新" + e) : $("btn_yan").html(e), t ? $(this).html("获取短信验证码") : $(this)
					.html("接收语音验证码"), t = !t
			}), shouCodeMy(), $(".loginYan img").on("click", function() {
				shouCodeMy()
			})
		}
	})
}

function areaCodeRequest() {
	ajax_bind("//gateway.caixin.com/api/ucenter/inter/areacode", {}, function(e) {
		if (0 == e.code) {
			var i, t = "",
				o = "+";
			i = "string" == typeof e.data ? JSON.parse(e.data) : e.data, t += "<optgroup label='常用'>";
			for (var n = 0; n < i.common.length; n++) "86" == i.common[n].mobileSign ? t += "<option value='+" +
				i.common[n].mobileSign + "'  selected>" + o + i.common[n].mobileSign + "&emsp;" + i.common[n]
				.countriesZh + "</option>" : t += "<option value='+" + i.common[n].mobileSign + "'>" + o + i
				.common[n].mobileSign + "&emsp;" + i.common[n].countriesZh + "</option>";
			for (var a in t += "</optgroup>", i.begins) {
				t += "<optgroup label='" + a + "'>";
				for (var s = i.begins[a], r = 0; r < s.length; r++) t += "<option value='+" + s[r].mobileSign +
					"'>" + o + s[r].mobileSign + "&emsp;" + s[r].countriesZh + "</option>";
				t += "</optgroup>"
			}
			$(".select_login_wz").html(t), $(".select_login").html(t)
		} else $(".select_login_wz").html("<option value='+86'>中国</option>"), $(".select_login").html(
			"<option value='+86'>中国</option>")
	}, function() {
		$(".select_login_wz").html("<option value='+86'>中国</option>"), $(".select_login").html(
			"<option value='+86'>中国</option>")
	})
}

function areaCodeChange() {
	$(".select_login_wz").change(function() {
		var e = $(".select_login_wz").val() + "<i class='down_login'>></i>";
		($(".area_code_wz").html(e), "+86" == $(".select_login_wz").val()) ? variable.countDown <= 0 && 0 <
			variable.sendingTimes && ($(".VoiceReg_bd").show(), -1 != $("#registCode_bd").html().indexOf("语音") ?
				$(".btn_yan").html("重新获取短信验证码") : $(".btn_yan").html("重新接收语音验证码")): ($(".VoiceReg_bd").hide(),
				0 < variable.sendingTimes && variable.countDown <= 0 && $(".btn_yan").text("重新获取短信验证码"))
	})
}

function submitBind() {
	$(".mybtn_bc").click(function() {
		validator.phoneValidate() && validator.verificationCode() && (loading = layer.load(1, {
			shade: [.5, "#000"]
		}), ajax_bind("//gateway.caixin.com/api/ucenter/complete/completeMobile", {
			code: $("#verification_Code").val(),
			account: $("#tele").val(),
			channel: "",
			areaCode: $(".area_code_wz").text().match(/([+]\d+)/)[0]
		}, function(e) {
			layer.close(loading), 0 == e.code ? (layer.msg(e.msg), layer.close(variable
				.chooseLayer)) : 10301 == e.code ? (layer.close(variable.chooseLayer), window
				.location.href = "//u.caixin.com/user/setPwd.html?backUrl=" +
				encodeURIComponent(window.location.href)) : 10401 == e.code ? loginBind_tips(
				data) : layer.msg(e.msg)
		}))
	})
}

function VerifiedCode(e) {
	var i = $(e);
	if (!i.is(".getting") && validator.phoneValidate()) {
		var t = $(i).html();
		if (-1 != t.indexOf("短信")) var o = 0;
		else if (-1 != t.indexOf("语音")) o = 1;
		var n = {
			account: $("#tele").val(),
			type: 10,
			sendMode: o,
			areaCode: $(".area_code_wz").text().match(/([+]\d+)/)[0]
		};
		if (!$("#loginGraphic").is(":hidden")) {
			if ("" == $("#Graphic").val()) return layer.msg("请输入图形码"), !1;
			n.vcode = $("#Graphic").val(), n.vkey = variable.uuid
		}
		loading = layer.load(1, {
			shade: [.5, "#000"]
		}), $.get("//gateway.caixin.com/api/ucenter/user/v1/sendCodeJsonp", n, function(e) {
			layer.close(loading), 0 == e.code ? ($(".VoiceReg_bd").hide(), timeCount.call(i)) : layer.msg(e.msg)
		}, "jsonp")
	}
}

function timeCount() {
	var i = $(this),
		t = i.text();
	variable.countDown = 60, variable.sendingTimes++, i.addClass("getting"), i.text("已发送" + variable.countDown);
	var o = setInterval(function() {
		if (0 < variable.countDown) variable.countDown--, i.text("已发送" + variable.countDown);
		else if (i.text(t), i.removeClass("getting"), clearInterval(o), shouCodeMy(), 0 < variable
			.sendingTimes) {
			var e = $(".btn_yan").html();
			"+86" == $(".select_login_wz").val() ? ($(".VoiceReg_bd").show(), -1 == e.indexOf("重新") && $(
				".btn_yan").html("重新" + e)) : $(".btn_yan").html("重新接收短信验证码")
		}
	}, 1e3)
}

function shouCodeMy() {
	variable.uuid = uuid(), ajax_bind("https://gateway.caixin.com/api/ucenter/authcode/viewImageCode/" + variable
	.uuid, {}, function(e) {
		0 == e.code && (window.yanzState = e.data.view), 0 == e.code && e.data.view && ($("#loginGraphic")
		.show(), $("#findcode_img").attr("src", "data:image/png;base64," + e.data.image))
	})
}

function uuid() {
	for (var e = [], i = "0123456789abcdef", t = 0; t < 36; t++) e[t] = i.substr(Math.floor(16 * Math.random()), 1);
	return e[14] = "4", e[19] = i.substr(3 & e[19] | 8, 1), e[8] = e[13] = e[18] = e[23] = "-", e.join("")
}

function loginBind_tips(t) {
	tipsCon = layer.open({
		type: 1,
		btn: ["注销当前账号", "下次再说"],
		title: ["提示信息",
			"padding:10px 0px; text-align:center; border:none; font-size:21px;font-weight: 900;background-color:#e3e3e3"
		],
		skin: "Cancelled_t",
		closeBtn: 0,
		anim: -1,
		area: "350px",
		shadeClose: !1,
		content: "<div class='Cancelled_con zc_bind_three'>要绑定的手机号已经是独立的财新账号，无法与当前账号进行绑定，您可以选择注销一个账号后再次进行绑定操作。</div>",
		shade: .5,
		btnAlign: "c",
		btn1: function(e, i) {
			window.location.href = "//u.caixin.com/user/cancellation.html"
		},
		btn2: function(e, i) {
			loading = layer.load(1, {
				shade: [.5, "#000"]
			}), t.validateAccount = 1, ajax_bind(
				"//gateway.caixin.com/api/ucenter/complete/completeMobile", t,
				function(e) {
					layer.close(loading), 0 == e.code ? (layer.msg(e.msg), layer.close(variable
							.chooseLayer), window.location.href =
						"//u.caixin.com/user/setPwd.html?backUrl=" + encodeURIComponent(window
							.location.href)) : 10401 == e.code ? loginBind_tips(t) : layer.msg(e
						.msg)
				})
		}
	})
}

function ajax_bind(e, i, t, o) {
	$.ajax({
		url: e,
		type: "GET",
		dataType: "jsonp",
		jsonp: "callback",
		data: i,
		success: function(e) {
			t(e)
		},
		error: function() {
			o && o()
		}
	})
}

function openLoginWindow() {
	var e = window.location.href;
	window.location.href = "https://u.caixin.com/user/quick_login.html?url=" + encodeURIComponent(e)
}

function checkUser() {
	var e = GetCookieValue("SA_USER_UID"),
		i = GetCookieValue("SA_USER_NICK_NAME");
	return e && i ? 3 : 0
}

function initCommentLogn() {
	if (!checkUser()) {
		$("#txz_popbox,#txz_popbox_end").remove();
		$("body").append(
			'<div id="txz_popbox_end" class="fade loginbgFiexd"></div>                        <div class="loginpopboxFiexd" id="txz_popbox">                        <div class="close-box"><p id="closeLogin"><img src="//file.caixin.com/webchannel/pcuser/images/icon-close.png" /></p></div>                        <div  class="popup-con" id="popup-con-front">                        <div class="tit-login">登录</div>                        <p class="loginGuide">请使用购买账号登录，其他需要请点击<a href="http://m.corp.caixin.com/m/caixinhelp/">帮助</a></p>                        <ul class="login-list">                        <a href="javascript:;" target="_self" target="_self">                        <li class="phone" >                        <span><img src="//file.caixin.com/wapchannel/login/images/cx-login-icon.png"></span>                        <p>财新账号登录</p></li></a>                        <a href="javascript:;" target="_self" onClick="gothlogin(4)">                        <li class="weixin">                        <span><img src="//file.caixin.com/webchannel/pcuser/images/icon-wx.png"></span>                        <p>微信快捷登录</p></li></a>                        <a href="javascript:;" target="_self" onClick="gothlogin(2);">                        <li class="weibo">                        <span><img src="//file.caixin.com/webchannel/pcuser/images/icon-sinawb.png"></span>                        <p>微博快捷登录</p></li></a>                        <a href="javascript:;" target="_self" onClick="gothlogin(3);">                        <li class="qq_none" style="color:#0eb8f6">                        <span><img src="//file.caixin.com/webchannel/pcuser/images/icon-qq.png"></span>                        <p>QQ快捷登录</p>                        </li></a></ul>                        <ul class="login-other margin-t01"><li class="free-read"></li>                        <li class="regist">还没有财新账号？<span><a href="//u.caixin.com/user/register.html" target="_self">立即注册</a></span></li></ul>                        </div></div></div>'
			), $("em.error").css({
			color: "#ff0505",
			width: "auto",
			"font-size": "12px"
		}), $(".pw-tips").css({
			height: "14px",
			display: "block",
			"font-style": "normal",
			"text-align": "right"
		})
	}
}
window.gothlogin || document.writeln(
		"<script type='text/javascript' src='//file.caixin.com/webchannel/all/js/login-updata.js';><\/script>"),
	initCommentLogn(), $(document).on("click", ".phone", function() {
		var e = window.location.href;
		window.location.href = "//u.caixin.com/user/login.html?url=" + encodeURIComponent(e)
	}), LogoutHost = "www.caixin.com";
var mainPath = "http://u.caixin.com",
	mainUrl = "http://u.caixin.com",
	SA_USER_auth = GetCookieValue("SA_USER_auth"),
	LoginNickNAME = GetCookieValue("SA_USER_NICK_NAME"),
	LoginUserNAME = GetCookieValue("SA_USER_USER_NAME"),
	SA_USER_WEIBO_NICKNAME = GetCookieValue("SA_USER_weibouser[nickname]"),
	UID = GetCookieValue("UID"),
	ran = Math.round(1e9 * Math.random()),
	getUseAuth = !1;

function ads_display(e) {
	var i = 0;
	if (GetCookieValue("SA_USER_UID")) {
		var t = GetCookieValue("CX_USER_PERMISSION");
		t && /PRO|QZSF|CXZK/i.test(t) ? i = 1 : t || getUseAuth || (getUseAuth = !0, $.ajax({
			url: "//gateway.caixin.com/api/purchase/auth/findUseAuthCodeByUser",
			type: "GET",
			dataType: "jsonp",
			jsonp: "callback",
			data: {
				uid: GetCookieValue("SA_USER_UID")
			},
			success: function(e) {
				if (0 == e.code) {
					var i = e.data.goodsTypeCodes;
					i.push(GetCookieValue("SA_USER_UID"));
					var t = new Date;
					t.setDate(t.getDate() + 1), setCookieUpdate("CX_USER_PERMISSION", i.join(","), t,
						"/", "caixin.com")
				}
			}
		}))
	}
	try {
		if ("undefined" != typeof entity && 176 == entity.channel) return $("#taboola-below-article-thumbnails").hide(),
			$("#taboola-below-article-thumbnails-2").hide(), !1;
		var o;
		if (document.referrer) o = document.referrer.match(/[^\?]+/g)[0].replace(/(\.html|\/)$/, "").match(
			/\/([^\/]+$)/)[1];
		document.writeln("<script type='text/javascript' src='https://pinggai" + Math.floor(10 * Math.random()) +
			".caixin.com/s?z=caixin&c=" + e + "&slot=" + ran + "&_attr_user=" + i + "&_referrer=" +
			encodeURIComponent(o) + "'><\/script>")
	} catch (e) {}
}

function bgyouhua(e) {
	var i = 0;
	if (GetCookieValue("SA_USER_UID")) {
		var t = GetCookieValue("CX_USER_PERMISSION");
		t && /PRO|QZSF|CXZK/i.test(t) ? i = 1 : t || getUseAuth || (getUseAuth = !0, $.ajax({
			url: "//gateway.caixin.com/api/purchase/auth/findUseAuthCodeByUser",
			type: "GET",
			dataType: "jsonp",
			jsonp: "callback",
			data: {
				uid: GetCookieValue("SA_USER_UID")
			},
			success: function(e) {
				if (0 == e.code) {
					var i = e.data.goodsTypeCodes;
					i.push(GetCookieValue("SA_USER_UID"));
					var t = new Date;
					t.setDate(t.getDate() + 1), setCookieUpdate("CX_USER_PERMISSION", i.join(","), t,
						"/", "caixin.com")
				}
			}
		}))
	}
	try {
		var o;
		if (document.referrer) o = document.referrer.match(/[^\?]+/g)[0].replace(/(\.html|\/)$/, "").match(
			/\/([^\/]+$)/)[1];
		document.writeln("<script type='text/javascript' src='https://pinggai" + Math.floor(10 * Math.random()) +
			".caixin.com/s?z=caixin&c=" + e + "&slot=" + ran + "&_attr_user=" + i + "&_referrer=" +
			encodeURIComponent(o) + "'><\/script>")
	} catch (e) {}
}

function setTopLogin() {
	var e = "";
	SA_USER_auth ? e = LoginNickNAME : SA_USER_WEIBO_NICKNAME && (e = SA_USER_WEIBO_NICKNAME), SetCookieValue("backUrl",
		window.location.href, 365);
	var i = "";
	initCommentLogn(), i += e ? SA_USER_WEIBO_NICKNAME ? " <li><span>" + e +
		'</span></li> <li><a href="#" target="_self" onclick="javascript:logoutFn();">退出</a></li>' :
		' <li><a href="//u.caixin.com/user/userinfo.html" target="_self">' + e +
		'</a></li> <li><a href="#" target="_self" onclick="javascript:logoutFn();">退出</a></li>' :
		' <li><a href="javascript:;" onclick="openLoginWindow()" target="_self" rel="nofollow">登录</a></li> <li><a href="' +
		mainUrl + '/user/register.html" target="_self" rel="nofollow">注册</a></li>', document.getElementById(
			"showLoginId").innerHTML += i
}

function scrollNews(e, i) {
	var t, o = $(e);
	o.hover(function() {
		clearInterval(t)
	}, function() {
		t = setInterval(function() {
			var e, i;
			e = o.find("ul:first"), i = e.find("li:first").height(), e.animate({
				marginTop: -i + "px"
			}, 600, function() {
				e.css({
					marginTop: 0
				}).find("li:first").appendTo(e)
			})
		}, i)
	}).trigger("mouseleave")
}
$(function() {
	scrollNews(".scrollnews", 3e3), scrollNews(".scrollnewsvideo", 3e3)
});
var zyqhnumber1 = 0,
	indexlb1;

function ohpage1(e) {
	dom = document.getElementById("zyqh").getElementsByTagName("dl");
	for (var i = 0; i < dom.length; i++) dom[i].style.display = "none";
	"++" == e ? (window.clearInterval(indexlb1), ++zyqhnumber1 == dom.length && (zyqhnumber1 = 0), clickpage(
			zyqhnumber1), dom[zyqhnumber1].style.display = "", indexlb1 = setTimeout("ohpage1('++')", 5e3)) : null !=
		e ? (window.clearInterval(indexlb1), clickpage(zyqhnumber1 = e), dom[zyqhnumber1].style.display = "") : (
			zyqhnumber1 = 0, dom[zyqhnumber1].style.display = "", indexlb1 = setTimeout("ohpage1('++')", 5e3))
}

function thepagecsh1() {
	dom = document.getElementById("zyqh").getElementsByTagName("dl");
	for (var e = "", i = 0; i < dom.length; i++) e += i == zyqhnumber1 ? "<li onmouseover='ohpage1(" + i +
		")' onmouseout='mouseOutPoint(" + i + ")' class='sxs1'>" + (i + 1) + "</li>" : "<li onmouseover='ohpage1(" + i +
		")' onmouseout='mouseOutPoint(" + i + ")' class='sxs'>" + (i + 1) + "</li>";
	document.getElementById("zyqhpg").innerHTML = e
}

function mouseOutPoint(e) {
	indexlb1 = setTimeout("ohpage1('++')", 5e3)
}

function clickpage(e) {
	if (e < dom.length) {
		dom1 = document.getElementById("zyqhpg").getElementsByTagName("li");
		for (var i = 0; i < dom1.length; i++) dom1[i].className = "sxs";
		dom1[zyqhnumber1].className = "sxs1"
	}
}

function setTab(e, t, o) {
	for (i = 1; i <= o; i++) {
		var n = document.getElementById(e + i),
			a = document.getElementById("col_" + e + "_" + i);
		n.className = i == t ? "current" : "", a.style.display = i == t ? "block" : "none"
	}
}

function ScrollObject(div_content, list1, list2, _this, args) {
	this.Speed_1 = 20, this.Space_1 = 20, this.PageWidth_1 = 624, this.interval_1 = 7e3, this.fill_1 = 0, this
		.MoveLock_1 = !1, this.MoveTimeObj_1, this.MoveWay_1 = "right", this.Comp_1 = 0, this.override = function(e,
		i) {
			for (var t in i) e[t] = i[t]
		}, args && this.override(this, args), this.GetObj = function(objName) {
			return document.getElementById ? eval('document.getElementById("' + objName + '")') : eval("document.all." +
				objName)
		}, this.SoBody = this.GetObj(div_content), this.List1 = this.GetObj(list1), this.ISL_GoUp_1 = function() {
			this.MoveLock_1 || (this.MoveLock_1 = !0, this.MoveWay_1 = "left", this.MoveTimeObj_1 = setInterval(_this +
				".ISL_ScrUp_1();", this.Speed_1))
		}, this.ISL_StopUp_1 = function() {
			"right" != this.MoveWay_1 && (clearInterval(this.MoveTimeObj_1), (this.SoBody.scrollLeft - this.fill_1) %
				this.PageWidth_1 != 0 ? (this.Comp_1 = this.fill_1 - this.SoBody.scrollLeft % this.PageWidth_1, this
					.CompScr_1()) : this.MoveLock_1 = !1)
		}, this.ISL_ScrUp_1 = function() {
			this.SoBody.scrollLeft <= 0 && (this.SoBody.scrollLeft = this.SoBody.scrollLeft + this.List1.offsetWidth),
				this.SoBody.scrollLeft -= this.Space_1
		}, this.ISL_GoDown_1 = function() {
			clearInterval(this.MoveTimeObj_1), this.MoveLock_1 || (this.MoveLock_1 = !0, this.MoveWay_1 = "right", this
				.ISL_ScrDown_1(), this.MoveTimeObj_1 = setInterval(_this + ".ISL_ScrDown_1()", this.Speed_1))
		}, this.ISL_StopDown_1 = function() {
			"left" != this.MoveWay_1 && (clearInterval(this.MoveTimeObj_1), this.SoBody.scrollLeft % this.PageWidth_1 -
				(0 <= this.fill_1 ? this.fill_1 : this.fill_1 + 1) != 0 ? (this.Comp_1 = this.PageWidth_1 - this
					.SoBody.scrollLeft % this.PageWidth_1 + this.fill_1, this.CompScr_1()) : this.MoveLock_1 = !1)
		}, this.ISL_ScrDown_1 = function() {
			this.SoBody.scrollLeft >= this.List1.scrollWidth && (this.SoBody.scrollLeft = this.SoBody.scrollLeft - this
				.List1.scrollWidth), this.SoBody.scrollLeft += this.Space_1
		}, this.CompScr_1 = function() {
			if (0 != this.Comp_1) {
				var e, i = this.Speed_1,
					t = this.Space_1;
				Math.abs(this.Comp_1) < this.PageWidth_1 / 2 && (t = Math.round(Math.abs(this.Comp_1 / this.Space_1))) <
					1 && (t = 1), this.Comp_1 < 0 ? (this.Comp_1 < -t ? (this.Comp_1 += t, e = t) : (e = -this.Comp_1,
						this.Comp_1 = 0), this.SoBody.scrollLeft -= e) : (this.Comp_1 > t ? (this.Comp_1 -= t, e = t) :
						(e = this.Comp_1, this.Comp_1 = 0), this.SoBody.scrollLeft += e), setTimeout(_this +
						".CompScr_1()", i)
			} else this.MoveLock_1 = !1
		}, this.GetObj(list2).innerHTML = this.List1.innerHTML, this.SoBody.scrollLeft = 0 <= this.fill_1 ? this
		.fill_1 : this.List1.scrollWidth - Math.abs(this.fill_1)
}

function gotoLink(e) {
	"" != e.value && (window.location.href = e.value)
}

function get_avatar(e, i, t) {
	void 0 === i && (i = "middle"), void 0 === t && (t = "real");
	for (var o = 0, n = 9 - (e = Math.abs(parseInt(e)).toString()).length; o < n; o++) e = "0" + e;
	var a = "real" == t ? "_real" : "";
	return "//getavatar.caixin.com/" + e.substr(0, 3) + "/" + e.substr(3, 2) + "/" + e.substr(5, 2) + "/" + e.substr(-
		2) + a + "_avatar_" + i + ".jpg"
}

function runscript(s) {
	var jsIframe = window.document.createElement("iframe");
	with(jsIframe.style.display = "none", window.document.body.appendChild(jsIframe), window.frames[window.frames
		.length - 1]) document.open(), document.write(s), document.close()
}
$(function() {
	0 < window.location.href.indexOf("?utm_source=UP&utm_medium=PCKeHuDuan&utm_campaign=HeZuo") && $(
		".adsame-banner-box").hide()
}), $(function() {
	try {
		$("#sidetab3").length && $("#sidetab3").hasClass("current") && ($("#sidetab3").parent().css("height",
			"110px"), $("#sidetab3 > .pos-rel").show())
	} catch (e) {}
}), "undefined" == typeof topNavIndex && (topNavIndex = -1);
var currentIndex = topNavIndex;

function hoverLi(e) {
	$(".ywList .dis").attr("class", "undis"), $(".ywTab .hovertab").attr("class", "normaltab"), $("#container_" + e)
		.attr("class", "dis"), $("#bt_" + e).attr("class", "hovertab")
}

function buildBlogString(e) {
	var i = "",
		t = "";
	return t = 0 < e.time.indexOf("-") ? e.time.substr(5, 2) + "月" + e.time.substr(8, 2) + "日 " + e.time.substr(11, 5) :
		e.time, i += '<div class="boxc">', i += '<div class="pic"><a href="' + e.edit.link + '"><img src="' + e.edit
		.head + '" alt="' + e.edit.name + '"></a></div>', i += '<h4><a href="' + e.link + '">' + e.desc + "</a>", 5 == e
		.attr && (i += '<div class="icon_key" title="收费文章"></div>'), 5 != e.attr && e.freeTime && (+e.freeDuration ?
			i += '<div class="icon_time_' + e.freeDuration + '" title="限时免费"></div>' : i +=
			'<div class="icon_time" title="限时免费"></div>'), null != e.form && (i += '<i><a href="' + e.form.url + '">' +
			e.form.txt + "</a></i>"), i += "<em>博客</em>", i += "</h4>", i += '<span><a href="' + e.edit.link + '">' + e
		.edit.name + "</a> " + e.edit.desc + "</span> <span>" + t + "</span>", i += "<p>" + e.summ + "</a></p>", i +=
		'<div class="tag">', i += '<i><a href="' + e.link + '#gocomment">评论(<em aid="' + e.comm.aid + '" tid="' + e.comm
		.tid + '">0</em>)</a></i>', i += "</div>", i += "</div>"
}

function buildPictString(t) {
	var o = "",
		e = "";
	return e = 0 < t.time.indexOf("-") ? t.time.substr(5, 2) + "月" + t.time.substr(8, 2) + "日 " + t.time.substr(11, 5) :
		t.time, o += '<div class="boxb">', o += '<h4><a href="' + t.link + '">' + t.desc + "</a>", 5 == t.attr && (o +=
			'<div class="icon_key" title="收费文章"></div>'), 5 != t.attr && t.freeTime && (+t.freeDuration ? o +=
			'<div class="icon_time_' + t.freeDuration + '" title="限时免费"></div>' : o +=
			'<div class="icon_time" title="限时免费"></div>'), null != t.form && (o += '<i><a href="' + t.form.url + '">' +
			t.form.txt + "</a></i>"), o += "<em>图片</em>", o += "</h4>", o += "<span>", "" != t.edit.name && (o += t.edit
			.name + " "), o += e + "</span>", null != t.pict && null != t.pict.imgs && 0 < t.pict.imgs.length && (o +=
			'<div class="pic">', $.each(t.pict.imgs, function(e, i) {
				o += '<a href="' + t.link + '"><img src="' + i.url + '" alt="' + t.desc + '"></a>'
			}), o += "</div>"), o += '<div class="tag">', o += '<i><a href="' + t.link + '#gocomment">评论(<em aid="' + t
		.comm.aid + '" tid="' + t.comm.tid + '">0</em>)</a></i>', o += "</div>", o += "</div>"
}

function buildSameString(t) {
	var o = "",
		e = "";
	return e = 0 < t.time.indexOf("-") ? t.time.substr(5, 2) + "月" + t.time.substr(8, 2) + "日 " + t.time.substr(11, 5) :
		t.time, o += '<div class="boxa">', null != t.pict && null != t.pict.imgs && 0 < t.pict.imgs.length && (o +=
			'<div class="pic">', $.each(t.pict.imgs, function(e, i) {
				o += '<a href="' + t.link + '"><img src="' + i.url + '" alt="' + t.desc + '"></a>'
			}), o += "</div>"), o += '<h4><a href="' + t.link + '">' + t.desc + "</a>", 5 == t.attr && (o +=
			'<div class="icon_key" title="收费文章"></div>'), 5 != t.attr && t.freeTime && (+t.freeDuration ? o +=
			'<div class="icon_time_' + t.freeDuration + '" title="限时免费"></div>' : o +=
			'<div class="icon_time" title="限时免费"></div>'), null != t.form && (o += '<i><a href="' + t.form.url + '">' +
			t.form.txt + "</a></i>"), 3 == t.type && (o += "<em>视听</em>"), o += "</h4>", o += "<span>", "" != t.edit
		.name && (o += t.edit.name + " "), o += e + "</span>", o += '<p><a href="' + t.link + '">' + t.summ +
		"</a></p>", o += '<div class="tag">', o += '<i><a href="' + t.link + '#gocomment">评论(<em aid="' + t.comm.aid +
		'" tid="' + t.comm.tid + '">0</em>)</a></i>', o += "</div>", o += "</div>"
}

function buildHtmlString(e) {
	return 4 == e.type ? buildBlogString(e) : 2 == e.type ? buildPictString(e) : buildSameString(e)
}

function loadMoreNewses(i, t, o, n) {
	$.getJSON("//tag.caixin.com/news/homeInterface.jsp?channel=" + t + "&start=" + o * n + "&count=" + n +
		"&picdim=_145_97&callback=?",
		function(e) {
			0 < e.maxes && (e.start + e.count >= e.maxes ? $("#moreArticle").html("") : $("#moreArticle").html(
				'<a target="_self" href="javascript:void(0);" onClick="loadMoreNewses(' + i + "," + t +
				"," + (o + 1) + "," + n + ');">加载更多文章</a>'), $.each(e.datas, function(e, i) {
				$("#listArticle").append(buildHtmlString(i))
			}), countComment())
		})
}

function loadMoreNewsesWhenMores(i, t, o, n, e) {
	var a = $(e).parent("#moreArticle"),
		s = t.toString(),
		r = "channel";
	if (9 == (s = s.split(";")[0]).length) r = "subject";
	else if (3 == s.length) r = "channel";
	$.getJSON("//tag.caixin.com/news/homeInterface.jsp?" + r + "=" + t + "&start=" + o * n + "&count=" + n +
		"&picdim=_145_97&callback=?",
		function(e) {
			0 < e.maxes && (e.start + e.count >= e.maxes ? $(a).html("") : $(a).html(
				'<a target="_self" href="javascript:void(0);" onClick="loadMoreNewsesWhenMores(' + i + "," +
				t + "," + (o + 1) + "," + n + ',this);">加载更多文章</a>'), $.each(e.datas, function(e, i) {
				$(a).siblings(".ywListCon").append(buildHtmlString(i))
			}), countComment())
		})
}
$(function() {
	var t = $(".mainNav:first"),
		e = $(".menu_con_box:first"),
		o = e.find(".sub-menu"),
		n = !0,
		a = setTimeout(function() {}, 0);

	function s(e) {
		-1 < topNavIndex && (t.find("td").eq(e).addClass("current"), o.eq(e).show())
	}
	s(topNavIndex), t.on("mouseenter", "td", function() {
		var e = $(this);
		currentIndex = t.find("td").index(e), e.addClass("current").siblings().removeClass("current"), o
			.eq(currentIndex).show().siblings().hide(), a && clearTimeout(a)
	}), t.on("mouseleave", "td", function() {
		var e = $(this),
			i = t.find("td").index(e);
		a = setTimeout(function() {
			n && (e.removeClass("current"), o.eq(i).hide(), s(topNavIndex), topNavIndex)
		}, 500)
	}), e.on("mouseenter", ".sub-menu", function() {
		n = !1
	}), e.on("mouseleave", ".sub-menu", function() {
		n = !0, t.find("td").eq(currentIndex).removeClass("current"), o.eq(currentIndex).hide(), s(
			topNavIndex)
	})
}), $(document).on("click", "a.link-to-bbd", function(e) {
	e.preventDefault(), e.stopPropagation();
	var i = this.href.split("?"),
		t = "",
		o = getCookie("USER_LOGIN_CODE");
	return 2 == i.length && (t = i[1]), location.href = i[0] + "?from=caixin&code=" + o + "&" + t, !1
}), $(function() {
	topNavIndex;
	var i = $(".mainnav:first"),
		e = setTimeout(function() {}, 0);

	function t(e) {
		-1 < topNavIndex && i.find(".navtabs").eq(e).addClass("current")
	}
	t(topNavIndex), $(".navtabs").mouseover(function() {
		$(".navtabs").removeClass("current"), $(this).addClass("current"), e && clearTimeout(e)
	}), $(".navtabs").mouseout(function() {
		$(this).removeClass("current"), e = setTimeout(function() {
			t(topNavIndex), topNavIndex
		}, 500)
	}), $(".nav_more").click(function() {
		$(".littlenavscroll").toggleClass("more_display")
	})
});
var not_popbox = !0;

function caixinPostShare(e, i, t, o, n, a) {
	i += encodeURIComponent(""), userUrl = "http://user.caixin.com/share/index/?", "function" == typeof setIntegral &&
		setIntegral("cxArticleShare");
	switch (e) {
		case "email":
			postPopUp(userUrl + "webid=email&url=" + o + "&title=" + i);
			break;
		case "qqweibo":
			"undefined" == typeof srcinfoid && (srcinfoid = 0);
			encodeURI("39e9ee0a88cd4e77bbb10881a6af9d26");
			window.open("https://c2.caixin.com/comment-api-caixin/comment/shareToTencent.do?id=" + srcinfoid + "&url=" +
				o + "&content=" + i + "&picurl=" + n + "&appid=" + a, "newwindow",
				"height=445,width=578,toolbar =no,menubar=no,scrollbars=no,resizable=no,location=no,status=no");
			break;
		case "tsina":
			var s = !1;
			[{
				uid: 642952,
				originReferrer: "weibo_caixinwang"
			}, {
				uid: 660666,
				originReferrer: "weibo_caixinweekly"
			}].forEach(function(e) {
					cxuid == e.uid && (s = !0, o = -1 < o.indexOf("?") ? o + "&originReferrer=" + e.originReferrer :
						o + "?originReferrer=" + e.originReferrer)
				}), s || (-1 < o.indexOf("?") ? o += "&originReferrer=weibo" : o += "?originReferrer=weibo"),
				"undefined" == typeof srcinfoid ? postPopUp("http://user.caixin.com/share/send/?webid=tsina&url=" + o +
					"&title=" + i + "&pic=" + n) : window.open(
					"https://c2.caixin.com/comment-api-caixin/comment/shareToSina.do?id=" + srcinfoid + "&url=" + o +
					"&content=" + i + "&picurl=" + n + "&appid=" + a, "newwindow",
					"height=445,width=578,toolbar=no,menubar=no,scrollbars=no,resizable=no,location=no,status=no");
			break;
		case "t163":
			postPopUp("http://user.caixin.com/share/send/?webid=t163&url=" + o + "&title=" + i);
			break;
		case "kaixin001":
			postPopUp(userUrl + "webid=kaixin001&url=" + o + "&title=" + i);
			break;
		case "douban":
			postPopUp(userUrl + "webid=douban&url=" + o + "&title=" + i);
			break;
		case "renren":
			postPopUp(userUrl + "webid=renren&url=" + o + "&title=" + i);
			break;
		case "xianguo":
			postPopUp(userUrl + "webid=xianguo&url=" + o + "&title=" + i);
			break;
		case "qzone":
			postPopUp("http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=" + o);
			break;
		case "tsohu":
			postPopUp("http://user.caixin.com/share/send/?webid=tsohu&url=" + o + "&title=" + i);
			break;
		case "baidu":
			postPopUp("http://user.caixin.com/share/send/?webid=baidu&url=" + o + "&title=" + i);
			break;
		case "google":
			postPopUp(userUrl + "webid=google&url=" + o + "&title=" + i)
	}
}

function caingPostShare(e, i, t, o, n, a) {
	if (void 0 === t && (t = ""), void 0 === n && (n = ""), void 0 === a && (a = 100), i += encodeURIComponent(""),
		"qqweibo" == e || "tsina" == e) {
		var s = GetCookieValue("SA_USER_UID"),
			r = GetCookieValue("SA_USER_NICK_NAME");
		if (s && r) caixinPostShare(e, i, t, o, n, a);
		else if ("NOTREG" != GetCookieValue("SA_USER_SHARE")) {
			if (not_popbox) {
				var c = "<div class='bindSucceed'>";
				c += "<div id='bsh_popbox' class='bindSucceedBox' style='display:none;'>", c +=
					"<p>您将微博帐号与财新网通行证进行绑定，即刻实现文章分享的便捷与评论互通的畅快。</p>", c += "<div>", c +=
					"<a class='btn_a' href='javascript:void(0);' onClick='javascript:yesBindShare(\"" + e + '","' + i +
					'","' + t + '","' + o + '","' + n + '",' + a + ");' target='_self'>立即绑定</a>", c +=
					"<a class='btn_b' href='javascript:void(0);' onClick='javascript:notBindShare(\"" + e + '","' + i +
					'","' + t + '","' + o + '","' + n + '",' + a + ");' target='_self'>暂不绑定</a>", c += "</div>", c +=
					"<a class='exit' href='javascript:void(0);' onClick='javascript:toCloseBsh();' target='_self'>",
					c += "<img src='//file.caixin.com/file/content/images/exit_btn.png'>", c += "</a>", c += "</div>",
					c += "</div>", $("body").append(c), not_popbox = !1
			}
			$("#bsh_popbox").show()
		} else caixinPostShare(e, i, t, o, n, a)
	} else caixinPostShare(e, i, t, o, n, a)
}

function yesBindShare(e, i, t, o, n, a) {
	$("#bsh_popbox").hide();
	var s = "http://user.caixin.com/usermanage/login/?mini=1&url=" + makeShareUrl(e, i, t, o, n, a);
	window.open(s, "newwindow",
		"height=445,width=578,toolbar =no,menubar=no,scrollbars=no,resizable=no,location=no,status=no")
}

function makeShareUrl(e, i, t, o, n, a) {
	switch (e) {
		case "qqweibo":
			"undefined" == typeof srcinfoid && (srcinfoid = 0);
			encodeURI("39e9ee0a88cd4e77bbb10881a6af9d26");
			return base64encode(base64encode(base64encode(
				"https://c2.caixin.com/comment-api-caixin/comment/shareToTencent.do?id=" + srcinfoid +
				"&url=" + o + "&content=" + i + "&picurl=" + n + "&appid=" + a)));
		case "tsina":
			return base64encode(base64encode(base64encode(
				"https://c2.caixin.com/comment-api-caixin/comment/shareToSina.do?id=" + srcinfoid +
				"&url=" + o + "&content=" + i + "&picurl=" + n + "&appid=" + a)))
	}
}

function toCloseBsh() {
	$("#bsh_popbox").hide()
}

function notBindShare(e, i, t, o, n, a) {
	SetCookieValue("SA_USER_SHARE", "NOTREG", 7), $("#bsh_popbox").hide(), caixinPostShare(e, i, t, o, n, a)
}

function postPopUp(e) {
	window.open(e, "_blank")
}

function zoom_in() {
	try {
		var e = parseInt($(".text").css("fontSize"));
		$(".text").css("fontSize", e + 1 + "px"), SetCookieValue("SA_USER_FONT_SIZE", e + 1)
	} catch (e) {}
}

function zoom_out() {
	try {
		var e = parseInt($(".text").css("fontSize"));
		$(".text").css("fontSize", e - 1 + "px"), SetCookieValue("SA_USER_FONT_SIZE", e - 1)
	} catch (e) {}
}

function zoom_init() {
	var e = GetCookieValue("SA_USER_FONT_SIZE");
	isNaN(e) || $(".text").css("fontSize", e + "px")
}

function sendMail() {
	var e = $("#eaddress").val();
	/^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/.test(e) ? window
		.open("http://other.caixin.com/e_newsletter/?id=1&email=" + e) : alert("请输入有效的E_mail！")
}
var base64EncodeChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";

function base64encode(e) {
	var i, t, o, n, a, s;
	for (o = e.length, t = 0, i = ""; t < o;) {
		if (n = 255 & e.charCodeAt(t++), t == o) {
			i += base64EncodeChars.charAt(n >> 2), i += base64EncodeChars.charAt((3 & n) << 4), i += "==";
			break
		}
		if (a = e.charCodeAt(t++), t == o) {
			i += base64EncodeChars.charAt(n >> 2), i += base64EncodeChars.charAt((3 & n) << 4 | (240 & a) >> 4), i +=
				base64EncodeChars.charAt((15 & a) << 2), i += "=";
			break
		}
		s = e.charCodeAt(t++), i += base64EncodeChars.charAt(n >> 2), i += base64EncodeChars.charAt((3 & n) << 4 | (
				240 & a) >> 4), i += base64EncodeChars.charAt((15 & a) << 2 | (192 & s) >> 6), i += base64EncodeChars
			.charAt(63 & s)
	}
	return i
}
