onmessage = function(e) {
	var intArray = new Array(100);
	for (var i = 0; i < intArray.length; i++) {
		intArray[i] = parseInt(Math.random() * 100);
	}
	console.log(JSON.stringify(intArray));

	var worker = new Worker("10-22nestluckyNum.js");

	worker.postMessage(JSON.stringify(intArray));

	worker.onmessage = function(e) {
		postMessage(e.data);
	};
};
