var inputCart=$("#inputCart").get(0);
var showCart=$('#showCart').get(0);
var clearCart=$('#clearCart').get(0);

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
clearCart.onclick=function(){
	localStorage.clear();
	loadCart();
}