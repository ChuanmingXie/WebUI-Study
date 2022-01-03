/* 12-5-2jQueryplugin-Chart */

/* 表格操作插件 */
$(function(){
	// 为所有行中的删除链接添加事件处理函数（此方法可以在新增元素上绑定事件）
	$('.tablelist').on("click",".tablelink:contains('删除')",function(e){
		$(this).parent().parent().remove();
	});
	/* 错误在class未加 点 */
	// 单击"添加按钮"为表格添加一行
	$('.toolbar>li:first').on("click",function(e){
		var tablelist=$('.tablelist').append('<tr>'+
			'<td><input type="checkbox" name="goods" value="" /></td>'+
			'<td class="imgtd"><img src="images/product/nopic.gif" height="75px" width="100px"><br><input type="file" name="" id="" value="" /></td>'+
			'<td><input type="text" value="请输入商品名称" /></td>'+
			'<td><select name=""></select></td>'+
			'<td><input type="text" value="请输入数量" /></td>'+
			'<td><input type="text" value="请输入单价" /></td>'+
			'<td><input type="date" /></td>'+
			'<td><select></select></td>'+
			'<td><a href="#" class="tablelink">确定</a> <a href="#" class="tablelink">删除</a></td>'+
		'</tr>');
		// 设置新添加元素的样式
		tablelist.find('input[type="file"]').css({margin:"10px 10px 10px 0px",width:"120px"});
		tablelist.find("input[type='text']").css({border:'1px solid black',height:"20px",backgroundColor:"#FF9"});
		tablelist.find("input[type='text']:gt(0)").css({width:"80px"});
		tablelist.find("input[type='date']").css({border:"1px solid black",height:"20px",backgroundColor:"#FF9"});
		//为日期赋予初始值
		tablelist.find("input[type='date']").val(getNowTime());
		initSelect(tablelist.find("select:first"),[{text:'运动',value:'运动'},{text:'童装',value:'童装'},{text:'男装',value:'男装'},{text:'女装',value:'女装'}]);
		initSelect(tablelist.find("select:last"),[{text:'审核',value:'审核'},{text:'未审核',value:'未审核'}]);
	});
	
	// 为文本框添加focus焦点事件，获得焦点时清空文本框内容
	$('.tablelist').on("focus","input[type='text']",function(e){
		$(this).val("");
	});
	
	$(".tablelist").on("change","input[type='file']",function(e){
		var that=this;
		var file=$(".tablelist input[type='file']")[0];
		if(window.FileReader){
			var fr=new FileReader();
			fr.onload=function(e){
				$(that).prev().prev().attr("src",e.target.result);
			};
			fr.readAsDataURL(file.files[0]);
		}
	});
	
	// 单击新增行的"确定"按钮时触发的事件
	/* 错误在 class未加 点 ; indexOf() 方法 O 大写*/
	$('.tablelist').on("click",".tablelink:contains('确定')",function(e){
		var tableRow=$("<tr><td><input name='foods' type='checkbox' value='' /></td></tr>");
		var goodsImage=$(".tablelist input[type='file']")[0];
		// fireFox、Chrome等浏览器安全性要求相对较高，返回的实际路径为：c:\fakepath\xx.jpg
		// 浏览器安全性方面要求不允许直接读取本地文件，
		//此处仅作演示（IE支持，其他浏览器不支持）实际开发时，是通过Ajax结合服务器来实现的
		if(goodsImage.value!=""&&goodsImage.value.indexOf("fakepath")==-1){
			tableRow.append("<td><img src='"+goodsImage.value+"' /></td>");
		}else{
			tableRow.append("<td><img src='images/product/nopic.gif' /></td>");
		}
		// 名称
		var currentRowInput=$(this).parent().parent().find("input[type='text']");
		tableRow.append("<td>"+currentRowInput[0].value+"</td>");
		// 类型
		var goodsType=$(this).parent().parent().find("select:first")[0];
		tableRow.append("<td>"+goodsType.value+"</td>")
		// 数量
		var goodsNum=0;
		if(currentRowInput[1].value!='请输入数量'){
			goodsNum=currentRowInput[1].value;
		}
		tableRow.append("<td>"+goodsNum+"</td>");
		// 价格
		var price=0;
		if(currentRowInput[2].value!='请输入单价'){
			price=currentRowInput[2].value;
		}
		tableRow.append("<td>￥"+price+"</td>");
		// 上架时间
		var publishTime=$(this).parent().parent().find("input[type='date']");
		tableRow.append("<td>"+publishTime[0].value+"</td>")
		// 
		var isChecked=$(this).parent().parent().find("select:last").val();
		tableRow.append("<td>"+isChecked+"</td>");
		//操作
		tableRow.append('<td><a href="#" class="tablelink">确定</a><a href="#" class="tablelink">删除</a></td>');
		// 移除编辑行
		var tr=$(this).parent().parent().remove();
		$('.tablelist tbody').append(tableRow);
		$('.tablelist td img').css({width:"80px",height:"60px"});
	})
});

// 获取系统当前日期
function getNowTime(){
	var now=new Date();
	return now.getFullYear()+'-'+fixedNumber(now.getMonth())+"-"+fixedNumber(now.getDate());
}

// 对数字进行修正
function fixedNumber(num){
	if(num<10){
		return "0"+num;
	}
	return num;
}

// 对下拉列表添加下拉选项
function initSelect(element,data){
	// 为select添加option
	for (var i = 0; i < data.length; i++) {
		var option=$('<option></option>');
		option.append(data[i].text);
		option.val(data[i].value);
		$(element).append(option);
	}
	return $(element);
}
