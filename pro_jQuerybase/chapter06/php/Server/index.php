<?php
$name = '王六';           //保存学生姓名
$birth = '1996-09-03';    //保存学生出生日期
$subject = 'PHP';         //保存学生的所选学科
$snum = '0150427001';     //保存学生学号
?>

<table>
    <tr>
        <td>姓名：</td>
        <td><?php echo $name; ?></td>
    </tr>
    <tr>
        <td>出生日期：</td>
        <td><?php echo $birth; ?></td>
    </tr>
    <tr>
        <td>学科：</td>
        <td><?php echo $subject; ?></td>
    </tr>
    <tr>
        <td>学号：</td>
        <td><?php echo $snum; ?></td>
    </tr>
</table>