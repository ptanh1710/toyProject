<?php 

    require 'database.php';
    $postdata = file_get_contents("php://input");

    if (isset($postdata) && !empty($postdata)) {
        $request = json_decode($postdata, true);
        $id = (int)$request['category_id'];
        $name = mysqli_real_escape_string($db, trim($request['category_name']));
        $note = mysqli_real_escape_string($db, trim($request['category_note']));

        $sql = "UPDATE category SET category_name = '$name', category_note = '$note' WHERE category_id = '$id'";

        if ($db->query($sql)) {
            http_response_code(204);
        }
        else {
            return http_response_code(422);
        }
    }