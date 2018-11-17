<?php
$users= mysqli_query($connection,"SELECT * FROM `users`");
while($users_shower = mysqli_fetch_assoc($users))
{
  echo '<br>'.$users_shower['login'].'-'.$users_shower['password'];
}
?>
