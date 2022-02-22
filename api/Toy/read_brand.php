<?php
    include 'database.php';
    $product = [];
    $sql = "SELECT * FROM brand";
    if ($result = $db->query($sql)) {
        $i = 0;
        while ($row = $result->fetch_assoc()) {
            $product[$i]['brand_id'] = $row['brand_id'];
            $product[$i]['brand_name'] = $row['brand_name'];
            $product[$i]['brand_desc'] = $row['brand_desc'];
            $i++;
        }
        echo json_encode($product);
    }
    else {
        http_response_code(404);
    }