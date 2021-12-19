// 最内层的计算线程
onmessage = function(e) {
	var intArray = JSON.parse(e.data);
	console.log(e.data);
	var luckyNum = "";
	for (var i = 0; i < intArray.length; i++) {
		if (intArray[i] % 2 == 0 && intArray[i] % 3 == 0 && intArray[i] != 0) {
			if (luckyNum != "") {
				luckyNum += ",";
			}
			luckyNum += intArray[i];
		}
	}
	postMessage(luckyNum);
}
