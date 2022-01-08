$(function(){
	var opts=[{
		"text":"肉类",
		"value":"肉类",
		"subType":[
			{"value":"新西兰进口牛乳","text":"新西兰进口牛乳"},
			{"value":"西班牙大龙虾","text":"西班牙大龙虾"},
			{"value":"新疆大盘鸡","text":"新疆大盘鸡"}]
		},
		{
		"text":"小吃",
		"value":"小吃",
		"subType":[
			{"value":"日本寿司","text":"日本寿司"},
			{"value":"法国法棍改版","text":"法国法棍改版"},
			{"value":"意大利意面","text":"意大利意面"}]
		},
		{
		"text":"火锅",
		"value":"火锅",
		"subType":[
			{"value":"转转小火锅","text":"转转小火锅"},
			{"value":"四川麻辣香火锅","text":"四川麻辣香火锅"},
			{"value":"重庆牛油火锅","text":"重庆牛油火锅"},
			{"value":"汽锅鸡","text":"汽锅鸡"},
			{"value":"云南火锅","text":"云南火锅"}]			
		}];
	/* 自定义菜单 */
	$(".vocation:first").empty().cascadingMenuPlugins(opts);
	/* 默认菜单 */
	//$(".vocation:first").empty().cascadingMenuPlugins(null);
});