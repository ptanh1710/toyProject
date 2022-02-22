<?php 

    require("database.php");
    $postdata = file_get_contents("php://input");
    $request = json_decode($postdata);

    if(isset($postdata) && !empty($postdata)) {
        $email = mysqli_real_escape_string($db, trim($request->admin_account));
        $pwd = mysqli_real_escape_string($db, trim($request->admin_password));

        $sql = "SELECT * FROM admin where admin_account='$email' and admin_password='$pwd'";
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