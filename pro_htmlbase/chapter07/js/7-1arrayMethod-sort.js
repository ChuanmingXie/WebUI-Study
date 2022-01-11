/* 数组排序 */
//1. 使用JavaScript中if条件语句和sort()函数按字母顺序对数组或对象进行排序
/* 1.1. 数组排序 */
var a = ['banana', 'apple', 'orange']
var arraySort = a.sort();
console.log(arraySort);

/* 1.2. 对象排序 */
var a = [
	{FirsName:"Ellie", LastName:"Williams"},
	{FirsName:"Crockford", LastName:"Douglas"},
	{FirsName:"C.Zakas", LastName:"nicholas"},
	{FirsName:"C.Zakas", LastName:"aicholas"},
	{FirsName:"C.Zakas", LastName:"bicholas"},
	{FirstName:"Lara", LastName : "Croft"}
];
/* 按字母排序，同时会将大小写字母分开排序，完全按照ASCII */
function objectSort0(x, y){
    if (x.LastName < y.LastName) {return -1;}
    if (x.LastName > y.LastName) {return 1;}
    return 0;
}
var s = a.sort(objectSort0);
console.log(s);

var books=[
		{name:'《Vue.js实战》',author:'谢传明'},
		{name:'《JavaScript精粹》',author:'Douglas Crockford'},
		{name:'《JavaScript高级程序设计》',author:'nicholas C.Zakas'},
		{name:'《CSS样式》',author:'弓也长'},
		{name:'《HTML5》',author:'谢以安'},
		{name:'《React全家桶》',author:'张志伟'},
		{name:'《设计模式》',author:'D'}
];
var booksCopy=[
		{name:1,author:'谢传明'},
		{name:20,author:'Douglas Crockford'},
		{name:"5",author:'nicholas C.Zakas'},
		{name:9,author:'弓也长'},
		{name:8,author:'谢以安'},
		{name:"10",author:'张志伟'},
		{name:38,author:'D'}
];
function sortlambda(x, y) {
	//此方法对这种对象中含有字符串数据无用，而是需要通过if进行字符串比较
	// return x.name - y.name; 
	if(x.name<y.name) {return -1;}
	if(x.name>y.name) {return 1;}
	return 0;
}
var objectSort = books.sort(sortlambda);
console.log(objectSort);

var objectSortCopy = booksCopy.sort(sortlambda);
console.log(objectSortCopy);

/*2. 使用JavaScript中的localeCompre()和sort()函数按字母顺序对对象或数组进行排序 */
// 2.1. 除了使用if条件句，localeCompre()提供了许多其他的比较选项，可在函数内部设置这些选项
function sortLambdaLoacleCompre(x, y) {
	return x.author.localeCompare(y.author);	//有效的排序
}
// var objectSort2 = books.sort(sortLambdaLoacleCompre);
// console.log(objectSort2);

/* 2.2. 在比较期间忽略任何标点符号和特殊字符。
例如，如果我们在某人的姓氏之前有标点符号，则该函数不会对数组进行排序。
在这种情况下，我们可以使用 localeCompare() 函数并将其设置为在比较期间忽略标点符号。 */
function SortLambdaLoacle(x, y) {
	return x.name.localeCompare(y.name, 'fr', {ignorePunctuation: true});	//有效的排序
}
var objectSort3 = books.sort(SortLambdaLoacle);
console.log(objectSort3);

/*3.使用JavaScript中的Collator()和Sort()函数按字母顺序对数组或对象排序  */
const collator = new Intl.Collator('en'); //en:英文；cn:中文
function SortArray(x, y) {
	return collator.compare(x.name, y.name);	//有效的排序
}
// var objectSort4 = books.sort(SortArray);
// console.log(objectSort4);


