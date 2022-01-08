/* 省市区三级菜单 - 使用js加载 */
var provinces = ["山东省", "河北省"];
var cities = [
	["济南市", "青岛市"],
	["石家庄", "廊坊市"]
];
var areas = [
	[
		["市中区", "历下区", "天桥区", "槐荫区", "历城区", "长清区"],
		["市南区", "市北区", "四方区", "李沧区", "城阳区", "崂山区"]
	],
	[
		["桥西区", "新华区", "长安区", "裕华区", "井陉区", "藁城区", "鹿泉区", "栾城区"],
		["安次区", "广阳区", "三河市", "霸州市", "香河县", "永清县", "固安县", "文安县"]
	]
];
var province, city, area;
/* 初始化省份下拉列表 */
function initProvince() {
	province = $('#province').get(0);
	city = $('#city').get(0);
	area = $('#area').get(0);
	province.options.length = 1;
	for (var i = 0; i < provinces.length; i++) {
		var option = new Option(provinces[i], provinces[i]);
		province.options.add(option);
	}
	provinceChange();
}
/* 选择省份时触发 */
function provinceChange() {
	cityChange();
	// 对城市下拉列表初始化
	city.options.length = 1;
	if (province.selectedIndex == 0) {
		return;
	}
	// 选项的下标从1开始， 数组的下表从0开始
	var pIndex = province.selectedIndex;
	for (var i = 0; i < cities[pIndex - 1].length; i++) {
		var optionValue = cities[pIndex - 1][i];
		var option = new Option(optionValue, optionValue);
		city.options.add(option);
	}
}
/* 选择城市时触发 */
function cityChange() {
	// 对地区下拉列表初始化
	area.options.length = 1;
	if (city.selectedIndex == 0) {
		return;
	}
	var pIndex = province.selectedIndex;
	var cIndex = city.selectedIndex;
	for (var i = 0; i < areas[pIndex - 1][cIndex - 1].length; i++) {
		var optionValue = areas[pIndex - 1][cIndex - 1][i];
		var option = new Option(optionValue, optionValue);
		area.options.add(option);
	}
}

/* 注册页，表单提交验证 */
/* 元素获取焦点时触发 */
function onFocus() {
	this.select();
	this.style.backgroundColor = "#FFEC8B";
	this.style.color = "#000000";
}
/* 元素失去焦点时触发该函数 */
function onBlur() {
	this.style.backgroundColor = "#FFFFFF";
	this.style.color = "#000000"
}
/* 验证用户名是否有效 */
function checkUserName() {
	var userName = $('#userName').get(0);
	if (userName.value == "" || userName.value == "请输入用户名") {
		alert("用户名不能为空")
		userName.focus();
		return false;
	}
	return true;
}
/* 验证密码和确认密码是否有效 */
function checkPassword() {
	var userPwds = $('#userPwd').get(0);
	var userPwd = userPwds.value;
	var userRePwds = $('#userRePwd').get(0);
	var userRePwd = userRePwds.value;
	if (userPwd == "") {
		alert("密码不能为空");
		userPwds.focus();
		return false;
	} else if (userPwd.length < 6 || userPwd.length > 20) {
		alert('密码长度为6~20位，请进行确认！');
		userPwds.focus();
		return false;
	} else if (userPwd != userRePwd) {
		alert('新密码和确认密码不一致！');
		userRePwds.focus();
		return false;
	}
	if (/\d/.test(userPwd) && /[a-z]/i.test(userPwd) ||
		/\d/.test(userPwd) && /[\@\#\$\%\&\*]/.test(userPwd) ||
		/[a-z]/i.test(userRePwd) && /[\@\#\$\%\&\*]/.test(userPwd)) {
		return true;
	} else {
		alert("密码必须是由字母、数字和符号的两种以上组合!");
		userRePwds.focus();
		return false;
	}
}
/* 提交表单时，触发该函数 */
function checkForm() {
	if (!checkUserName() || !checkPassword()) {
		return false;
	}
}

/* 执行省市区下拉列表-初始化-动作 */
function addressCascade() {
	initProvince();
	province.onchange = provinceChange;
	city.onchange = cityChange;
}
/* 执行表单提交-验证-动作 */
function validateForm() {
	var myform = document.forms[0];
	myform.onsubmit = checkForm;
	var inputs = $('input');
	for (var i = 0; i < inputs.length; i++) {
		var type = inputs[i].type;
		if (type == "text" || type == "password") {
			inputs[i].onfocus = onFocus;
			inputs[i].onblur = onBlur;
		}
	}
}

window.onload = function() {
	// addressCascade();
	validateForm();
}
