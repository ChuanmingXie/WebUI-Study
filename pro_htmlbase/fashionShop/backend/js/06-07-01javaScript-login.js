/* 漫步时代广场 - login.js - 10:15*/

window.onload=function(){
	var flag = 0;
	do {
		var array = [
			['admin', 'admin'],
			['itshixun', 'itshixun'],
			['chuanmingxie', '123'],
		];
		var userName = prompt("请输入用户名：");
		var userPwd = prompt("请输入密码：");
		for (var i = 0; i < array.length; i++) {
			if (array[i][0] == userName && array[i][1] == userPwd) {				
				alert("用户登录成功,欢迎<" + userName + ">使用本系统！");				
				/*
				将用户名标签改为姓名 ：
				获取 topFrame框架对应的页面中的class属性"user"的元素，
				然后再从中筛选<span>标签，最后修改标签的内容
				*/
				topFrame.document.getElementsByClassName("user")[0].getElementsByTagName("span")[0].innerHTML=userName;
				flag = 1;
				break;
			}
			if (userName == null && userPwd == null) {
				flag = 2;
			}
		}
		if (flag == 0) {
			alert('用户名或密码错误,请重新登录.');
		}
	}while(flag==0);
}