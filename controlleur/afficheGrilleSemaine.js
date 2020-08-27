"use strict";

import {
    mois
} from "./utiliter.js";

import {
    afficheDansCase
} from "./afficheDansCase.js";

export function afficheGrilleSemaine(tabDate, serveurDate, moisEnChiffre, annee, semaine = 0) {
    let compteurMois = moisEnChiffre;
    let compteurAnnee = annee;
    let compteurSemaine = semaine;
    let dernierJour

    let h2 = document.createElement("h2");

    // trouve le nombre de jour dans chacun des mois
    let getDaysInMonth = function(compteurMois, compteurAnnee) {
        return new Date(compteurAnnee, (compteurMois + 1), 0).getDate();
    };

    // creation grille de la date
    let table = document.createElement("table");
    document.getElementById("separation").appendChild(table);

    function supprimerLaGrille() {
        // Enlever le html
        table.innerHTML = "";

        // reset les donnees
        let compteTab = tabDate.length
        tabDate.splice(0, compteTab)
    }

    function creerGrille() {
        let moisEnLettre = mois(compteurMois)
        let daysInMonth = getDaysInMonth(compteurMois, annee);
        let jourDuMois = (compteurSemaine * 7) + 1;
        let premierJour = (compteurSemaine * 7) + 1;
        dernierJour = (compteurSemaine * 7) + 7;
        let dernierJourDuMois = new Date(compteurAnnee, compteurMois + 1, 0).getDate();
        if (dernierJour > dernierJourDuMois) {
            dernierJour = dernierJourDuMois;
        }

        document.getElementById("affichageDate").appendChild(h2).innerHTML = `${premierJour}-${dernierJour} ${moisEnLettre} ${compteurAnnee}`;
        table = document.querySelector("table");

        supprimerLaGrille()


        let eTr = document.createElement("tr");

        table.appendChild(eTr);
        for (let j = 0; j < 7; j++) {

            let eTd = document.createElement("td");

            if (jourDuMois < daysInMonth + 1) {
                let dateString = compteurAnnee + "-" + (compteurMois + 1).toString().padStart(2, 0) + "-" + jourDuMois.toString().padStart(2, 0)
                eTr.appendChild(eTd).innerHTML = jourDuMois;
                eTd.setAttribute("id", "date-" + dateString);

                // ajout des valeur sdans le form ajout evenement quand click
                eTd.addEventListener("click", function(evt) {

                    let dateSelectionner = evt.target.id;
                    let dateSelectionnerValue = dateSelectionner.substr(5)

                    document.getElementById("date").innerHTML = dateSelectionner;
                    document.getElementById("date").setAttribute("value", dateSelectionnerValue)

                    document.getElementById("dateD").innerHTML = dateSelectionner;
                    document.getElementById("dateD").setAttribute("value", dateSelectionnerValue)

                    document.getElementById("dateF").innerHTML = dateSelectionner;
                    document.getElementById("dateF").setAttribute("value", dateSelectionnerValue)
                })

                tabDate.push(dateString);
                jourDuMois++;
            }
        }

        afficheDansCase(serveurDate, tabDate);
    }

    creerGrille()

    /*
     * Changer de mois quand on clique les fleches
     */
    let btnSuivant = $('#next')
    let btnPrecedent = $('#prev')

    btnSuivant.off()
    btnSuivant.on("click", function() {
        compteurSemaine += 1
        let dernierJourDuMois = new Date(compteurAnnee, compteurMois + 1, 0).getDate();

        if (compteurSemaine * 7 > dernierJourDuMois) {
            compteurSemaine = 0;
            compteurMois += 1;
        }

        if (compteurMois > 11) {
            compteurMois = 0;
            compteurAnnee += 1;
        }

        localStorage.setItem('compteurMois', compteurMois)
        creerGrille();
    });

    btnPrecedent.off()
    btnPrecedent.on("click", function() {
        let dernierJourDuMois = new Date(compteurAnnee, compteurMois, 0).getDate();
        compteurSemaine -= 1

        if (compteurSemaine * 7 < 0) {
            let dernierSemaineMois = Math.floor(dernierJourDuMois / 7)
            compteurSemaine = dernierSemaineMois;
            compteurMois -= 1;
        }

        if (compteurMois < 0) {
            compteurMois = 11;
            compteurAnnee -= 1;
        }

        localStorage.setItem('compteurMois', compteurMois)
        creerGrille();
    });
}