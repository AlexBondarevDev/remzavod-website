<?php
include 'database.php';

function fetchDataFromDatabase() {
    $conn = connectToDatabase();

    $sql = "SELECT * FROM Production";
    $result = $conn->query($sql);

    $data = array();
    if ($result->num_rows > 0) {
        while($row = $result->fetch_assoc()) {
            $data[] = $row;
        }
    }

    $conn->close();

    return $data;
}

$data = fetchDataFromDatabase();

header('Set-Cookie: HttpOnly; SameSite=Strict; Secure');
header('Content-Type: application/json');
echo json_encode($data);
?>