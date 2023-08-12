<?php  
$host = 'localhost';  
$user = 'root';  
$pass = '';
$dbname = 'contactform'  
$conn = mysqli_connect($host, $user, $pass,$dbname);  
if(! $conn )  
{  
  die('Could not connect: ' . mysqli_error());  
}  
echo 'Connected successfully';  
mysqli_close($conn);  
?>  
