/* 2-06案例研究-网站品牌列表展示操作-隐藏下部品牌 */
$(function(){
	var $category=$('ul li:gt(5):not(:last)');
	$category.hide();		//隐藏上面获取的jQuery对象
})

/* 
 1. $('ul li;gt(5):not(:last)');
 选取ul元素下的li元素的索引值大于5的集合元素后，去掉集合元素的最后一个.
 索引值从0开始
 */
