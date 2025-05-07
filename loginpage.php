<!DOCTYPE html>
<html>
<body>
<?php
$servername = "localhost";
$username = "username";
$password = "password";

$user=$_POST['username'];
$pass=$_POST['password'];

$myfile = fopen("userInfo.txt", "r");
echo fread($myfile,filesize("userInfo.txt"));
if(exec('grep '.escapeshellarg($_GET['username']).' ./userInfo.txt')){
    if(exec('grep '.escapeshellarg($_GET['password']).' ./userInfo.txt')){
        $_COOKIE['GeimonSession=Valid=1'];
    }
}
fclose($myfile);
?>
<head>
  <meta http-equiv='refresh' content='0; URL=index.html'>
</head>
</body>
</html>