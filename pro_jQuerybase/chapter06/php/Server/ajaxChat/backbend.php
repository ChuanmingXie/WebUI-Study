<?php
// 配置信息
/* 
1.数据库连接的具体信息
2.要存储的数据条目
3.用户进入界面的时候消息显示的数目 
*/
$dbhost="101.132.152.252";
$dbuser="cloud";
$dbpass="123456";
$dbname="ChatData";
$store_num=10;
$display_num=10;

// 错误报告
error_reporting(E_ALL);

// 头部信息
header("charset:utf-8");
header("Content-type:text/html");
header("Cache-Control:no-cache");

// 连接mysql
$dbconn= mysqli_connect($dbhost,$dbuser,$dbpass);
mysqli_select_db($dbconn,$dbname);
mysqli_query($dbconn,"SET NAMES 'utf8mb4'");

// 为了方便请求数据，为每个请求的参数设置一个变量，每个变量将把请求中的参数值作为自己的值
// foreach语句遍历所有POST数据，并且为每个参数建立一个变量，并把它赋值
foreach($_POST as $key=>$value){
    // echo $value.'<br>';
    $$key=mysqli_real_escape_string($dbconn,$value);
}

// 屏蔽任何错误提示，判断action是否等于postmsg
if(@$action=="postmsg"){
    // 插入数据 错在连接串的引号，逗号问题
    // echo "INSERT INTO messages(user,msg,time)VALUES("."'".$name."','".$message."','".time().")";
    mysqli_query($dbconn,"INSERT INTO messages(user,msg,time)VALUES("."'".$name."','".$message."','".time()."')");
    // ('INSERT INTO '.$table.' ('.$cols.') VALUES ('.$vals.')');
    // 删除数据(默认存储10条数据)
    // echo "DELETE FROM messages WHERE id<=".(mysqli_insert_id($dbconn)-$store_num);
    mysqli_query($dbconn,"DELETE FROM messages WHERE id<=".(mysqli_insert_id($dbconn)-$store_num));
}

// 查询数据 错在空格漏加少加
// echo "SELECT user,msg FROM messages WHERE time > ".$time." ORDER BY id ASC LIMIT ".$display_num;
$messages=mysqli_query($dbconn,"SELECT user,msg FROM messages WHERE time > ".$time." ORDER BY id ASC LIMIT ".$display_num);

// $result = mysqli_query($dbconn, "SELECT id, user FROM messages ORDER BY user");
// $row_cnt = mysqli_num_rows($result);
// echo $row_cnt;
// echo mysqli_num_rows($messages);
if(mysqli_num_rows($messages))
    $status_code=1;
else 
    $status_code=2;

// 返回xml数据结构
echo "<?xml version=\"1.0\"?>\n";
echo "<reponse>\n";
echo "\t<status>$status_code</status>\n";
echo "\t<time>".time()."</time>\n";
if($status_code==1){
    while($message=mysqli_fetch_array($messages)){
        $message['msg']=htmlspecialchars(stripslashes($message['msg']));
        echo "\t<message>\n";
        echo "\t\t<author>$message[user]</author>\n";
        echo "\t\t<text>$message[msg]</text>\n";
        echo "\t</message>\n";
    }
}
echo "</response>";
