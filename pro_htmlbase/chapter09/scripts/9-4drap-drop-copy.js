/* 9-4HTML5中的拖放-复制操作 */

function drag (e) {
	e.dataTransfer.effectAllowed="copy";
	
	
	e.dataTransfer.setData("text",e.target.id);
}

function drop (e) {
	var data=e.dataTransfer.getData("text");
	e.dataTransfer.dropEffect="copy";
	if(e.target.tagName=="DIV"){
		e.target.appendChild($('#'+data).get(0).cloneNode());
	}else if(e.target.tagName=="IMG"){
		e.target.parentNode.appendChild()($('#'+data).get(0).cloneNode());
	}
	allowDrop(e)
}

function allowDrop(e){
	e.preventDefault();
	e.stopPropagation();
}