<?php
include 'db.php';
if(isset($_POST['submit'])){
    $name = $_POST['name'];
    $email = $_POST['email'];
    $pass = password_hash($_POST['password'],PASSWORD_DEFAULT);

    if(!empty($name) && !empty($email) && !empty($pass)){
       $query = "INSERT INTO user(name,email,password) VALUES ('$name','$email','$pass')";
       mysqli_query($conn,$query);
       header("Location: index.php");
    }
}
?>