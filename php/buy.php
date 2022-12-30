<?php
$db = new PDO('mysql:host=localhost;dbname=carbon_waste','admin','1234');
$sql = $db->prepare('insert into buy(Lproduct_name,Lsum,Lname,Laddress,Lcontent) values(:pd,:sum,:name,:address,:content)');

$product = '';
foreach($_POST as $name => $amount){
    if($name == 'name')break;
    $product .= $name . $amount . '@';
}

$sql->bindValue('pd',$product);
$sql->bindValue('sum',$_POST['Lsum']);
$sql->bindValue('name',$_POST['name']);
$sql->bindValue('address',$_POST['address']);
$sql->bindValue('content',$_POST['content']);
$sql->execute();
header('location:.././');