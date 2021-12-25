/* 8-9form对象-属性和方法 */

function checkUserName() {
	//获取元素的方式 1
	var userName = document.getElementById('userName');
	if (userName.value.length == 0) {
		alert('用户名不为空!');
		return false;
	}
	if(userName.value.length<3||userName.value.length>20){
		alert('用户名长度应介于3-16位,请重新输入');
		userName.select();
		return false;
	}
	return true;
}

function checkUserPwd(){
	//获取元素的方式 2
	var userPwd=document.myform.userPwd.value;
	if(userPwd.length<6){
		alert('密码长度不低于6位');
		return false;
	}
	
	for (var i = 0; i < userPwd.length; i++) {
		var tmp=userPwd.charAt(i);
		if(isNaN(tmp)){
			alert('密码必须使用数字');
			return false;
		}
	}
	return true;
}

function checkEmail(){
	//获取元素的方式 3
	var email=document.forms[0].userMail;
	var emailReg=/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])/;
	if(!emailReg.test(email.value)){
		alert('邮箱格式不正确，请重新输入！');
		email.focus();
		return false;
	}
	return true;
}

function checkMobilePhone(){
	//获取元素的方式 4 ：3是元素下标，下表从0开始
	var mobilePhone=document.forms[0].elements[3];
	var mobilePhoneReg=/^1[3|4|5|7|8][0-9]{9}$/;
	if(!mobilePhoneReg.test(mobilePhone.value)){
		alert('手机号歌手不正确')
		mobilePhone.focus();
		return false;
	}
	return true;
}

function checkForm(){
	return checkUserName()&&checkUserPwd()&&checkEmail()&&checkMobilePhone();
}

function checkForm1(){
	if(checkUserName()&&checkUserPwd()&&checkEmail()&&checkMobilePhone()){
		document.myform.action="http://www.moocollege.cn";
		document.myform.target="_blank";
		document.myform.submit();
	}
}
