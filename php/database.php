<?php

function connectToDatabase() {
    $servername = "...";
    $username = "...";
    $password = "...";
    $dbname = "...";

    $conn = new mysqli($servername, $username, $password, $dbname);

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    return $conn;
}

?>
