/* 8-3综合复习小应用-问卷调查 */
var app=new Vue({
	el:'#app',
	data:{
		questions:[
			{
				type:'radio',
				title:'你的性别',
				choices:["男","女","保密"],
				picked:""
			},
			{
				type:"multi",
				title:"你的爱好",
				choices:['看苏','游泳','跑步','看电影','听音乐'],
				picked:[]
			},
			{
				type:"typetext",
				title:"自我介绍",
				text:""
			}
		]
	},
	methods:{
		handleSubmit:function(e){
			var text="";
			text+="你是"+e[0].picked+"的\n";
			text+="你喜欢"+e[1].picked.join("和")+"\n";
			text+="你说"+e[2].text+"\n";
			alert(text);
		}
	}
})