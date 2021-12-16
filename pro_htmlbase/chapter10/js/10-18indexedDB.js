var indexedDB = window.indexedDB || window.webkitIndexedDB || window.mozIndexedDB || window.msIndexedDB;

var dbName = "goosDB";
var dbversion = 1;
var storeName = "commentStore";
var idb = null;
init();

function init() {
	var dbRequest = indexedDB.open(dbName, dbversion);
	dbRequest.onsuccess = function(e) {
		idb = e.target.result;
		alert('数据库连接成功!');
	};
	dbRequest.onerror = function(e) {
		alert('数据库连接失败!');
	};
	dbRequest.onupgradeneeded = function(e) {
		idb = e.target.result;
		if (!idb.objectStoreNames.contains(storeName)) {
			var optionalParameters = {
				keyPath: 'id',
				autoIncrement: true
			};
			var objectStore = idb.createObjectStore(storeName, optionalParameters);
			alert('对象仓库创建成功!');
		}
		var tx = e.target.transaction;
		alert('数据库版本更新成功！版本' + e.oldVersion + "=>版本" + e.newVersion);
	};
}


function saveData() {
	var goodsName = $('#goodsName').get(0);
	var goodsComment=$('#goodsComment').get(0);
	var goodsGrade=$('#goodsGrade').get(0);
	var time=new Date().getTime();
	var comment={
		goodsName:goodsName.value,
		goodsComment:goodsComment.value,
		goodsGrade:goodsGrade.value,
		time:time
	};
	var tx=idb.transaction(storeName,"readwrite");
	tx.oncomplete=function(){
		alert('数据保存成功');
	};
	tx.onabort=function(){
		alert('数据保存失败');
	}
	var objectStore=tx.objectStore(storeName);
	objectStore.add(comment);
}

function showData() {
	var showBody=$('#showBody').get(0);
	showBody.innerHTML="";
	var tx=idb.transaction(storeName,'readonly');
	var objectStore=tx.objectStore(storeName);
	var dbRequest=objectStore.openCursor();
	dbRequest.onsuccess=function(e){
		var cursor=e.target.result;
		if(cursor){
			var tableRow=showBody.insertRow(0);
			tableRow.insertCell(0).innerHTML=cursor.value.goodsName;
			tableRow.insertCell(1).innerHTML=cursor.value.goodsComment;
			tableRow.insertCell(2).innerHTML=createStar(cursor.value.goodsGrade);
			tableRow.insertCell(3).innerHTML=getFormatTime(cursor.value.time);
			cursor.continue();
		}else{
			console.log('检索结束!');
		}
	};
	dbRequest.onerror=function(e){
		console.log('检索失败!');
	};
}

function deleteData(databaseName) {
	var request=indexedDB.deleteDatabase(databaseName);
	var showBody=$('#showBody');
	showBody.innerHTML="";
}

function createStar(goodsGrade) {
	var stars = "";
	for (var i = 0; i < goodsGrade; i++) {
		stars += "⭐";
	}
	return stars;
}

function getFormatTime(myDateTime) {
	var mytime = new Date(myDateTime);
	var year = mytime.getFullYear();
	var month = mytime.getMonth();
	var day = mytime.getDay();
	var hour = mytime.getHours();
	var minute = mytime.getMinutes();
	var second = mytime.getSeconds();
	return year + "年" + month + "月" + day + "日" + " " + hour + ":" + minute + ":" + second + "<br/>";
}
