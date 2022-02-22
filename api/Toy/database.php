<?php 
    header("Access-Control-Allow-Origin: *");
    header('Access-Control-Allow-Credentials: true');
    header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE");
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
    header("Content-Type: application/json; charset=UTF-8");

    define('HOST', 'localhost');
    define('USERNAME', 'root');
    define('PASSWORD','');
    define('NAME', 'db_toy');
    $db = new mysqli(HOST, USERNAME, PASSWORD, NAME);
    if($db->connect_errno) {
        die("Error connecting to DATABASE " . $db->connect_errno);
    }
    