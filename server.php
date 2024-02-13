<?php

$action = isset($_GET['action']) ? $_GET['action'] : '';

if (function_exists($action)) {
    echo $action();
} else {
    echo "Неверная функция";
}

function myPhpFunction() {
    return "Привет из PHP!";
}

function XJX() {
    return "asasa";
}


?>



---


    



<h3 id="result">Результат от PHP:</h3>
    <h3 id="cl635">Вызвать PHP-функцию</h3>

    <script>
        document.addEventListener("DOMContentLoaded", function() {
            var myHeading = document.getElementById("cl635");

            myHeading.addEventListener("click", function() {
                var xhr = new XMLHttpRequest();
                xhr.onreadystatechange = function() {
                    if (xhr.readyState === 4 && xhr.status === 200) {
                        document.getElementById("result").innerHTML = "Результат от PHP: " + xhr.responseText;
                    }
                };
                xhr.open("GET", "server.php?action=XJX", true);
                xhr.send();
            });
        });
    </script>