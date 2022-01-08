/* @by chuanmingxie */
var hotGoods={
	name:"热门推荐",
	srcPath:"images/shopshow/",
	data:[
		{href:"#",src:"s1.jpg",price:56.00},
		{href:"#",src:"s2.jpg",price:97.00},
		{href:"#",src:"s3.jpg",price:56.00},
		{href:"#",src:"s4.jpg",price:94.00},
		{href:"#",src:"s5.jpg",price:56.00},
		{href:"#",src:"s6.jpg",price:56.00},
		{href:"#",src:"s7.jpg",price:57.00},
		{href:"#",src:"s8.jpg",price:56.00},
		{href:"#",src:"s9.jpg",price:32.00},
		{href:"#",src:"yifu1.jpg",price:56.00},
		{href:"#",src:"yifu2.jpg",price:56.00},
		{href:"#",src:"yifu3.jpg",price:76.00},
		{href:"#",src:"yifu4.jpg",price:36.00},
		{href:"#",src:"yifu5.jpg",price:196.00}]
};

function showHotGoods(){
	var adviseContent='<h1 class="notice_title">'+hotGoods.name+'</h1><ul class="pic_list3">';
	var turnShow=getRandomNum(9,0,14);
	for (var i = 0; i < turnShow.length; i++) {
		var index= turnShow[i];
		adviseContent+='<li><a href="'+hotGoods.data[index].href+'"><img src="'
		+hotGoods.srcPath+hotGoods.data[index].src+'" width="80" height="80" ></a><p class="price2">￥'
		+hotGoods.data[index].price+'元</p></li>';
	}
	adviseContent+='</ul>';
	$('.right_nav').get(0).innerHTML=adviseContent;
}
// 返回num个重复的随机数，范围在minNum~maxNum之间
function getRandomNum(num,minNum,maxNum){
	var array=new Array();
	for (var i = 0; i < num; i++) {
		do{
			var randomNum=Math.floor(Math.random()*maxNum+minNum);
			if(!checkNum(array,randomNum)){
				array.push(randomNum);
				break;
			}
		}while(true);
	}
	return array;
}
/* 数组中包含num个数时返回true，否则返回false */
function checkNum(array,num){
	for (var i = 0; i < array.length; i++) {
		if(array[i]==num){
			return true;
		}
	}
	return false;
}

$(function(){
	showHotGoods();
});

window.setInterval("showHotGoods()",2000);