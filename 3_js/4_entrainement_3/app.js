console.log("JS - Entrainement 3");
var str, nb, bool, maybeLater, unset, obj, arr;

str = "string !";
nb = 2;
bool = nb < 100;
maybeLater = null;
obj = {
    nom: "guitare",
    couleur: "orange",
    utilisateur: "Lenny Kravitz",
    type: "Fender Stratocaster",
    prix: 10000000
};
arr = [1, 3, 4, 7]; // arr.length === 4 (true)
console.log(arr[1]); // affiche le contenu de la 2ème case
console.log(obj.utilisateur); // le point est l'accesseur
// l'accesseur permet d'accéder aux propriétés d'objet
console.log(str + " est un type de données"); // concaténation
console.log("---concaténation des propriétés d'un objet ---");
console.log("La " + obj.nom + " de " + obj.utilisateur + " est une " + obj.type + " " + obj.couleur + ". Elle coûte "+ obj.prix);
console.log("---concaténation avec les litéraux de gabarit---");
console.log("(template literals (voir mdn))");
console.log(`La ${obj.nom} de ${obj.utilisateur} est une ${obj.type}  ${obj.couleur}. Elle coûte ${obj.prix}`);
// créer une fonction ajouterAuTableau, prennant un paramètre p, et ajoutant la valeur de ce param au tableau arr. (pour simplifier p ne sera pas un objet). exécuter la fonction quelques fois et log le résultat dans la console

var ajouterAuTableau = function (p){
    arr.push(p);
    return arr;
}

var res = ajouterAuTableau(2);
console.log(arr === res);
