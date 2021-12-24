/* 10-18本地数据库-IndexedDB数据库-定义与使用过程 */

// 初始化 获取 IndexedDB对象
var indexedDB = window.indexedDB || window.webkitIndexedDB || window.mozIndexedDB || window.msIndexedDB

// 打开or创建数据库并返回请求对象
var dbRequestd = indexedDB.open(dbName, dbVersion);

var dbRequest = indexedDB.open("MyDataBase", 1);
// 数据库连接成功，所执行的事件处理函数
dbRequest.onsuccess = function(e) {
	var idb = e.target.result; //获取链接成功时的数据据库对象
	alert('数据库连接成功!');
};

// 数据库连接失败时，所执行的错误处理函数
dbRequest.onerror = function(e) {
	alert('数据库连接失败!');
};

dbRequest.onupgradeneeded = function(e) {
	var tx = e.target.transaction;
	alert('数据库版本更新成功！版本' + e.newVersion + '=>版本' + e.newVersion);
};

// 创建对象仓库的语法
var store = idb.createObjectStore(storeName, optionalParameters);

var storeName = "users";
var optionalParameters = {
	keyPath: "id",
	autoIncrement: true
};
var store = idb.createObjectStore(storeName, optionalParameters);

// 使用事务
var tx = ibd.transaction(storeName, [mode]);

// 开启读写事务
var tx = idb.transaction('uers', 'readwrite');

// 事务结束时要执行的处理(事务结束时触发)
tx.oncomplete = function() {
	alert('数据保存成功');
}

// 事务终止时要执行的处理(事务终止时触发)
tx.onabort = function() {
	alert('数据保存失败');
}

var objectStore = tx.objectStore(storeName);

var user = {
	userName: 'guoqy',
	age = 20,
};
var tx = idb.transaction('users', 'readwrite');
var objectStore = tx.objectStore('users');
objectStore.add(user);

// 检索读取数据库内容
var request = objectStore.openCursor();
request.onsuccess = function(e) {
	var cursor = e.target.result;
	if (cursor) {
		alert(cursor.value.userName);
		cursor.continue();
	} else {
		console.log('检索结果！');
	}
};
request.onerror = function(e) {
	console.log('检索失败！');
}
