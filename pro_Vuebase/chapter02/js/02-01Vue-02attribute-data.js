/* 2-1Vue实例与绑定-属性-data */
/* 自定义一个已有变量，建立双向绑定后，修改其中任意一个时，另一个也会改变 */
var mydata={a:1}
var app=new Vue({
	el:'#app1',
	data:mydata
});
console.log("app.a:"+app.a);
/* 从新复制查看数据 */
app.a=2;
console.log("mydata.a:"+mydata.a);
mydata.a=3;
console.log("app.a:"+app.a);

var app=new Vue({
	el:'#app2',
	data:{a:2},
	created:function(){
		console.log("this.a:"+this.a);
	},
	mounted:function() {
		console.log(this.$el);
	}
});