/* 10-22Web Worker-使用Worker线程嵌套-调用 */

var size = 6;
var worker = new Worker("js/10-22nestrandomCreator.js");
worker.postMessage("");
worker.onmessage = function(e) {
	var showBody = $('#showBody').get(0);
	var luckyName = e.data;
	var intArray = luckyName.split(',');
	var dataRow = "";
	for (var i = 0; i < intArray.length; i++) {
		if (i % size == 0) {
			dataRow += "<tr>";
		}
		dataRow += "<td width='40xp'>" + intArray[i] + "</td>";
		if (i % size == size - 1) {
			dataRow += "</tr>"
		}
	}
	showBody.innerHTML=dataRow;
};
