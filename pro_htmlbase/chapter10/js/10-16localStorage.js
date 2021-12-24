/* 10-16Web存储-local Storage-购物车管理系统 */

var inputCart=$("#inputCart").get(0);
var showCart=$('#showCart').get(0);
var clearCart=$('#clearCart').get(0);

// 使用localStorage实现购物车
inputCart.onclick=function(){
	var goodsName=$('#goodsName').get(0);
	var goodsPrice=$('#goodsPrice').get(0);
	var goodsNum=$('#goodsNum').get(0);
	var msg={
		name:goodsName.value,
		price:goodsPrice.value,
		num:goodsNum.value
	};
	var time=new Date().getTime();
	localStorage.setItem(time,JSON.stringify(msg));
	goodsName.value="";
	goodsPrice.value="";
	goodsNum.value="";
	loadCart();
}

// 将购物车的商品显示出来
function loadCart(){
	var showBody=$('#showBody').get(0);
	showBody.innerHTML="";
	if(localStorage.length!=0){
		for (var i=0;i<localStorage.length;i++) {
			var jsonStr=localStorage.getItem(localStorage.key(i));
			var json=JSON.parse(jsonStr);
			var row=showBody.insertRow(i);
			row.insertCell(0).innerHTML=json.name;
			row.insertCell(1).innerHTML=json.price;
			row.insertCell(2).innerHTML=json.num;
		}
	}
}

showCart.onclick=loadCart;

// 清空购物车
clearCart.onclick=function(){
	localStorage.clear();
	loadCart();
}