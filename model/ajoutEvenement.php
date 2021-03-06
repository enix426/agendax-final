<?php
header('Access-Control-Allow-Origin: *');
require_once("model.php");

// 0. Decoder le json
$data = json_decode(file_get_contents('php://input'), true);

// 1. Parser le postdata (date, etc.)
$date = $data['date'];
$titre = $data['titre'];
$description = $data['description'];
$categorie = $data['categorie'];
$couleur = $data['couleur'];
$stardt = $data['stardt'];
$enddt = $data['enddt'];

// 2. Appeler "ajout evenement"
$succes = ajoutEvenement($date, $titre, $description, $categorie, $couleur, $stardt, $enddt);

// 3. Repondre a la requete
echo $succes ? "Evenement cree" : "Erreur";
