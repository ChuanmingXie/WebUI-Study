$(function(){
	var opts=[{
		"text":"动漫",
		"value":"动漫",
		"subType":[
			{"value":"《哪吒》","text":"《哪吒》"},
			{"value":"《姜子牙》","text":"《姜子牙》"},
			{"value":"《二郎神》","text":"《二郎神》"}]
		},
		{
		"text":"科幻",
		"value":"科幻",
		"subType":[
			{"value":"《流浪地球》","text":"《流浪地球》"},
			{"value":"《三体》","text":"《三体》"},
			{"value":"《明日战争》","text":"《明日战争》"}]
		},
		{
		"text":"军事",
		"value":"军事",
		"subType":[
			{"value":"《上甘岭》","text":"《上甘岭》"},
			{"value":"《金刚川》","text":"《金刚川》"},
			{"value":"《长津湖》","text":"《长津湖》"},
			{"value":"《大决战》","text":"《大决战》"},
			{"value":"《战狼2》","text":"《战狼2》"}]			
		}];
	/* 自定义菜单 */
	$(".vocation:first").empty().cascadingMenuPlugins(opts);
	/* 默认菜单 */
	//$(".vocation:first").empty().cascadingMenuPlugins();
});