var i = 1;
var btnAdd = $('#btnAdd').get(0);
var btnList = $('#btnList').get(0);

// 向sessionStorage录入商品名称
btnAdd.onclick = function() {
	var goodName = $('#goodsName').get(0);
	if (goodName.value == "") {
		alert('商品名称不能为空!');
		return;
	}
	sessionStorage.setItem("goods" + i, goodName.value);
	i++;
};

btnList.onclick = function() {
	var result = "<table border='1'>";
	result += "<tr><td>商品名称</td></tr>";
	if (sessionStorage.length == 0) {
		result += "<tr><td>暂无商品</td></tr>"
	} else {
		for (var j = 0; j < sessionStorage.length; j++) {
			var currentName = sessionStorage.getItem(sessionStorage.key(j));
			result += "<tr><td>" + currentName + "</td></tr>"
		}
	}
	result += "</table>";
	var resultDiv = $('#resultDiv').get(0);
	resultDiv.innerHTML = result;
};
