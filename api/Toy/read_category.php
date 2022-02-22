<?php
    include 'database.php';
    $product = [];
    $sql = "SELECT * FROM category";
    if ($result = $db->query($sql)) {
        $i = 0;
        while ($row = $result->fetch_assoc()) {
            $product[$i]['category_id'] = $row['category_id'];
            $product[$i]['category_name'] = $row['category_name'];
            $product[$i]['category_note'] = $row['category_note'];
            $i++;
        }
        echo json_encode($product);
    }
    else {
        http_response_code(404);
    }