<?php
session_start();
if(isset($_POST['save']))
{
    extract($_POST);
    include 'database.php';
	 $uid = $_POST["UserID"];
     $pwd = $_POST["Password"];
    $sql=mysqli_query($conn,"SELECT * FROM User where userid='$uid' and Password='md5($pwd)'");
    $row  = mysqli_fetch_array($sql);
    if(is_array($row))
    {
        header("Location: ../sowjanya/home.html"); 
    }
    else
    {
        echo "Invalid Email ID/Password";
		header("Location: ../sowjanya/login.html"); 

    }
}
?>