<?php

  include_once('header.php');

  $email = $_POST['email'];
  $name  = $_POST['name'];
  $message = $_POST['message'];
  $question = $_POST['question'];


  $sql = "insert into b_user_email (email,name,message,question) values ('$email','$name','$message','$question');";
  $result = mysqli_query($conn, $sql);
  
  if($result){
    echo 'Your message was sent successfully. Thanks.';
  }

  include_once('footer.php');

?>

<!-- http://rlarmsfdyd1.dothome.co.kr/포트폴리오2번/header.php -->