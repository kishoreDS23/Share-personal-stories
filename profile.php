<?php
include 'config.php';
session_start();
if (!isset($_SESSION['user_id'])) {
    die("Access denied. Please log in.");
}
$user_id = $_SESSION['user_id'];
$stmt = $conn->prepare("SELECT username, email FROM users WHERE id = ?");
$stmt->bind_param("i", $user_id);
$stmt->execute();
$result = $stmt->get_result()->fetch_assoc();
$stmt->close();
?>
<!DOCTYPE html>
<html>
<head><title>Profile</title></head>
<body>
    <h1>Welcome, <?php echo htmlspecialchars($result['username']); ?></h1>
    <p>Email: <?php echo htmlspecialchars($result['email']); ?></p>
    <a href="logout.php">Logout</a>
</body>
</html>