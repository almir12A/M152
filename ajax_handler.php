<?php
//sleep(5);
$liste =['me@me','mu@mu'];
$name = $_GET['email'];
if (in_array($name, $liste)){
  echo "false";
}else {
  echo "true";
}
?>
