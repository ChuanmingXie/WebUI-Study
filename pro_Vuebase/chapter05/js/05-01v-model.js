/*  */
var app=new Vue({
	el:'#app',
	data:{
		message:'',
		txtContent:'',
		inputMessage:'',
		picked:true,
		pickedG:'js',
		checked:false,
		checkedG:[],
		selected:'js',
		selectedM:[],
		selectedvfor:'html',
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