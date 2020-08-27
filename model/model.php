<?php
header('Access-Control-Allow-Origin: *');
//connection a la BDD
function connectDB()
{
    // $c = mysqli_connect("localhost", "root", "", "agendax");
    $c = mysqli_connect("den1.mysql2.gear.host", "agendax", "Wd2cMx6?G6?H", "agendax");
    if (!$c)
        trigger_error("Erreur de connexion :" . msqli_connect_error());

    //mettre l'encodage utf-8 dans toutes nos requêtes
    mysqli_query($c, "SET NAMES 'utf8'");

    return $c;
}

$connexion = connectDB();

//exemple typique de fonction du modèle
function evenement()
{
    global $connexion;

    $requete = "SELECT * FROM evenement";
    $resultat = mysqli_query($connexion, $requete);

    return $resultat;
}

// INSERT INTO evenement 
function ajoutEvenement($date, $titre, $description, $categorie, $couleur,  $stardt, $enddt)
{
    global $connexion;

    $requete = "INSERT INTO evenement (date, titre, description, categorie, couleur, stardt, enddt)
                VALUES ('$date', '$titre', '$description', '$categorie' , '$couleur' , '$stardt', '$enddt')";
    return mysqli_query($connexion, $requete);
}


// Update  modifierEvenement
function modifierEvenement($id, $date, $titre, $description, $categorie, $couleur, $stardt, $enddt)
{
    global $connexion;

    $requete = "UPDATE evenement 
                SET  `date` = '$date',`titre` = '$titre', `description` = '$description',`categorie` = '$categorie',`couleur` = '$couleur',`stardt` = '$stardt',`enddt` = '$enddt'
                WHERE id=$id";
    return mysqli_query($connexion, $requete);
}


// suprimerEvenement 
function suprimerEvenement($id)
{
    global $connexion;

    $requete = "DELETE FROM evenement WHERE id =" . $id;

    return mysqli_query($connexion, $requete);
}



/* RecupereId  */
function recupererId($id)
{
    global $connexion;

    $requete = "SELECT * FROM evenement WHERE id=" . $id;

    return mysqli_query($connexion, $requete);
}
