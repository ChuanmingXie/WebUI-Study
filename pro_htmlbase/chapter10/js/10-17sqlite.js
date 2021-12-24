/* 10-17本地数据库-SQLite数据库-商品销售系统 */

var db = openDatabase("goodsDB", "1.0", "Walking Fashion E&S Database", 2 * 1024 * 1024);
init();

// 初始化创建按数据库
function init() {
	db.transaction(function(tx) {
		tx.executeSql("Create table if not exists saleDetail(" +
			"goodsName text not null," +
			"goodsPrice real," +
			"goodsNum int," +
			"time integer)", []);
	});
}

// 向数据表添加数据
function saveData() {
	var goodsName = $('#goodsName').get(0);
	var goodsPrice = $('#goodsPrice').get(0);
	var goodsNum = $('#goodsNum').get(0);
	var time = new Date().getTime();
	db.transaction(function(tx) {
		tx.executeSql("insert into  saleDetail (goodsName,goodsPrice,goodsNum,time) values(?,?,?,?)"
		, [goodsName.value, goodsPrice.value, goodsNum.value, time]
		, function(tx, rs) {
			alert("数据库保存成功");
			showData();
			goodsName.value = "";
			goodsPrice.value = "";
			goodsNum.value = "";
		}, function(tx, error) {
			alert('数据保存失败:' + error.message);
		});
	});
}

// 从数据表提取数据并显示
function showData() {
	var showBody = $('#showBody').get(0);
	showBody.innerHTML = "";
	db.transaction(function(tx) {
		tx.executeSql("select goodsName,goodsPrice,goodsNum,time as time from  saleDetail", [],
			function(tx, rs) {
				for (var i = 0; i < rs.rows.length; i++) {
					var tableRow = showBody.insertRow(i);
					tableRow.insertCell(0).innerHTML = rs.rows[i].goodsName;
					tableRow.insertCell(1).innerHTML = rs.rows[i].goodsPrice;
					tableRow.insertCell(2).innerHTML = rs.rows[i].goodsNum;
					tableRow.insertCell(3).innerHTML = getFormatTime(rs.rows[i].time);
				}
			},
			function(tx, error) {
				alert('数据读取失败:' + error.message);
			});
	});
}

// 删除数据表中的数据
function deleteData() {
	db.transaction(function(tx) {
		tx.executeSql("delete from  saleDetail", [],
			function(tx, rs) {
				alert('数据删除成功');
				showData();
			},
			function(tx, error) {
				alert('数据删除失败：' + error.message);
			});
	});
}

// 格式化时间显示
function getFormatTime(myDateTime) {
	var myDate = new Date(myDateTime);
	var year = myDate.getFullYear();
	var month = myDate.getMonth();
	var day = myDate.getDay();
	var hour = myDate.getHours();
	var minute = myDate.getMinutes();
	var second = myDate.getSeconds();
	return year + "年" + month + "月" + day + "日" + " " + hour + ":" + minute + ":" + second + "<br/>";
}
