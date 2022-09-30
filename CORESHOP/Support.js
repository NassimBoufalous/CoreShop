export const Support = document.createElement("div");



function setCss(l,z,a)
{
    l.style[z] = a;
   
}

let formulaire = document.createElement("form");
formulaire.setAttribute("id","form");


//Partie numéro de commande
let champNumCommande = document.createElement("div");
let saisieNumCommande = document.createElement("input");

setCss(saisieNumCommande,"margin-left","2%");

let textNumCommande = document.createTextNode("Numéro de commande");
let labelNumCommande = document.createElement("label");
labelNumCommande.appendChild(textNumCommande);
champNumCommande.appendChild(labelNumCommande);
champNumCommande.appendChild(saisieNumCommande);
formulaire.appendChild(champNumCommande)

//Partie nom
let champNom = document.createElement("div");
let saisieNom = document.createElement("input");
setCss(saisieNom,"margin-left","10.30%");
setCss(saisieNom,"margin-top","25px");
//setCss(champNom,"background-color","red");
let textNom = document.createTextNode("Nom");
let labelNom = document.createElement("label");
labelNom.appendChild(textNom);
champNom.appendChild(labelNom);
champNom.appendChild(saisieNom);
formulaire.appendChild(champNom)

//Partie prenom
let champPrenom = document.createElement("div");
let saisiePrenom = document.createElement("input");
setCss(saisiePrenom,"margin-left","9%");
setCss(saisiePrenom,"margin-top","25px");
let textPrenom = document.createTextNode("Prenom");
let labelPrenom = document.createElement("label");
labelPrenom.appendChild(textPrenom);
champPrenom.appendChild(labelPrenom);
champPrenom.appendChild(saisiePrenom);
formulaire.appendChild(champPrenom)

//Partie probleme
let champProbleme = document.createElement("div");
let saisieProbleme = document.createElement("select");
let textProblemeDefault = document.createTextNode("--Choisissez votre problème--");
let textProbleme1 = document.createTextNode("Commande non reçu");
let textProbleme2 = document.createTextNode("Mauvaise commande reçu");
let textProbleme3 = document.createTextNode("Je souhaite annuler ma commande");

let optionProblemeDefault = document.createElement("option");
optionProblemeDefault.appendChild(textProblemeDefault)
saisieProbleme.options.add(optionProblemeDefault)
let optionProbleme1 = document.createElement("option");
optionProbleme1.appendChild(textProbleme1)
saisieProbleme.options.add(optionProbleme1)
let optionProbleme2 = document.createElement("option");
optionProbleme2.appendChild(textProbleme2)
saisieProbleme.options.add(optionProbleme2)
let optionProbleme3 = document.createElement("option");
optionProbleme3.appendChild(textProbleme3)
saisieProbleme.options.add(optionProbleme3)

setCss(saisieProbleme,"margin-left","3.5%");
setCss(saisieProbleme,"margin-top","25px");
let textLabelProbleme = document.createTextNode("Problème rencontré");
let labelProbleme = document.createElement("label");
labelProbleme.appendChild(textLabelProbleme);
champProbleme.appendChild(labelProbleme);
champProbleme.appendChild(saisieProbleme);
formulaire.appendChild(champProbleme)

//Partie bouton valider
let champBoutonValider = document.createElement("div");
let textBoutonValider = document.createTextNode("Valider");
let boutonValider = document.createElement("button");
boutonValider.appendChild(textBoutonValider);
champBoutonValider.appendChild(boutonValider);
setCss(champBoutonValider,"float","left")
setCss(champBoutonValider,"margin-left","15%")


//Partie bouton retour
let champBoutonRetour = document.createElement("div");
let textBoutonRetour = document.createTextNode("Retour à l'accueil");
let BoutonRetour = document.createElement("button");
BoutonRetour.appendChild(textBoutonRetour);
champBoutonRetour.appendChild(BoutonRetour);
setCss(champBoutonRetour,"float","left")
setCss(champBoutonRetour,"margin-left","3%")

//Deux boutons
let champBoutons = document.createElement("div");
champBoutons.appendChild(champBoutonValider);
champBoutons.appendChild(champBoutonRetour);
formulaire.appendChild(champBoutons)
setCss(champBoutons,"margin-top","3%")







Support.appendChild(formulaire);