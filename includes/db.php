<?php
$connection = mysqli_connect('localhost','sds','','test_db');
if ($connection == false){
  echo '<h1>'.'Ошибка подключения!'.'</h1>';
  echo mysqli_connect_error();
  exit();
}
