/* 03-06实战练习-购物车结算-Vue|jQuery*/
var app=new Vue({
	el:'#app',
	data:{
		list:[
			{id:1,name:'iphone 13',price:6188,count:1},
			{id:2,name:'iPad Pro',price:588,count:1},
			{id:3,name:'MacBook Pro',price:21688,count:1}
		],
		checkItem:[]
	},
	computed:{
		totalPrice:function(){
			var total=0;
			let arr2=[];
			var unique=Array.from(new Set(this.checkItem))
			this.list.filter(item=>{
				unique.includes(item.id)&&arr2.push(item);
			});
			for (var i = 0; i < arr2.length; i++) {
				var item= arr2[i];
				total+=item.price*item.count;
			}
			/* 此处做了一个千位分隔符 */
			return total.toString().replace(/\B(?=(\d{3})+$)/g,",");
		},
	},
	methods:{
		handleReduce:function(index){
			if(this.list[index].count==1)return;
			this.list[index].count--;
		},
		handleAdd:function(index){
			this.list[index].count++;
		},
		handleRemove:function(index){
			this.list.splice(index,1);
		},
		AddChecked:function(e){
			var id=parseInt($(e.target).parent().next('td').text());
			if($(e.target).prop('checked')){
				this.checkItem.push(id);
			}else{
				/* 删除指定元素没那么简单，需要先找到下标，在进行删除 */
				// this.checkItem.pop(id);	//错误，无法删除指定元素
				var indexdel= this.checkItem.findIndex(item=>item===id);
				this.checkItem.splice(indexdel,1);
			}
		},
		
		handleSelectAll:function(){
			this.checkItem.splice(0,this.checkItem.length);
			var that=this;
			
			$("input[type='checkbox']").prop('checked',true);
			$("input[type='checkbox']").each(function(index,elememt){
				var numtemp= parseInt($(elememt).parent().next('td').text());
				console.log(numtemp);
				//this.checkItem.push(numtemp);
				that.checkItem.push(numtemp);
			})
		}
	}
});