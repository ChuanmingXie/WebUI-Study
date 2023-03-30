/* 全选和反选 */
function selectAll(){
	var items=$("[name='checkItem']");
	var checkAll=$('#checkAll');
	$("#checkOther").prop('checked',false);
	for (var i = 0; i < items.length; i++) {
		$(items[i]).prop('checked',checkAll.prop('checked'));
	}
}

function selectOther(){
	var items=$("[name='checkItem']");
	$('#checkAll').prop('checked',false);
	for (var i = 0; i < items.length; i++) {
		$(items[i]).prop('checked',!$(items[i]).prop('checked'));
	}
}