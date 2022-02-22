<?php
    require("database.php");
    $postdata = file_get_contents("php://input");
    $request = json_decode($postdata);
    if(isset($postdata) && !empty($postdata))
    {
        $email = mysqli_real_escape_string($db, trim($request->customer_account));
        $pwd = mysqli_real_escape_string($db, trim($request->customer_password));

        $sql = "SELECT * FROM customer where customer_account='$email' and customer_password='$pwd'";
        if($result = mysqli_query($db,$sql))
        {
            $rows = array();
            while($row = mysqli_fetch_assoc($result))
            {
                $rows[] = $row;
            }
            echo json_encode($rows);
        }
        else
        {
            http_response_code(404);
        }
    }
