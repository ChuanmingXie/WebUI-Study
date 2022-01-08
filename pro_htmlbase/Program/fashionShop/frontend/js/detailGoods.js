/* 切换商品展示区中的图像 */
function changeGoodsImage(thumb) {
	// 设置当前缩略图在商品展示区对应的大图
	var showGoodsPicture = $('#showGoodsPicture').get(0);
	showGoodsPicture.src = thumb.src;
	// 获取商品缩略图对应的li元素集合
	var goodsList = $('.small_piclist li');
	for (var i = 0; i < goodsList.length; i++) {
		var thumbImages = goodsList[i].getElementsByTagName("img");
		thumbImages[0].style.borderColor = "";
	}
	// 设置当前缩略图为选中状态
	thumb.style.borderColor = 'red';
}

/* 切花Tab标签 */
function changeGoodsInfo(obj) {
	var currentSelect = 0;
	var goodsTitles = $('.tab li');
	for (var i = 0; i < goodsTitles.length; i++) {
		goodsTitles[i].className = "";
		if (obj == goodsTitles[i]) {
			currentSelect = i;
		}
	}

	obj.className = "tab_active";
	var tabCotents = $('.middle article');
	for (var i = 0; i < tabCotents.length; i++) {
		if (currentSelect == i) {
			tabCotents[i].className = "tab_content" + (i);
		} else {
			tabCotents[i].className = "none tab_content" + (i);
		}
		console.log(tabCotents[i].className);
	}
}

/* 商品图片放大镜 */
$(function() {
	var thumb_img = $('.small_piclist li img').get(0);
	changeGoodsImage(thumb_img);
	zoomPicture();
});

function zoomPicture() {
	var box = $('#box').get(0);
	var showGoodsPic = $('#showGoodsPicture').get(0);
	var canvas = $('#canvas').get(0);
	var shade = $('#shade').get(0);
	if (showGoodsPic == null) {
		return false;
	}

	box.onmouseout = function() {
		shade.style.display = "none";
		canvas.style.display = "none";
		document.body.style.cursor = "default";
	}

	box.onmousemove = function(e) {
		// 设定鼠标样式
		document.body.style.cursor = "move";
		var shadeX, shadeY;

		var box = $('#box').get(0);
		var boxX = getLeft(box);
		var boxY = getTop(box);
		shadeX = e.pageX - boxX - 100;
		shadeY = e.pageY - boxY - 100;

		if (shadeX < 0) {
			shadeX = 0;
		} else if (shadeX > 200) {
			shadeX = 200;
		}
		if (shadeY < 0) {
			shadeY = 0;
		} else if (shadeY > 200) {
			shadeY = 200;
		}

		var context = canvas.getContext("2d");
		shade.style.display = "block";
		shade.style.left = shadeX + "px";
		shade.style.top = shadeY + "px";
		canvas.style.display = "inline";
		context.clearRect(0, 0, 400, 400);
		var image = new Image();
		image.src = showGoodsPic.src;
		context.drawImage(image, (shade.offsetLeft) * 2, (shade.offsetTop) * 2, 400, 400, 0, 0, 400, 400);
	}
}

function getTop(e) {
	var offset = e.offsetTop;
	if (e.offsetParent != null) {
		offset += getTop(e.offsetParent);
	}
	return offset;
}

function getLeft(e) {
	var offset = e.offsetLeft;
	if (e.offsetParent != null) {
		offset += getLeft(e.offsetParent);
	}
	return offset;
}
