/* 8-10table对象-方法 */
/* 在表头添加一行 */
function insertStart(){
	appendRow(1);
}

/* 在表尾追加一行 */
function insertEnd(){
	var index=myTable.rows.length;
	appendRow(index);
}

/* 添加一行 */
function appendRow(index){
	var myTable=$('#myTable').get(0);
	var row=myTable.insertRow(index);
	var userIdCell=row.insertCell(0);
	var userNameCell=row.insertCell(1);
	var deletecCell=row.insertCell(2);
	userIdCell.innerHTML=$('#userId').get(0).value;
	userNameCell.innerHTML=$('#userName').get(0).value;
	deletecCell.innerHTML="<input type='button' value='删除' onclick='deleteRow(this)' />";
}

/* 删除一行 */
function deleteRow(btnDelete){
	//获得被单击行按钮所在行的索引
	var currentIndex=btnDelete.parentNode.parentNode.rowIndex;
	var myTable = $('#myTable').get(0);
	myTable.deleteRow(currentIndex);
}

/* 添加表格标题 */
function appendCaption(){
	var myTable=$('#myTable').get(0);
	var caption= myTable.createCaption();
	caption.innerHTML="漫步时尚广场会员名单";
}

/* 移除表格标题 */
function removeCaption(){
	var myTable=$('#myTable').get(0);
	myTable.deleteCaption();
}