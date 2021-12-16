var myIcon=document.createElement("img");
myIcon.src="images/red4.jpg";
function drag(e){
	e.dataTransfer.effectAllowed="link";
	// 火狐谷歌支持此方式
	// e.dataTransfer.setDragImage(myIcon,0,0);
	e.dataTransfer.setData("text",e.target.id);
}

function drop(e){
	allowDrop(e);
	var data=e.dataTransfer.getData("text");
	if(e.target.tagName=="DIV"){
		e.target.appendChild($("#"+data).get(0));
	}else if(e.target.tagName=="IMG"){
		e.target.parentNode.appendChild($("#"+data).get(0));
	}
}

function allowDrop(e){
	e.preventDefault();
	e.stopPropagation();
}