/*  */
var app=new Vue({
	el:'#app',
	data:{		
		message:'', 		//文本框绑定
		txtContent:'',		//文本域绑定
		inputMessage:'',	//实时更新文本框输入内容
		
		checked:false,		//一个复选框
		checkedG:[],		//一组复选框
		
		picked:true,		//第一个单选按钮
		pickedG:'js',		//一组单选按钮互斥
		
		selected:'js',		//单选下拉框
		selectedM:[],		//多选下拉框
		selectedvfor:'html',	//v-for设置下拉框
		options:[
			{text:'HTML',value:'html'},
			{text:'JavaScript',value:'js'},
			{text:'CSS',value:'css'}
		]
	},
	methods:{
		handleInput:function(e){
			this.inputMessage=e.target.value;
		}
	}
})