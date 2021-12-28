/* 11-2jQuery选择器-基本选择器 */
$(function(e){
	$('#idDiv').css('color','bule');
	$('.classDiv').css('background-color','#dddddd');
	$('span').css('background-color','gray').css('color','white');
	$("*").css('font-size','20px');
	$('#iddiv,.classSpan').css('font-style','italic');
});