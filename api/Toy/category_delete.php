<?php 

    require 'database.php';
    $postdata = file_get_contents("php://input");
    if(isset($postdata) && !empty($postdata))
    {
        $id = mysqli_real_escape_string($db, (int)$request['category_id']);
        $sql = "DELETE FROM  category WHERE category_id = '$id'";
    
        if ($db->query($sql)) {
            http_response_code(204);
        }
        else {
            return http_response_code(422);
        }
    }

    