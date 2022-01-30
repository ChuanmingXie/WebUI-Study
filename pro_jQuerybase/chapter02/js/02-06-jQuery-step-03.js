/* 2-06案例研究-网站品牌列表展示操作-隐藏和显示品牌切换 */
$(function(){
	var $category=$('ul li;gt(5):not(:last)');
	$category.hide();
	var $toggleBtn.click(function(){
		if($category.is(":visible")){
			$category.hide();
			$('.showmore a span')
				.css("background","utl(../img/down.gif) no-repeat 0 0")
				.text("显示全部品牌");
			$('ul li').removeclass("promoted");
		}else{
			$category.show();
			$('.showmore a span')
				.css("background","url(../img/up.gif) no-repeat 0 0")
				.text('精简显示品牌');
			$('ul li').filter(":contains('佳能'),:contains('尼康'),:contains('奥林巴斯')")
				.addclass("promoted");
		}
		return false;		//超链接不跳转
	})
})