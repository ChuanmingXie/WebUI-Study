function changeImage(e) {
	// IE的事件采用window.event;
	e=e||window.event;
	var myImage=$('#myImage').get(0);
	// 获得鼠标到图片左侧的距离
	var x=e.clientX-myImage.offsetLeft;
	// 获得鼠标到图标右侧的距离
	var y=e.clientY-myImage.offsetTop;
	// 鼠标移动到图片:
	// 左上角显示1.png,右上角显示2.png
	// 左下角显示4.png,右下角显示5.png
	if(x<myImage.width/2&&y<myImage.height/2){
		myImage.src="img/card/10.jpg";
	}else if(x>myImage.width/2&&y<myImage.height/2){
		myImage.src="img/card/11.jpg";
	}else if(x<myImage.width/2&&y>myImage.height/2){
		myImage.src="img/card/13.jpg";
	}else if(x>myImage.width/2&&y>myImage.height/2){
		myImage.src="img/card/14.jpg";
	}
	console.log(x+"	"+y);
}