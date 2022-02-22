<?php
    include ("database.php");
    $postdata = file_get_contents("php://input");

    if(isset($postdata) && !empty($postdata))
    {
        $request = json_decode($postdata);
        
        $name = mysqli_real_escape_string($db, trim($request->product_name));
        $img = mysqli_real_escape_string($db, trim($request->product_img));
        $price = mysqli_real_escape_string($db, trim($request->product_price));
        $cate_id = mysqli_real_escape_string($db, trim($request->category_id));
        $brand_id = mysqli_real_escape_string($db, trim($request->brand_id));
        $desc = mysqli_real_escape_string($db, trim($request->product_desc));

        $sql = "INSERT INTO product(product_name, product_img, product_price, category_id, brand_id ,product_desc) VALUES ('$name','$img','$price','$cate_id','$brand_id','$desc')";

        if ($db->query($sql)) {
            http_response_code(200);
            $authdata = [
                'product_id' => mysqli_insert_id($db),
                'product_name' => $name,
                'product_img' => $img,
                'product_price' => $price,
                'category_id' => $cate_id,
                'brand_id' => $brand_id,
                'product_desc' => $desc,
            ];
            echo json_encode($authdata);
        }
        else
        {
            http_response_code(422);
        }
    }