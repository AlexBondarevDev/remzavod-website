<?php

include 'database.php';


$imageFolderPath = $_GET['folder'];


function getImagesFromFolder($folderPath) {
    $folderWorkedPath = '/var/www/remzavo1/data/www/remzavodstankov.ru' . $folderPath;

    $images = array();
    if (is_dir($folderWorkedPath)) {
        $files = scandir($folderWorkedPath);
        foreach ($files as $file) {
            if (is_file($folderWorkedPath . '/' . $file) && pathinfo($file, PATHINFO_EXTENSION) === 'jpg') {
                $images[] = $folderPath . '/' . $file;
            }
        }
    }
    return $images;
}

$images = getImagesFromFolder($imageFolderPath);

header('Content-Type: application/json');
echo json_encode($images);
?>