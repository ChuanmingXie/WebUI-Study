/* 8-11DOM节点对象-Element|NodeList */

var dataArray = new Array();

function amount() {
	var sum = 0;
	var myTable = $('#myTable').get(0);
	// table中包含的节点集合(包含tbody元素节点和文本节点)
	var tbodyList = myTable.childNodes;
	// alert("tbody集合的长度：" + tbodyList.length);
	for (var i = 0; i < tbodyList.length; i++) {
		var tbody = tbodyList.item(i);
		// 只对tbody节点进行操作，不对文本节点进行操作
		if (tbody.nodeType == 1) {
			// tbody中包含的节点的集合(包含tr元素节点和文本节点)
			var rowList = tbody.childNodes;
			// 第一行为标题栏，不进行统计
			for (var j = 1; j < rowList.length; j++) {
				var row = rowList.item(j);
				// 只对tr元素节点进行操作,不对文本节点进行操作
				if (row.nodeType == 1) {
					// 当前行中包含的节点的集合(包括td元素节点和文本节点)
					var cellList = row.childNodes;
					// alert("当前行元素内容的个数：" + cellList.length);
					// 获得最后一个单元格的内容;奇数为元素节点，偶数为文本节点
					var lastCell = cellList.item(5);
					if (lastCell != null) {
						var salesAmount = parseInt(cellList.item(5).innerHTML);
						sum += salesAmount;
					}
				}
			}
		}
	}
	// 显示统计结果
	var tableRows = $('#myTable tr');
	var lastRow = tableRows.get(tableRows.length - 1);
	lastRow.lastChild.previousSibling.innerHTML = sum;
	//也可以通过下面的方式显示
	// myTable.children[0].children[3].children[1].innerHTML = sum;
}
