/* 8-15事件处理-表单及表单元素事件 */
function boundEvent() {
	var inputs = $('input');
	for (var i = 0; i < inputs.length; i++) {
		if (inputs[i].type == "button") {
			inputs[i].onclick = function(e) {
				alert(e.target.value);
			}
		}
	}
}

/* 焦点事件 */
function userNameOnFocus(){
	var userName=$('#userName').get(0);
	if(userName.value=="请输入用户名"){
		userName.value="";
	}
	userName.style.backgroundColor="#44F444";
}

/* 焦点取消事件 onfocus <-> OnBlur (聚焦 <-> 模糊)*/
function userNameOnBlur(){
	var userName=$('#userName').get(0);
	if(userName.value==""){
		userName.value="请输入用户名";
	}
}

/* 键盘按键事件 */
function showKeyPress(e){
	var showDiv=$('#showDiv').get(0);
	var e=e||window.event;
	var char=e.keyCode?e.keyCode:e.which;
	showDiv.innerHTML=showDiv.innerHTML+String.formCharCode(char);
}

/* 下拉选择事件 */
function selectUserType(){
	var userType=$('#userType').get(0);
	alert(userType.value);
}

/* 重置表单事件 */
function resetForm(){
	alert('表单进行重置');
	$('#userName').get(0).value="";
	return false;
}

/* 检查表单事件 */
function checkForm(){
	var userName=$('userName').get(0).value;
	var userType=$('#userType').get(0).value;
	if(userName=="admin"&&userType=="管理员"){
		alert("表单将进行提交");
		return false;
	}
	alert("表单不进行提交");
	return false;
}

window.onload=boundEvent;


