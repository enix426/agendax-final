<?php
header('Access-Control-Allow-Origin: *');
require_once("model.php");

$data = array();
foreach (evenement() as $value) {

    $data[] = $value;
}

echo json_encode($data);
