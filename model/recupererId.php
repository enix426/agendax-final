
<?php
header('Access-Control-Allow-Origin: *');
require_once("model.php");

// 0. Decoder le json
$data = json_decode(file_get_contents('php://input'), true);

// 1. recupérer id
$date = $data['id'];

// 2. Appeler "recupererId"
$succes = recupererId($date);

// 3. Repondre a la requete
echo $succes ? "Evenement suprimer" : "Erreur";
