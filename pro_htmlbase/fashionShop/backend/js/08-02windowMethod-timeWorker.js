/* 8-2window对象-windowMethod-多线程设置动态时钟 */

(function() {
 	setInterval("showCurrentTime()", 1000);
 })()

 var timeworker = new Worker('js/08-02windowMethod-woker.js');

 function showCurrentTime() {
 	var myDate = new Date();
 	timeworker.postMessage(myDate);
 }

 timeworker.onmessage = function(e) {
 	$(".timeDiv").get(0).innerHTML = e.data;
 }
