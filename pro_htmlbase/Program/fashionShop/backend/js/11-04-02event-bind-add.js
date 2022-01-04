/* 添加界面表单验证 */
$(function() {
	// 为商品名称输入框绑定获取焦点和失去焦点的处理函数
	$("#goodName").on('focus', function() {
		$(this).css({
			backgroundColor: "#FFEC8B",
			borderColor: "#999",
			color: "#000000"
		});
		if ($(this).val() == '请填写商品名称') {
			$(this).val("");
		}
	}).on("blur", function() {
		$(this).css({
			backgroundColor: "#FFFFFF",
			borderColor: "",
			color: "#000000"
		});
		if ($(this).val() == "") {
			$(this).val("请填写商品名称");
		}
	});

	/* 为单价和团购价绑定获得焦点是的函数 */
	$("input[id$='Price']").on('focus', function() {
		$(this).css({
			fontSize: '16px',
			color: 'red'
		});
	});
	/* 为文本框绑定失去焦点时的处理函数 */
	$("input[type='number']:last").on('blur', function() {
		if ($(this).val() < 0) {
			$(this).val=0;
			confirm('数量不能小于0');
			// $(this).select();
			// return false;
		}
	});

	/* 验证时间格式处理函数 */
	$("input[type='datetime-local']").on("blur", function() {
		var dateReg = /(\d{4})[-\/](\d{1,2})[-\/](\d{1,2})[ ](\d{1,2})[:](\d{1,2})/;
		if (!dateReg.test($(this).val())) {
			$(this).val()="";
			confirm('日期格式不正确，请查验格式!');
			// $(this).select();
			// return false;
		}
	});
	/* 为发布商品按钮绑定处理函数 */
	$("input[type='submit']").on("click", function() {
		if ($("#thumbImage").val() == "") {
			alert("请选择商品缩略图");
			return false;
		}
		if ($('#goodsName').val() == "" || $('#goodsName').val() == "请填写商品名称") {
			alert("请填写商品名称!");
			return false;
		}
		if ($('.tabson textarea').val() == "") {
			alert("请完善商品详细信息!");
			return false;
		}
		$('.tabson form').submit();
	});
});
