<?php

include_once('header.php');

$sql = "create table b_user_email(
  idx int auto_increment not null,
  email varchar(30) not null,
  name varchar(30) not null,
  message varchar(300) not null,
  question int(10) not null,
  primary key(idx)
)ENGINE = InnoDB DEFAULT CHARSET=utf8;";
$result=mysqli_query($conn, $sql);

$result = mysqli_query($conn, $sql);
if(!$result){
  die('테이블 생성 실패');
}
echo '테이블 생성 성공';

include_once('footer.php');
?>

