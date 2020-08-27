"use strict";
import {
    remplirFormulaire,
    soumettreFormulaire
} from "./modifierEvenement.js";

import {
    suprimerEvenement,
} from "./suprimerEvenement.js";

import {
    recupererId,
} from "./recupererId.js";

export function afficheDansCase(serveurDate, idCalendrier) {

    // afficheDansCase ajoute les events dans la sidebar modifier-evenements
    let mySidebar = document.querySelector("#modificationEvent");
    mySidebar.innerHTML = "";

    serveurDate.forEach((dateDuServeur, index) => {

        let indexDansCalendrier = idCalendrier.indexOf(dateDuServeur.date)
        if (indexDansCalendrier != -1) {

            let journee = $(`#date-${dateDuServeur.date}`);
            journee.css('background', dateDuServeur.couleur)

            /*
             * Mettre les evenements dans calendrier 
             */
            let listEvenement = document.querySelector("#date-" + dateDuServeur.date + " ul");
            let eText = document.createTextNode(dateDuServeur.titre);
            let eLi = document.createElement("li");
            if (listEvenement == null) {
                let eUl = document.createElement("ul");
                eUl.appendChild(eLi).appendChild(eText);
                journee.append(eUl);
            } else {
                listEvenement.appendChild(eLi).appendChild(eText);
            }

            // trouve le tbody pour afficher les evenement
            let tableEvenement = document.querySelector("#tableEvenement" + " tbody");
            // affiche les valeurs de chaque case qu'il y a dans la base de donner
            let eTrEvenement = document.createElement("tr")
            tableEvenement.appendChild(eTrEvenement);

            // cible la ligne exacte et la cellule exacte pour ensuite ajouter la valeur de la cellule dans le eTdEvenement
            for (let i = 0; i < Object.keys(dateDuServeur).length + 2; i++) {


                let eTdEvenement = document.createElement("td");
                let ePEvenement = document.createElement("p");
                if (i < Object.keys(dateDuServeur).length) {
                    eTrEvenement.appendChild(eTdEvenement).innerHTML = Object.values(dateDuServeur)[i];
                }
                // ajout l'icone de la poubelle supprimer
                if (i == Object.keys(dateDuServeur).length + 1) {
                    let eIcone = document.createElement("i");
                    eTrEvenement.appendChild(ePEvenement).appendChild(eIcone);
                    eTrEvenement.appendChild(ePEvenement).setAttribute("class", "fas fa-trash");
                    ePEvenement.addEventListener("click", function() {
                        let id = Object.values(dateDuServeur)[0];
                        suprimerEvenement(id);
                    })

                }

                // ajout l'icone papier crayon modifier
                if (i == Object.keys(dateDuServeur).length) {
                    // ajouter le bouton au html
                    let eIcone = document.createElement("i");
                    eTrEvenement.appendChild(ePEvenement).appendChild(eIcone);
                    eTrEvenement.appendChild(ePEvenement).setAttribute("class", "far fa-edit");
                    // bind le click au bouton edit
                    ePEvenement.addEventListener("click", function() {
                        let id = Object.values(serveurDate[index])[0];
                        recupererId(id)

                        document.getElementById("myModal").style.visibility = "visible";

                        var modal = document.getElementById("myModal");

                        modal.style.display = "block";
                        remplirFormulaire(dateDuServeur)


                        // Backend: modifier l'evenement
                    })
                }
            }
        }
    });
}