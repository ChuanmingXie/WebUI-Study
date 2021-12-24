/* 10-20Web Worker-使用Worker多线程-具体执行内容 */

onmessage = function(e) {
	var num = e.data;
	console.log(num);
	var time1=new Date().getTime();
	// var timespan1 = console.log(new Date().getTime());
	var sum = 0;
	for (var i = 0; i <= num; i++) {
		sum += i;
	}	
	var time2=new Date().getTime();
	// var timespan2 = console.log(new Date().getTime());
	// date2.getTime()-date1.getTime()
	var span=new Date(time2-time1);
	
	// 统计计算结果用时
	console.log(span.getMinutes()+":"+span.getSeconds()+"."+span.getMilliseconds());
	postMessage(sum);
}
