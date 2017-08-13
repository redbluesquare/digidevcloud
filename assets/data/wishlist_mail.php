<?php
$material = $_POST['product_number'];
$token = $_POST['token'];
$email = $_POST['email'];
$date = date('d-M-Y');
$result = array('success'=> false);

// the message
$msg = "Token: ".$token."\n";
$msg .= "E-mail: ".$email."\n";
$msg .= "Material: ".$material."\n";
$msg .= "Date sent: ".$date;

// use wordwrap() if lines are longer than 70 characters
$msg = wordwrap($msg,70);

// send email
if(mail("darryl@redbluesquare.co.uk","My Bosch Wishlist",$msg)){
	$result['success'] = true;
	$result['msg'] = "Wishlist updated";
}
echo json_encode($result);

?>