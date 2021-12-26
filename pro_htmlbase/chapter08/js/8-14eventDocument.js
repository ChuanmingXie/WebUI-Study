/* 8-14事件处理-文档事件 */

var array=[1,2,3];
function initImages(){
	array.sort(randomsort);
	var images=$('img');
	for (var i = 0; i < array.length; i++) {
		images[i].src='img/Number_00'+array[i]+".png";
	}
}

function randomsort(a,b){
	return Math.random()>.5?-1:1;
}

function resizeImages(){
	var scale=0.2;
	var images=$('img');
	var windowWidth=window.innerWidth;
	var resizeWidth=windowWidth*scale;
	if(resizeWidth<100){
		resizeWidth=100;
	}
	for (var i = 0; i < images.length; i++) {
		images[i].style.width=resizeWidth+"px";
	}
}

window.onload=initImages;
window.onresize=resizeImages;