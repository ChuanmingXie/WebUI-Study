/* 7-2String字符串对象-创建 */
/* 字符串的创建 */
// 字面量方式
var name = "漫步时代广场";
var address = "中国 青岛 高新区";
// new 方式
var movieName = new String('我和我的父辈-如愿');
var director = String("陈凯歌-吴京");


// string & String 区别 showstringAndString()
(function() {
	var str1 = "abc";
	var str2 = "abc";
	var object1 = new String("abc");
	var object2 = new String('abc');
	alert(str1 == str2);
	alert(object1 == object2);
	var encourage = "美丽的";
	encourage.describe = "程序员指导师";
	var team = new String('好斗的');
	team.describe = "程序员团队";
	alert(encourage.describe);	//encourage不是对象，显示undefined
	alert(team.describe);
})();
