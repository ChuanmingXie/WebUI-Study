/* 主页焦点图-轮播 */
var sign = 2;

function showPic(index) {
	// var foucsImage=$("#foucsImage").get(0);
	var imgSrc = "images/index/pic";
	imgSrc += index + ".jpg";
	// 更换轮播图
	$("#foucsImage").animate({
		opacity: '0.1'
	}, 1000).fadeIn(100, function() {
		$(this).get(0).src = imgSrc;
	}).animate({
		opacity: '1'
	}, 1000);
	// var lis = $('.foucsBox li');
	var lis = document.getElementsByClassName("focusBox")[0].getElementsByTagName("li");
	for (var i = 0; i < lis.length; i++) {
		lis[i].className = "";
	}
	// 设置轮播图片对应的轮播按钮样式
	lis[index - 1].className = "cur";
}

function setCurrentPic() {
	showPic(sign);
	sign++;
	if (sign == 4) {
		sign = 1;
	}
}
window.onload = function() {
	showPic(3);
}
window.setInterval("setCurrentPic()", 3000);
