<?php
$servername = "localhost";

$username = "root";

$password = "Starlight0524";

$dbname = "member";

$conn = mysqli_connect($servername, $username, $password, $dbname);

// Check connection

if (!$conn) {

    die("Connection failed: " . mysqli_connect_error());

}

// Retrieve form data

$username = $_POST['username'];

$email = $_POST['email'];

$password = $_POST['password'];

// Insert user data into database

$sql = "INSERT INTO users (username, email, password) VALUES ('$username', '$email', '$password')";

if (mysqli_query($conn, $sql)) {

    echo "Registration successful!";

} else {

    echo "Error: " . $sql . "<br>" . mysqli_error($conn);

}

mysqli_close($conn);
?>