/* 10-20Web Worker-使用Worker多线程-调用 */

var worker=new Worker("js/10-20workerexec.js");
function sum(){
	var num=parseInt($('#num').get(0).value)
	worker.postMessage(num);	//向后台发送信息
}

// 用于接收后台传回的数据
worker.onmessage=function(e){
	var result=e.data;
	$("#result").get(0).value=result;
};

// 停止线程
function stopWorker(){
	worker.terminate();
}

