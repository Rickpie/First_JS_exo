let nb_etages = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");
let etage = "";
let espace = "";

for (let i = 1; i <= nb_etages; i++) {
    espace = " ".repeat(nb_etages - i);
    etage = "#".repeat(i);
    console.log(espace + etage);
}


/* déclare la variable nb_etages via un prompt
déclare la variable etage 
déclare la variable espace
boucle for,
tant que i est inférieur ou égale a i, la boucle continue
Espace = En mode repeat, répete la chaine de caracteres ' nb_etage - i ' 
étage = en mode repeat, i = le nombre de répétition pour le #
le console.log va afficher la pyramide aligné a droite en commençant par les espaces puis le */