<?php
include 'db.php';

$result = $conn->query("SELECT stories.id, stories.title, stories.content, users.name FROM stories JOIN users ON stories.user_id = users.id ORDER BY stories.created_at DESC");

$stories = [];
while ($row = $result->fetch_assoc()) {
    $stories[] = $row;
}

echo json_encode($stories);
$conn->close();
?>