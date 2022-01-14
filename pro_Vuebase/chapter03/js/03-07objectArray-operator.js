/* 3-7objectArray-operator-Vue数组对象操作 */

// Vue 使用Computed传递参数
var app=new Vue({
	el:'#app',
	data:{
		item:{
			photos:[
				{src:"https://tse3-mm.cn.bing.net/th/id/OIP-C.nfC2tVNM9TgwQ5QuqECd6wHaFj?pid=ImgDet&rs=1"},
				{src:"https://scpic.chinaz.net/files/pic/pic9/202009/apic27858.jpg"},
			],
			photo:[
				"https://tse3-mm.cn.bing.net/th/id/OIP-C.nfC2tVNM9TgwQ5QuqECd6wHaFj?pid=ImgDet&rs=1",
				"https://scpic.chinaz.net/files/pic/pic9/202009/apic27858.jpg"
			]
		}
	},
	computed:{
		photoList:function(){
			return function(value){
				var imgList=[];
				for (var i = 0; i < value.length; i++) {
					imgList.push({src:value[i]});
				}
				return imgList;
			}
		}
	}
});

// v-on监听事件传递元素自身作为参数进行节点信息的获取操作
var app1=new Vue({
	el:'#app1',
	data:{list:[]},
	computed:{},
	methods:{
		clickMyself(e){
			var that=this;	//复制一个Vue对象，通过that指针操作Vue中的data数据
			console.log($(e.target));
			console.log($(e.target).parent().next('li').innerHTML);
			console.log($(e.target).parent().next('li').outerHTML);
			$(e.target).parent().next('li').each(function(index,element){
				$(element).append($("<ul><li><span>我是追加的</span></li></ul>"));
				that.list.push($(element).text())
			});
			console.log($(e.target).parent().siblings());
			alert($(e.target).parent().next('li').text())
			console.log(this.list);
		}
	}
})

// 头部、尾部、任意位置 添加、删除和修改数组元素和元素值
// unshift(arg1,arg2)、shift()、push(arg1,arg2)、pop()、splice(index,howmany,item)
var app2=new Vue({
	el:'#app2',
	data:{
		item:{
			arr:['苹果','香蕉','橙子'],
			array1:['1','2','3'],
			arr2:['a','b','c','d'],
			arrList: [
				{"id":0,"title":"11111","cont":"99999"},
				{"id":1,"title":"22222","cont":"22222"},
				{"id":2,"title":"33333","cont":"33333"},
				{"id":3,"title":"44444","cont":"44444"},
				{"id":4,"title":"55555","cont":"55555"},
				{"id":5,"title":"66666","cont":"66666"},
				{"id":6,"title":"77777","cont":"77777"},
				{"id":7,"title":"77777","cont":"88888"}
	 
			]
		}
	},
	computed:{},
	methods:{
		methodIncludes(arr,info){
			return (arr.includes(info)==true?'':'不')+'存在搜索数据';
		},
		addData(){
			this.item.arr.push('石榴');				//尾部添加
			this.item.arr.unshift("石榴",'枇杷');	//头部添加
			this.item.arr2.splice(1,0,'ttt')		//在位置1添加'ttt',后面的数据依次后移
		},
		moveData(){
			this.item.arr.pop();			//尾部删除
			this.item.arr.shift();			//头部删除
			this.item.arr2.splice(1,1);		//从位置1处开始删除数量为1的元素
		},
		replaceData(){
			this.item.arr2.splice(1,1,'ttt');	//从位置1处修改数量为1的数据为'ttt'
		},
		sortData(){
			this.item.arrList.sort((a,b)=>a.count-b.count);
		},
		reverserData(){
			this.item.arrList.reverse();		//排序
		},
	}	
})

/* 判断数组中是否存在某元素 */
function includesApply(){
	var includes1=['1','2','3'].includes(1);
	var includes2=[4,5,6].includes(8);
	var includes3=['1','2','3'].includes('3');
	console.log(includes1)
	console.log(includes2)
	console.log(includes3)
}

/* 从指定位置删除数据 */
function arrayDelete(){
	var list=[{
				type:'电子产品',
				id:'1',
				product:[{id:1,name:'iphone 13',price:6188,count:1,rowspanShow:true},
						{id:2,name:'iPad Pro',price:588,count:1,rowspanShow:false},
						{id:3,name:'MacBook Pro',price:21688,count:1,rowspanShow:false}]
			},{
				type:'生活用品',
				id:'2',
				product:[{id:1,name:'餐桌用纸',price:23,count:1,rowspanShow:true},
						{id:2,name:'晾衣架',price:68,count:1,rowspanShow:false},
						{id:3,name:'洗菜盆',price:20,count:1,rowspanShow:false}]
				
			},{
				type:'蔬菜瓜果',
				id:'3',
				product:[{id:1,name:'苹果',price:35,count:1,rowspanShow:true},
						{id:2,name:'黄瓜',price:20,count:1,rowspanShow:false},
						{id:3,name:'毛豆',price:8,count:1,rowspanShow:false}]
			}];
	console.log(list);	
	let deleteIndex = list.findIndex(item=>item.id==='2');	
	list.splice(deleteIndex,1);	
	console.log(list);
}

/* push合并数组的用法 */
function pushApply(){
	var vegetables = ['parsnip', 'potato'];
	var moreVegs = ['celery', 'beetroot'];
	// 将第二个数组融合进第一个数组
	// 相当于 vegetables.push('celery', 'beetroot');
	Array.prototype.push.apply(vegetables, moreVegs);
	console.log(vegetables); 
	// ['parsnip', 'potato', 'celery', 'beetroot']
	
	var obj={
		length:0,
		addElem:function addElem(elem){
			// obj的长度是自增的，每次添加元素都会自增
			[].push.call(this,elem);
		}
	};
	// 现在添加一些空对象，然后测试数组长度
	obj.addElem({});
	obj.addElem({});
	console.log(obj.length);
}

/* 清空数组的三种方式 */
function emptyArray(){
	var a=[];	var b=[];	var c=[];
	for (var i = 0; i < 100000000; i++) {
		a.push(i);
		b.push(i);
		c.push(i);
	}
	
	console.time('splice');
	a.splice(0,a.length);
	console.timeEnd('splice');
	
	console.time('length');
	b.length=0;
	console.timeEnd('length');
	
	console.time('赋值[]');
	c=[];
	console.timeEnd('赋值[]');
}

// 对数组元素进行去重操作
function DuplicateArray(){
	const arr = [1, 2, 2, 'abc', 'abc', true, true, false, false, undefined, undefined, NaN, NaN]
	console.log(arr.join(','));
	// 1.利用Set()+Array.from()
	console.log(Array.from(new Set(arr)));
	
	// 2.利用两层循环+数组的splice方法
	console.log(removeDuplicateSplice(arr));
	
	// 3.利用数组的indexOf方法
	console.log(removeDuplicateIndexOf(arr));
	
	// 4.利用数组的includes方法
	console.log(removeDuplicateIncludes(arr));
	
	// 5.利用数组的filter()+indexOf()
	console.log(removeDuplicateFilter(arr));
	
	// 6.利用Map()
	console.log(removeDuplicateMap(arr));
	
	// 7.利用对象
	console.log(removeDuplicata(arr));
}

// 2.利用两层循环+数组的splice方法
/* 通过两层循环对数组元素进行逐一比较，然后通过splice方法来删除重复的元素。
此方法对NaN是无法进行去重的，因为进行比较时NaN !== NaN。 */
function removeDuplicateSplice(arr){
	let len=arr.length;
	for (var i = 0; i < len; i++) {
		for (var j = i+1; j < len; j++) {
			if(arr[i]===arr[j]){
				arr.push(j,1);
				len--;
				j--;
			}
		}
	}
	return arr;
}

// 3.利用数组的indexOf方法
/* 新建一个空数组，遍历需要去重的数组，将数组元素存入新数组中，
存放前判断数组中是否已经含有当前元素，没有则存入。此方法也无法对NaN去重。 */
function removeDuplicateIndexOf(arr){
	const newArr=[];
	arr.forEach(item=>{
		if(newArr.indexOf(item)===-1){
			newArr.push(item);
		}
	})
	return newArr;
}

// 4.利用数组的includes方法
/* 此方法逻辑与indexOf方法去重异曲同工，
只是用includes方法来判断是否包含重复元素。 */
function removeDuplicateIncludes(arr){
	const newArr=[];
	arr.forEach(item=>{
		if(!newArr.includes(item)){
			newArr.push(item);
		}
	})
	return newArr;
}

// 5.利用数组的filter()+indexOf()
/* 这里的输出结果中不包含NaN，是因为indexOf()无法对NaN进行判断，
即arr.indexOf(item) === index返回结果为false。测试如下： */
function removeDuplicateFilter(arr){
	return arr.filter((item,index)=>{
		retrun arr.indexof(item)===index
	})
}

// 6.Map()
/* Map对象是JavaScript提供的一种数据结构，结构为键值对形式，
将数组元素作为map的键存入，然后结合has()和set()方法判断键是否重复。 */
/* Map 对象：用于保存键值对，并且能够记住键的原始插入顺序。
任何值（对象或者原始值）都可以作为一个键或一个值。 */
function removeDuplicateMap(arr){
	const map=new Map();
	const newArr=[];
	arr.forEach(item=>{
		if(!map.has(item)){
			map.set(item,true);
			newArr.push(item);
		}
	})
	return newArr;
}

// 7.其实现思想和Map()是差不多的，主要是利用了对象的属性名不可重复这一特性。
function removeDuplicataObj(arr){
	const newArr=[];
	const obj={};
	arr.forEach(item=>{
		if(!obj[item]){
			newArr.push(item);
			obj[item]=true;
		}
	})
	return newArr;
}