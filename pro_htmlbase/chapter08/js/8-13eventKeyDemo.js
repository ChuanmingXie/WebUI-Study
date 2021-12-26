/* 8-13事件处理-键盘事件 */

var rightImages=["r0.png","r1.png","r2.png"];
var leftImages=["l0.png","l1.png","l2.png"];
var downImages=["d0.png","d1.png","d2.png"];
var upImages=["u0.png","u1.png","u2.png"];

var mainDiv=$('#mainDiv').get(0);
var walkerGirl=$('#walkGirl').get(0);

var divWidth=mainDiv.style.width;		//获得div带单位的宽度
console.log(divWidth);
var imageWidth=mainDiv.offsetWidth;		//获取Div的宽度值
console.log(imageWidth);
var imageHeight=mainDiv.offsetHeight;
console.log(imageHeight);

var images=rightImages;
var n=0;

function doKeyDown(){
	var x=dealPx(mainDiv.style.left);
	var y=dealPx(mainDiv.style.top);
	/* IE的事件采用window.event */
	var e=e||window.event;
	var keyID=e.keyCode?e.keyCode:e.which;		//方向键
	
	/* 向右方行走 */
	if(keyID==39||keyID==68){
		if(x+imageWidth<window.innerWidth){
			x+=10;
		}
		images=rightImages;
	}
	
	/* 向左方行走 */
	if(keyID==37||keyID==65){
		if(x-10>=0){
			x-=10;
		}
		images=leftImages;
	}
	
	/* 向上方行走 */
	if(keyID==38||keyID==87){
		if(y-10>=10){
			y-=10;
		}
		images=upImages;
	}
	
	/* 向下方行走 */
	if(keyID==40||keyID==83){
		if(y+imageHeight<window.innerHeight){
			y+=10;
		}
		images=downImages;
	}
	working(x,y);
}

function working(x,y){
	if(n>=rightImages.length){
		n=0;
	}
	walkerGirl.src="img/walkerGirl/"+images[n];
	mainDiv.style.left=x+'px';
	mainDiv.style.top=y+"px";
	n++;
}

function dealPx(pixeStr){
	var pixel=pixeStr.substring(0,pixeStr.indexOf('px'));
	if(pixel==""){
		return 0;
	}else{
		return parseInt(pixel);
	}
}

window.onkeydown=doKeyDown;