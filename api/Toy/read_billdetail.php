<?php
    include 'database.php';
    $billdetail = [];
    $sql = "SELECT * FROM bill_detail JOIN bill ON bill_detail.bill_id=bill.bill_id JOIN product ON bill_detail.product_id = product.product_id";

    if($result = $db->query($sql))
    {
        $i = 0;
        while($row = $result->fetch_assoc())
        {
            $billdetail[$i]['billdetail_id'] = $row['billdetail_id'];
            $billdetail[$i]['bill_id'] = $row['bill_id'];
            $billdetail[$i]['product_id'] = $row['product_id'];
            $billdetail[$i]['billdetail_quantity'] = $row['billdetail_quantity'];
            $billdetail[$i]['billdetail_total'] = $row['billdetail_total'];

            $billdetail[$i]['product_name'] = $row['product_name'];
            $billdetail[$i]['product_price'] = $row['product_price'];

            $billdetail[$i]['bill_name'] = $row['bill_name'];
            $billdetail[$i]['bill_address'] = $row['bill_address'];
            $billdetail[$i]['bill_total'] = $row['bill_total'];
            

            $i++;
        }
        echo json_encode($billdetail);
    }
    else
    {
        http_response_code(404);
    }