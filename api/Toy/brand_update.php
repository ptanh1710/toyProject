<?php 

    require 'database.php';
    $postdata = file_get_contents("php://input");

    if (isset($postdata) && !empty($postdata)) {
        $request = json_decode($postdata, true);
        $id = (int)$request['brand_id'];
        $name = mysqli_real_escape_string($db, trim($request['brand_name']));
        $desc = mysqli_real_escape_string($db, trim($request['brand_desc']));

        $sql = "UPDATE brand SET brand_name = '$name', brand_desc = '$desc' WHERE brand_id = '$id'";

        if ($db->query($sql)) {
            http_response_code(204);
        }
        else {
            return http_response_code(422);
        }
    }