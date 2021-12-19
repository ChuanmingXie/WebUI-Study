// stringMethod1()
(function() {
	var address = "中国 青岛 高新区";
	var name = "漫步时尚广场";
	alert("name的类似是:" + typeof(name) + "\n address的类型是:" + typeof(address));
	var movieName = new String('《长津湖》之张孟生');
	var director = String('吴京');
	alert("movieName的类型是:" + typeof(movieName)+"\n director的类型是:" + typeof(director));
	var index = movieName.indexOf("津");
	var lastIndex = movieName.lastIndexOf("生", 4);
	if (index != -1) {
		alert("'津'在字符串'" + movieName + "'的位置是:" + index);
	}
	if (lastIndex != -1) {
		alert("\"津\"在字符串\"" + movie + "\"的位置是：" + lastIndex);
	}
	var subName = movieName.substring(1, movieName.length - 5);
	var familyName = director.slice(0, 1);
	alert("影片名称为：" + subName + "\n导演贵姓：" + familyName);
})();

function stringMethod2() {
	var name = "漫步时代广场";
	var result = "";
	for (var i = 0; i < name.length; i++) {
		var str = name.charAt(i);
		if (i % 2 == 1) {
			str = str.bold();
		}
		str = str.fontsize((i % 7) + 1);
		if (i % 3 == 0) {
			str = str.fontcolor("red");
		}
		if (i % 4 == 0) {
			str = str.anchor("anchor");
		}
		result += str;
	}
	document.write("处理前的字符串：" + name + "<br/>");
	document.write("处理后的字符串：" + result + "<br/><br/>");

	var movieContent = new String("革命年代的将士们，为了刚刚成立的新中国奋不顾身的开赴抗美援朝前线，没有食物，没有武器装备，克服困难迎难而上，在长津湖英勇战斗...");
	var resultContent = "";
	for (var i = 0; i < movieContent.length; i++) {
		var str = movieContent.charAt(i);
		if (i % 4 == 1) {
			str = str.sup();
		}
		if (i % 6 == 0) {
			str = str.sub();
		}
		resultContent += str;
	}
	document.write("处理前的字符串：" + movieContent + "<br/>");
	document.write("处理后的字符串：" + resultContent + "<br/><br/>");

	var movieName = "《长津湖》由吴京参演陈凯歌导演的优秀战争题材";
	document.write("替换后的字符串：" + movieName.replace(/陈凯歌/, "徐可，林庚年"));
	document.write("<br/><hr/>");

	var songWords = "Two roads diverged in a yellow wood；I'd go back and rechoose if I could...";
	var words = songWords.split(" ");
	var resultWords = "";
	for (var i = 0; i < words.length; i++) {
		if (i % 2 == 0) {
			words[i] = words[i].toUpperCase();
		} else {
			words[i] = words[i].toLowerCase();
		}
		resultWords += words[i] + " ";
	}
	document.write("处理前的字符串：" + songWords + "<br/>");
	document.write("处理后的字符串：" + resultWords + "<br/><br />");
}
