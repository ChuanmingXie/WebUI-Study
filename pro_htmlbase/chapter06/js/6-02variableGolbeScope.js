/* 6-2基本语法-变量作用域-全局变量|局部变量 */

var name='漫步时代广场';

function textGlobleScope(){
	name+="V1.0";
	address="青岛市高新区河东路888号";
}
textGlobleScope();
alert('名称'+name+'，地址'+address);
alert(tel);	//此处会报错