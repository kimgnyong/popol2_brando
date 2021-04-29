<?php

$hosturl = 'localhost';
$username = 'rlarmsfdyd1';
$password = 'rlaskfl22!2';
$dbname = 'rlarmsfdyd1';

$conn = mysqli_connect($hosturl,$username,$password,$dbname);
mysqli_set_charset($conn,'utf8');

if(!$conn){
  die('데이터베이스 연결 실패');
}

?>