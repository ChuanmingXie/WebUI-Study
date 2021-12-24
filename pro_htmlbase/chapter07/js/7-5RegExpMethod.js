/* 7-5RegExp对象-方法的使用 */
/* 座机号码验证 */
function telephoneValidate(telephone) {
	var telephoneReg = /^((\d{3}-\d{8})|(\d{4}-\d{7}))$/;
	return telephoneReg.test(telephone);
}

/* 手机号码验证 */
function mobileValidate(mobile) {
	var mobileReg = new RegExp("1[3|4|5|7|8][0-9]{9}");
	return mobileReg.test(mobile);
}

/* 判断字符串中是否为纯字符串 */
function isDigit(str) {
	// var digitReg=/^\d* $/;
	var digitReg = new RegExp("^\\d*$");
}

/* 内容查找匹配 */
function contentValidate(content) {
	document.write(content + "<br/>");
	var contentReg = new RegExp('Ea', "gi");
	var i = 1;
	while ((result = contentReg.exec(content)) != null) {
		document.write("第" + i + "次匹配" + result + ",位置在" + result.index + "~" + contentReg.lastIndex + "<br />");
		i++;
	}
}

/* 验证RegExp对象方法 */
(function() {
	// var telephone="0532-1234567";
	var telephone = "0532-1234-5671234";
	if (telephoneValidate(telephone)) {
		document.write(telephone + "座机号码有效" + "<br />");
	} else {
		document.write(telephone + "座机号码无效" + "<br />");
	}

	var mobile = "17334323433";
	if (mobileValidate(mobile)) {
		document.write(mobile + "手机号码有效" + "<br />");
	} else {
		document.write(mobile + "手机号码无效" + "<br />");
	}

	var num = "123a";
	document.write(num + ":" + (isDigit(num) ? "是纯数字" : "非纯数字") + "<hr />");

	var content = "Qingdao, located in the southEast part of Shandong Province, is a beautiful SEASIDE city with clear air and enchanting SEA view";
	contentValidate(content);
	document.write("<br />")
})()
