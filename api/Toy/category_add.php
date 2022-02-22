<?php
    include ("database.php");
    $postdata = file_get_contents("php://input");

    if(isset($postdata) && !empty($postdata))
    {
        $request = json_decode($postdata);
        $name = mysqli_real_escape_string($db, trim($request->category_name));
        $note = mysqli_real_escape_string($db, trim($request->category_note));
        $sql = "INSERT INTO category(category_name, category_note) VALUES ('$name','$note')";
        if ($db->query($sql)) {
            http_response_code(200);
            $authdata = [
                'category_id' => mysqli_insert_id($db),
                'category_name' => $name,
                'category_note' => $note,
            ];
            echo json_encode($authdata);
        }
        else
        {
            http_response_code(422);
        }
    }