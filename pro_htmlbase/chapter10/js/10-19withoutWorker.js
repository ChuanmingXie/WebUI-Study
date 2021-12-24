/* 10-19Web Worker-未使用Worker多线程 */

function sum() {
	var num=parseInt($('#num').get(0).value);
	var sum=0;
	for (var i=0;i<=num;i++) {
		sum+=i;
	}
	$('#result').get(0).value=sum;
}
/*
// 10-19Web Worker-使用Worker多线程的步骤

// worker基本应用
创建worker对象
var worker=new Worker(URL);

向后台线程发送消息
worker.postMessage(message);

监听onmessage事件
worker.onmessage=function(e){
	alert(e.data);
}

监听到worker对象onmessage事件后，在事件处理函数中对回传的数据进行处理。
当onmessage事件处理完成并且外部脚本也执行完成后，浏览器任然继续监听worker对象，直到被终止。

终止worker对象的语法格式：
worker.terminate();

*/

