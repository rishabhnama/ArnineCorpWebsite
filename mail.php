<?php

if(isset($_POST['submit'])){

$name1 = $_POST['name1'];
$name2 = $_POST['name2'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$city = $_POST['city'];
$state = $_POST['state'];
$zip = $_POST['zip'];
$dropdown = $_POST['dropdown'];
$checkbox1 = $_POST['checkbox1'];
$checkbox2 = $_POST['checkbox2'];
$message = $_POST['message'];




$formcontent=" From: $name1 $name2 \n Email: $email \n Phone: $phone \n City: $city \n State: $state \n Zip: \n Call Back: $checkbox2 \n Enquiry On: $dropdown \n Message: $message";
$recipient = "rishabhnama.work@gmail.com";
$subject = "Contact Form";
$mailheader = "From: $email \r\n";
mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
header("Location: contactform.php?mailsend");
echo "Thank You!";

}
?>