/* 2-06案例研究-网站品牌列表展示操作-点击可显示全部品牌 */
$(function(){									//等待DOM加载完毕
	var $category=$('ul li:gt(5):not(:last)');	//获取索引值大于5的品牌集合
	$category.hide();					//隐藏以上获取的jQuery对象
	var $toggleBtn=$('div.showmore>a');
	$toggleBtn.click(function(){		//获取"显示全部品牌"按钮
		$category.show();				//显示$category
		$('.showmore a span')
			.css("background","url(../img/up.gif) no-repeat 0 0")
			.text("精简显示品牌");		//改变背景图片和文本
		$('ul li').filter(":contains('佳能'),:contains('尼康'),:contains('奥林巴斯')")
			.addclass("promoted");		//添加高亮样式
		return false;					//超链接不跳转
	})
})