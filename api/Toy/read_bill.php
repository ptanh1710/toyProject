<?php
    include 'database.php';
    $bill = [];
    $sql = "SELECT * FROM bill";
    if ($result = $db->query($sql)) {
        $i = 0;
        while ($row = $result->fetch_assoc()) {
            $bill[$i]['bill_id'] = $row['bill_id'];
            $bill[$i]['customer_id'] = $row['customer_id'];
            $bill[$i]['bill_name'] = $row['bill_name'];
            $bill[$i]['bill_address'] = $row['bill_address'];
            $bill[$i]['bill_total'] = $row['bill_total'];
            $i++;
        }
        echo json_encode($bill);
    }
    else {
        http_response_code(404);
    }