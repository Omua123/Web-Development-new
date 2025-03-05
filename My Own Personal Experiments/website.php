<php
header("Location: thank-you.html");
exit();

$host = 'localhost';
$dbname = 'my_books_db';
$username = 'root';
$password = '';

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $stmt = $pdo->query("SELECT * FROM feedback ORDER BY submitted_at DESC");
    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
        echo "&lt;div class='feedback-entry'&gt;";
        echo "&lt;h3&gt;" . htmlspecialchars($row['name']) . " said:&lt;/h3&gt;";
        echo "&lt;p&gt;" . htmlspecialchars($row['feedback']) . "&lt;/p&gt;";
        echo "&lt;small&gt;Submitted on: " . $row['submitted_at'] . "&lt;/small&gt;";
        echo "&lt;/div&gt;&lt;hr&gt;";
    }
} catch (PDOException $e) {
    echo "Error: " . $e->getMessage();
}
?>