<?php
header("Content-Type: application/json; charset=UTF-8");
include "app/Routes/UserRoute.php";
use app\Routes\UserRoute;

$method = $_SERVER["REQUEST_METHOD"];
$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);

$productRoute = new UserRoute();
$productRoute->handle($method, $path);