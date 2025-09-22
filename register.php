<?php
include 'db.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $email = $_POST['email'];
    $password = password_hash($_POST['password'], PASSWORD_DEFAULT);
    $name = $_POST['name'];

    $stmt = $conn->prepare("INSERT INTO users (email, password, name) VALUES (?, ?, ?)");
    $stmt->bind_param("sss", $email, $password, $name);

    if ($stmt->execute()) {
        echo json_encode(["status" => "success"]);
    } else {
        echo json_encode(["status" => "error", "message" => $stmt->error]);
    }

    $stmt->close();
}
$conn->close();
?>