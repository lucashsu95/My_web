<?php
$db = new PDO('mysql:host=localhost;dbname=carbon_waste','admin','1234');
$sql=$db->prepare('insert into information(username,usergmail,usercontent) values(:un,:ug,:uc)');
$sql->bindValue('un',$_POST['username']);
$sql->bindValue('ug',$_POST['usergmail']);
$sql->bindValue('uc',$_POST['usercontent']);
$sql->execute();
header('location:.././');