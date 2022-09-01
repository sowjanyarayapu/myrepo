<?php
session_start();
if(isset($_POST['save']))
{
    extract($_POST);
    include 'database.php';
	
// Check connection
if (!$conn) {
      die("Connection failed: " . mysqli_connect_error());
}
else{
	$name = $_POST["firstname"];
     $uid = $_POST["user"];
     $pwd = $_POST["pass"];
echo "Connected successfully";
 
$sql = "INSERT INTO User (name,userid,password) VALUES ($name,$uid,$pwd)";
if (mysqli_query($conn, $sql)) {
      echo "Signup successful, Please login now";
	  header("Location: ../sowjanya/login.html"); 

} else {
      echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}
}
mysqli_close($conn);
?>