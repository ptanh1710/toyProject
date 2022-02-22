<?php
    require 'database.php';
    $postdata = file_get_contents("php://input");

    if(isset($postdata) && !empty($postdata))
    {
        $request = json_decode($postdata, true);
        $id = (int)$request['product_id'];
        $name = mysqli_real_escape_string($db, trim($request['product_name']));
        $img = mysqli_real_escape_string($db, trim($request['product_img']));
        $price = mysqli_real_escape_string($db, trim($request['product_price']));
        $cate_id = mysqli_real_escape_string($db, trim($request['category_id']));
        $brand_id = mysqli_real_escape_string($db, trim($request['brand_id']));
        $desc = mysqli_real_escape_string($db, trim($request['product_desc']));

        $sql = "UPDATE product SET product_name = '$name',product_img = '$img',product_price = '$price',category_id = '$cate_id',brand_id = '$brand_id', product_desc = '$desc' WHERE product_id = '$id'";

        if ($db->query($sql)) {
            http_response_code(200);
        }
        else
        {
            http_response_code(422);
        }
    }