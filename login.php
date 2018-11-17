<meta charset="UTF-8">
<head>
  <meta charset="UTF-8">
  <title>Form</title>
  <link href="https://fonts.googleapis.com/css?family=Oswald:400,700&amp;subset=cyrillic" rel="stylesheet">
  <link rel="stylesheet" href="/css/php.css">
</head>
<link rel="stylesheet" href="/css/php.css">
<body>
<header>
<?php

include 'includes\db.php';

$login = $_POST['name'];
$password = $_POST['pass'];
$if_registration = $_POST['if_registration'];

if ($if_registration == false) {
  $count = mysqli_query($connection, "SELECT * FROM `users` WHERE `login` = '$login' AND `password` = '$password'");

  if(mysqli_num_rows($count) == 0)
  {
    echo 'Вы не зареганы!';
    echo '<br><a href="/index.html">Зарегайтесь!</a>';
  }
  else
    echo '<h1 class="welcome bck_btn">'.'Hello, '.$login.'</h1>'.'<br>Вход успешен!';
}
else {
  mysqli_query($connection, "INSERT INTO `users` (`login`,`password`) VALUES('$login','$password')");
  echo 'Зареганы!Реги:<br>Логин: '.$login.'<br>Pass: '.$password;
}
?>
</header>
</body>
