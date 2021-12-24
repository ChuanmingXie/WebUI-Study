/* 9-5HTML5自定义控件验证方法 */

function checkForm() {
	var userName = $('#userName').get(0);
	var userPwd = $('#userPwd').get(0);

	if (!userName.checkValidity()) {
		userName.setCustomValidity("用户名必须是英文大小写字母且5位字符以上!");
	}

	if (userPwd.value.length == 0) {
		userPwd.setCustomValidity("密码不能为空!");
	} else if (userPwd.value.length < 6) {
		userPwd.setCustomValidity("密码长度不能少于6位!");
	}
}
