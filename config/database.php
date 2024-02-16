<?php
define("DB_HOST",'localhost');
define("DB_USER",'root');
define("DB_PASS",'');
define("DB_NAME",'quiz-ne');
define("DB_CHARSET", "utf8mb4");
spl_autoload_register(function ($className) {
    require_once "app/models/$className.php";
});