$(function(){
	var opts=[{
		"text":"男装",
		"value":"男装",
		"subType":[
			{"value":"男士外套","text":"男士外套"},
			{"value":"男士内搭","text":"男士内搭"},
			{"value":"国潮风范","text":"国潮风范"}]
		},
		{
		"text":"女装",
		"value":"女装",
		"subType":[
			{"value":"开衫毛衣","text":"开衫毛衣"},
			{"value":"印花裙装","text":"印花裙装"},
			{"value":"休闲外套","text":"休闲外套"}]
		},
		{
		"text":"腕表",
		"value":"腕表",
		"subType":[
			{"value":"瑞士卡西欧","text":"瑞士卡西欧"},
			{"value":"意大利天梭","text":"意大利天梭"},
			{"value":"天王表","text":"天王表"},
			{"value":"德国G匠","text":"德国G匠"},
			{"value":"国产国潮","text":"国产国潮"}]			
		}];
	/* 自定义菜单 */
	$(".vocation:first").empty().cascadingMenuPlugins(opts);
	/* 默认菜单 */
	//$(".vocation:first").empty().cascadingMenuPlugins();
});