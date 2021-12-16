var db = openDatabase(databaseName, version, description, size);
var db = openDatabase("goodsDB", "1.0", "Walking Fashion E&S Database", 2 * 1024 * 1024);

db.transaction(function(tx) {
	tx.executeSql(sqlString, [params], function(tx, rs) {
		// 数据操作成功,数据处理
	}, function(tx, error) {
		// 数据操作失败,异常提示
	});
});

db.transaction(function(tx) {
	tx.executeSql("select * from goods");
});
