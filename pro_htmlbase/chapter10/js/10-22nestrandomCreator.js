/* 10-22Web Worker-使用Worker线程嵌套 */

// 第一层线程
onmessage = function(e) {
	var intArray = new Array(100);
	for (var i = 0; i < intArray.length; i++) {
		intArray[i] = parseInt(Math.random() * 100);
	}
	console.log(JSON.stringify(intArray));

	// 启动第二层线程
	var worker = new Worker("10-22nestluckyNum.js");

	worker.postMessage(JSON.stringify(intArray));

	worker.onmessage = function(e) {
		postMessage(e.data);
	};
};
