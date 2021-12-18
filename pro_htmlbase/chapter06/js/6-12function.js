/*
整数转换函数
parseInt(string,[radix])

// 浮点数转换函数
parseFloat(string)

// 检查是否为数字函数
isNaN(value)

// 表达式(算术)执行函数
eval(string)

// 对话框函数
alert()
confirm()
prompt()

*/

function Predefined(){
	document.write('parseInt("88.9")的执行结果是：'+parseInt("88.9")+'<br/>');
	document.write("parseInt('8T9')的执行结果是："+parseInt('8T9')+"<br />");
	document.write("parseInt('B89')的执行结果是："+parseInt('B89')+"<br />");
	document.write("parseInt('x010')的执行结果是："+parseInt('0x10')+"<br />");
	document.write("parseInt('12',16)的执行结果是："+parseInt('12',16)+"<br />");
	
	var str="3000+500*2";
	document.write("表达式"+str+"的结果是："+eval(str));
}

do {
	var money = prompt('请输入您的存款余额：');
	if (isNaN(money)) {
		alert('数据输入不合法，请重新输入!');
		continue;
	}


	switch (parseInt(money / 10000)) {
		case 0:
			if (money < 0) {
				alert('难以结局温饱问题');
			} else {
				alert('贫下中农，达到低保生活');
			}
			break;
		case 1:
		case 2:
		case 3:
		case 4:
		case 5:
		case 6:
		case 7:
		case 8:
		case 9:
			alert('富农，衣食无忧坚守一线');
			break;
		default:
			alert('获得很容易');
			break;
	}

	var isAgain = confirm('是否重新计算？');
	if (!isAgain) {
		alert('程序运行结束!');
		break;
	}
} while (true);
