/* 8-8document对象-方法示例 */

/* getELemnt...| querySelector|querySelectorAll 方法的使用 */
function getElement() {
	var menuDiv = document.getElementById('menuDiv');
	var baseSpan = menuDiv.getElementsByClassName('baseClass');
	var buySpan = menuDiv.getElementsByClassName('buyClass');

	var qMenuDiv = document.querySelector('#menuDiv');
	var qBaseSpan = document.querySelectorAll('.baseClass');
	var qfilmSpan = document.querySelector('.filmClass');	//只返回单个元素，没有length属性

	var menuDivQ = $('#menuDiv').get(0);
	var baseSpanQ = $('span.baseClass');
	var buySpanQ = $('span.buyClass');

	alert("DOM:\n具有baseClass特征的<span>的标签个数：" +
		baseSpan.length + "\n具有buyClass特征的<span>标签个数：" + buySpan.length);
	alert("query:\n具有baseClass特征的<span>的标签个数：" +
		qBaseSpan.length + "\n具有buyClass特征的<span>标签个数：" + qfilmSpan.length+" 只返回单个元素");
	alert("jQuery:\n具有baseClass特征的<span>的标签个数：" +
		baseSpanQ.length + "\n具有buyClass特征的<span>标签个数：" + buySpanQ.length);
}

function countElement(){
	var userName=document.getElementById('userName');
	var hobby=document.getElementsByName('hobby');
	var inputs=document.getElementsByTagName('input');
	var result="ID 为userName的元素的值："+userName.value+"\n个人爱好：";
	for (var i = 0; i < hobby.length; i++) {
		if(hobby[i].checked){
			result+=hobby[i].value+"";
		}
	}
	result+="\nname为hooby的元素个数："+hobby.length+"\n标签为input的元素个数为："+inputs.length;
	alert(result);
}


(function() {
	getElement();
})()
