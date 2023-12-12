<?php
    $limit =  $_GET['limit'];

    $content = file_get_contents("https://todo.doczilla.pro/api/todos");
    echo $content;
?>