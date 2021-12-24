/* 7-3Date对象-演示示例 */
// Date对象的创建-构造函数
// 	语法：
/* 
		new Date();
		new Date(milliseconds);
		new Date(yyyy,MM,dd);
		new Date(yyyy,MM,dd,hh,mm,ss);
		new Date(MM/dd/yyyy hh:mm;ss);
		new Date("month dd,yyyy");
		new Date("month dd,yyyy hh:mm:ss");
 */
(function () {
	var myDate1=new Date();
	var myDate2=new Date(1218253167595);
	var myDate3=new Date(2021,10,12);
	var myDate4=new Date(2021,10,2,12,08,16);
	var myDate5=new Date("10/12/2021 9:25:38");
	var myDate6=new Date("April 25,2051");
	var myDate7=new Date("April 25,2051 18:42:33");
	showTime(myDate1);
	showTime(myDate2);
	showTime(myDate3);
	showTime(myDate4);
	showTime(myDate5);
	showTime(myDate6);
	showTime(myDate7);
	
})()

function showTime(myDate){
	var year=myDate.getFullYear();
	var month=myDate.getMonth()+1;
	var date=myDate.getDate();
	var hour = myDate.getHours();
	var minute=myDate.getMinutes();
	var second=myDate.getSeconds();
	document.write(year+"年"+month+"月"+date+"日 "+hour+":"+minute+":"+second+"<br/>")
}