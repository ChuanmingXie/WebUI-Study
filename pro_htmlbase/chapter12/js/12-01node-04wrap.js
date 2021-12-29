/* 12-1jQuery-DOM节点操作-创建|插入|复制|删除|包裹 */

/* 12-1jQuery-DOM节点操作-包裹 */
$(function(e) {
	$('#headerDiv a').wrap("<b></b>");
	$('#menuDiv a').wrapAll("<b></b>");
	$('#footerDiv a').wrapInner("<b></b>");
	
	$('#headerDiv b').upwrap();
})
