/* 2-03jQuery选择器-功能js */
$(function(){
	// 重置按钮
	$("#reset").click(function(){
		$("*").removeAttr("style");
		$('div[class=none]').css({"disply":"none"})
	});
	// 每次点击均自动重置逻辑
	$("input[type=button]").click(function(){
		if($("#isreset").is(":checked")){
			$("#reset").click();
		}
	});
	// 动画
	function animateit(){
		$("#move").slideToggle("slow",animateit);
	}
	animateit();
})