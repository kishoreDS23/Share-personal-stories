<?php
$host = 'localhost';
$user = 'root'; // Default XAMPP username
$password = ''; // Default XAMPP password
$database = 'story_sharing';

$conn = new mysqli($host, $user, $password, $database);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>