/* 11-12jQuery基本操作-样式操作 */
$(function(e){
	$('#articleTitle').addClass('titleClass');		//添加某种样式
	$("p[title='desc']").addClass("baseClass fontColor");		//添加多种样式
	//根据位置的不同，添加不同的样式，index为索引，oldClass为原来样式
	$("p[title='desc']").addClass(function(index,oldClass){
		console.log(index+oldClass);
		return 'p'+index;
	});
});

function removeClass(){
	$('p').removeClass("fontSize");	//移出指定的样式
	$('p').removeClass();			//移出所有的样式
}