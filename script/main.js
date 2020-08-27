"use strict";
import {
    jour,
    moisEnChiffre,
    annee
} from "../controlleur/utiliter.js";
import {
    appelAfficheEvenement
} from "../controlleur/afficheEvenement.js";
import {
    afficheGrille
} from "../controlleur/afficheGrille.js";
import {
    afficheGrilleSemaine
} from "../controlleur/afficheGrilleSemaine.js"
import {
    ajoutEvenement,
    genererDropdownHeures
} from "../controlleur/ajoutEvenement.js";
import {
    afficheDansCase
} from "../controlleur/afficheDansCase.js";
import {
    soumettreFormulaire
} from "../controlleur/modifierEvenement.js"

//Local storage pour le mois et semaine
let mois = localStorage.getItem('compteurMois');

if (mois == null) {
    mois = moisEnChiffre();
    localStorage.setItem('compteurMois', mois);
} else {
    mois = +mois;
}

let tabDate = [];
let serveurDate = [];

if (localStorage.getItem("btnMois") == 1) {
    afficheGrille(tabDate, serveurDate, jour(), mois, annee());
} else {
    afficheGrilleSemaine(tabDate, serveurDate, mois, annee());
}


appelAfficheEvenement(function(donneesQuiAEteDonnerAAppelSucces) {

    afficheDansCase(donneesQuiAEteDonnerAAppelSucces, tabDate);
    donneesQuiAEteDonnerAAppelSucces.forEach(date => serveurDate.push(date))
});

ajoutEvenement();
genererDropdownHeures();

let btnMois = document.getElementById('afficher-mois');
let btnSemaine = document.getElementById('afficher-semaine');


document.getElementById('btnModifierEvenement').onclick = () => soumettreFormulaire(serveurDate)

btnMois.addEventListener('click', () => {
    localStorage.setItem("btnMois", 1);
    localStorage.setItem("btnSemaine", 0);


    document.getElementById('separation').innerHTML = ""
    document.getElementById('affichageDate').innerHTML = ""
    document.getElementById("modificationEvent").innerHTML = "";
    afficheGrille(tabDate, serveurDate, jour(), +localStorage.getItem('compteurMois'), annee());
})

btnSemaine.addEventListener('click', () => {
    localStorage.setItem("btnSemaine", 1);
    localStorage.setItem("btnMois", 0);

    document.getElementById('separation').innerHTML = ""
    document.getElementById('affichageDate').innerHTML = ""
    document.getElementById("modificationEvent").innerHTML = "";
    afficheGrilleSemaine(tabDate, serveurDate, +localStorage.getItem('compteurMois'), annee());
})




//Section function bouton ouvrir et fermer les menus Modifier Evn et ajouter Evn.
$('#openbtn').click(function() {
    document.getElementById("mySidebar").style.width = "1000px";
    document.getElementById("main").style.marginLeft = "1000px";

})


$('#openbtn1').click(function() {
    document.getElementById("mySidebar1").style.width = "400px";
    document.getElementById("main").style.marginLeft = "400px";

})


$('#closeNav').click(function() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
})

$('#closeNav1').click(function() {
    document.getElementById("mySidebar1").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
})


// section pourle modal de modifier evenement
// recuperer modal
var modal = document.getElementById("myModal");

// recupere le span pour close
var span = document.getElementsByClassName("close")[0];


$('#close-modal').click(function() {
    modal.style.display = "none";
})

span.click(function() {
    modal.style.display = "none";
})

// quand user click out side de box sa ferme
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// stocker la categorie ajouter evenements
function saveState() {
    let categorieValue = $("#categorieA").val()
    localStorage.setItem("categorieA", categorieValue);
}

function setState() {
    // 1. Quand on load la page la 1e fois, on a une categorie selectionnee par default ("Autre")
    $("#categorieA").val("Autre")

    // 2. Quand on rafraichit la page, on set la categorie dans localstorage
    // Deja fait dans saveState

    // 3. Si il y a un categorie dans localStorage
    if (localStorage.getItem("categorieA") !== null) {
        // 4. on affiche la categorie de localstorage
        $("#categorieA").val(localStorage.getItem("categorieA"))
    }
}

// unload called when navigating away from the page
$(window).on('unload', function() {
    saveState();
});

// load called on first page load
$(window).on('load', function() {
    setState();
});