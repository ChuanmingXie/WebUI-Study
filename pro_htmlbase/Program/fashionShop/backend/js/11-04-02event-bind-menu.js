/* 菜单栏导航切换 */
$(function(){
	$('.menuson li').click(function(){
		$('.menuson li.active').removeClass('active')
		$(this).addClass('active');
	});
	
	$('.title').click(function(){
		var $ul=$(this).next('ul');
		$('dd').find('ul').slideUp();
		if($ul.is(':visible')){
			$(this).next('ul').slideUp();
		}else{
			$(this).next('ul').slideDown();
		}
	});
})
