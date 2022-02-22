<?php
    include 'database.php';
    $products = [];
    $sql = "SELECT * FROM product JOIN category ON product.category_id=category.category_id JOIN brand ON product.brand_id = brand.brand_id";

    if($result = $db->query($sql))
    {
        $i = 0;
        while($row = $result->fetch_assoc())
        {
            $products[$i]['product_id'] = $row['product_id'];
            $products[$i]['product_name'] = $row['product_name'];
            $products[$i]['product_price'] = $row['product_price'];
            $products[$i]['product_img'] = $row['product_img'];
            $products[$i]['product_desc'] = $row['product_desc'];
            $products[$i]['product_desc'] = $row['product_desc'];
            $products[$i]['category_id'] = $row['category_id'];
            $products[$i]['category_name'] = $row['category_name'];
            $products[$i]['brand_id'] = $row['brand_id'];
            $products[$i]['brand_name'] = $row['brand_name'];
            

            $i++;
        }
        echo json_encode($products);
    }
    else
    {
        http_response_code(404);
    }