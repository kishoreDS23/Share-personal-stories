<?php
include 'db.php';
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $user_id = $_POST['user_id'];
    $title = $_POST['title'];
    $content = $_POST['content'];

    $stmt = $conn->prepare("INSERT INTO stories (user_id, title, content) VALUES (?, ?, ?)");
    $stmt->bind_param("iss", $user_id, $title, $content);

    if ($stmt->execute()) {
        echo json_encode(["status" => "success"]);
    } else {
        echo json_encode(["status" => "error", "message" => $stmt->error]);
    }
    $stmt->close();
}
$conn->close();
?>