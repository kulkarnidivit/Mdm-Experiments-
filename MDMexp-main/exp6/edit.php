<?php
include 'db.php';
if (isset($_GET['id'])) {
    $id = intval($_GET['id']);
} else {
    die("No ID provided");
}
if(isset($_POST['update'])){
    $name = $_POST['name'];
    $email = $_POST['email'];

    mysqli_query($conn,"UPDATE user SET name = '$name',email ='$email' WHERE id = $id");
    header("Location: index.php");
    exit;
}
$data = mysqli_fetch_assoc(mysqli_query($conn,"SELECT * FROM user WHERE id = $id"));
?>

<form method="POST">
    <input type="text" name = "name" value = "<?=$data['name']?>">
    <input type="email" name = "email" value = "<?=$data['email']?>">
    <button type="submit" name = "update">Update</button>
</form>