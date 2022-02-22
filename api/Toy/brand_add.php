<?php
    include ("database.php");
    $postdata = file_get_contents("php://input");

    if(isset($postdata) && !empty($postdata))
    {
        $request = json_decode($postdata);
        $name = mysqli_real_escape_string($db, trim($request->brand_name));
        $desc = mysqli_real_escape_string($db, trim($request->brand_desc));
        $sql = "INSERT INTO brand(brand_name, brand_desc) VALUES ('$name','$desc')";
        if ($db->query($sql)) {
            http_response_code(200);
            $authdata = [
                'brand_id' => mysqli_insert_id($db),
                'brand_name' => $name,
                'brand_desc' => $desc,
            ];
            echo json_encode($authdata);
        }
        else
        {
            http_response_code(422);
        }
    }