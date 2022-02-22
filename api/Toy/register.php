<?php
    include_once("database.php");
    $postdata = file_get_contents("php://input");
    if(isset($postdata) && !empty($postdata))
    {
        $request = json_decode($postdata);
        $name = trim($request->customer_name);
        $pwd = mysqli_real_escape_string($db, trim($request->customer_password));
        $email = mysqli_real_escape_string($db, trim($request->customer_account));
        $sql = "INSERT INTO customer(customer_name, customer_password, customer_account) VALUES ('$name','$pwd','$email')";
        if ($db->query($sql) === TRUE) {
            $authdata = [
                'customer_name' => $name,
                'customer_password' => $pwd,
                'customer_account' => $email,
                'customer_id' => mysqli_insert_id($db)
            ];
            echo json_encode($authdata);
        }
    }