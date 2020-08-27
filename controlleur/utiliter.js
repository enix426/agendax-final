"use strict";
export function jour() {
    let jour = new Date();
    return jour.getDate();
}

export function mois(compteurMois) {
    let mois = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return mois[compteurMois];
}

export function moisEnChiffre() {
    let d = new Date();
    let n = d.getMonth();
    return n;
}

export function annee() {
    let annee = new Date();
    return annee.getFullYear();
}