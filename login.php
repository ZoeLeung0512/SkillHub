<?php
// Start session

session_start();

// Check if email and password are submitted

if(isset($_POST['email']) && isset($_POST['password'])) {

    

    // Establish database connection

    $mysqli = new mysqli('localhost', 'root', 'Starlight0524', 'member');

    // Sanitize email and password inputs

    $email = $mysqli->real_escape_string($_POST['email']);

    $password = $mysqli->real_escape_string($_POST['password']);

    // Query database for user with matching email and password

    $query = "SELECT * FROM users WHERE email='$email' AND password=MD5('$password')";

    $result = $mysqli->query($query);

    // Check if query returned a result

    if($result->num_rows == 1) {

        // Fetch user data and store in session

        $user = $result->fetch_assoc();

        $_SESSION['user_id'] = $user['id'];

        // Redirect user to dashboard

        header('Location: dashboard.php');

        exit();

    } else {

        // Display error message if no matching user found

        $message = "Invalid email or password. Please try again.";

    }

    // Close database connection

    $mysqli->close();

}

?>