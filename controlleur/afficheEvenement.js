"use strict";

// Donner la reponse du serveur a "appelSucces"
export function appelAfficheEvenement(appelSucces) {
    let ajax = new XMLHttpRequest();
    let method = "GET";
    let url = "model/reponceRequete.php";
    let asynchronous = true;

    ajax.open(method, url, asynchronous);
    ajax.send();

    ajax.onreadystatechange = function() {
        //let eH1 = document.querySelector("h1").parentNode;
        let eP = document.createElement("p");
        //let text = document.createTextNode;

        if (this.readyState == 4 && this.status == 200) {
            let dataQuiVaDansAfficheDansCase = JSON.parse(this.responseText);
            //ici cest comme un return
            appelSucces(dataQuiVaDansAfficheDansCase);

        }

    }
}