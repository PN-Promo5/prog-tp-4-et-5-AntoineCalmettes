//---------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Exercice 1



//Créez une fonction qui prend en paramètre un tableau et qui affiche en console tous les éléments de
//ce tableau.


// var tableauCouleurs = ['bleu', 'rouge', 'vert', 'noir','azur','orange','blanc','jaune','gris','magenta','bleu ciel','violet']; // Sequence
// // console.log(tableauCouleurs
// // console.log(tableauCouleursStylo.length)
// function fonctionarraycolors(tab) {
//   var i = 0; // Variable intermediaire utilisé lors de l'enumeration
//   var elementCourant; // Variable intermediaire utilisé ors du traitement sequentiel
//   while (i < tab.length) { // Condition de continuation
//     elementCourant = tab[i] // Recuperation de l'element courant
//     i++ // Mise a jour de la variable intermediaire utiliser pour enumerer
//     console.log(elementCourant) // Traitement de l'element courant
//   }
// }
//
// fonctionarraycolors(tableauCouleurs); // Faire appel a la variable



//---------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Exercice 2

/* Créez une fonction qui prend en paramètre un tableau et qui affiche en console les 10 premiers
éléments de ce tableau. */


//  var tableauCouleurs = ['bleu', 'rouge', 'vert', 'noir','azur','orange','blanc','jaune','gris','magenta','bleu ciel','violet']; // Sequence
// function fonctionarraycolors (tab){
//   var i =0 ; // Variable intermediaire utilisé lors de l'enumeration
//   var elementCourant; // Variable intermediaire utilisé ors du traitement sequentiel
//   var tenElement = 10; // Variable contenant le nombre maximun d'element afficher
//
//   while (i < tab.length){ // Condition de continuation
//     elementCourant=tab[i] // Traitement de l'element courant
//     if (i < 10) {
//       i++ // Mise a jour de la variable intermediaire utiliser pour enumerer
//       console.log(elementCourant)
//     }
//   }
// }
// fonctionarraycolors(tableauCouleurs); // Faire appel a la variable


//---------------------------------------------------------------------------------------------------------------------------------------------------------------------
// // Exercice 3
//Créez une fonction qui prend en paramètre un tableau et qui affiche en console les 10 derniers
//éléments de ce tableau.



// let tableauCouleurs = ['bleu', 'rouge', 'vert', 'noir','azur','orange','blanc','jaune','gris','magenta','bleu ciel','violet']; // Sequence
// function fonctionarraycolors (tab){
//   let i =0 ; // Variable intermediaire utilisé lors de l'enumeration
// let elementCourant; // Variable intermediaire utilisé ors du traitement sequentiel
// let tenElement = 10; // Variable contenant le nombre maximun d'element afficher
// let tablesize = tableauCouleurs.length // Varialbe contenant le nombre d'element du trableau
// while ( i < tenElement) {
//   tablesize--
// elementCourant = tab[tablesize]
// i++
// console.log(elementCourant)
// }
// }
//
// fonctionarraycolors(tableauCouleurs); // Faire appel a la variables


//---------------------------------------------------------------------------------------------------------------------------------------------------------------------
//Exercice 4
//Créez une fonction qui prend en paramètre un tableau de nombres et qui renvoie une copie de ce
//tableau dans laquelle tout les nombres ont été augmentés de 1.




// let tableauNumber =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
// function fonctionarray (tab){
//   let i =0 ; // Variable intermediaire utilisé lors de l'enumeration
// let currentElement; // Variable intermediaire utilisé ors du traitement sequentiel
// let tableauNumberAddition = tab; // Tableau qui va contenenir les valeurs du +1
// while (i < tab.length) {
// currentElement = tab[i] // Je stocke la valeur du tableau dans currentElement
// currentElement++ // J'incriment cette valeur de 1
// tableauNumberAddition[i] = currentElement // Je stocke cette nouvelle valeur dans le nouveau tableau
// console.log(tableauNumberAddition[i]) // Je l'affiche
// i++
// }
// }
// fonctionarray (tableauNumber);
//



//---------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Exercice 5
//Créez une fonction qui prend en paramètre un tableau de nombres et qui, pour tous les éléments de
//ce tableau, affiche si cet élément est pair ou non.





// let ArrayNumber =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
// function functionarray(tab){
//   let i =0; // Varible intermediaire utilisé lors de lenumeration
//   let currentElement; //Variable intermediaire utilisé lors du traiement sequentiel
//   while(i < tab.length){ //
// currentElement = tab[i]
//     if (i % 2 !== 0){ // Si le reste de la division de i est different de 0
// console.log(currentElement)
//    }
//    i++
//   }
// }
//
// functionarray(tableauNumber);



//---------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Exercice 6
// Créez une fonction qui prend en paramètre un tableau de nombres, et qui renvoie la somme des
//éléments de ce tableau.



// let ArrayNumber =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20] // Sequence
// function functionarray(tab){
//   let i =0 ;  // Variable intermediaire utilisé lors de lenumeration
//   let valeurFinale =0; // Variable intermediaire utilisé pour stocker une valeur
//   let sum = 0; // Variable qui va contenir la somme du résultat.
//   let currentElement; // Variable intermediaire utilisé ors du traitement sequentiel
//   let arrayNumberAddition = tab; // Stokage du tableau dans une variable
//   while (i < tab.length) { // la boucle se finira quand le i sera égale a la taille du tableau
//  currentElement =tab[i] // Prendre un element du tableau par son indice
//  sum=0 // Remettre le sum à O
//  sum=valeurFinale+currentElement // addition qui permet d'avoir le résultat intermediaire
// valeurFinale=sum   // stocker le résultat dans la variable valeurFinale
//  i++ // passer a l'indice suivant
//   }
//   console.log(valeurFinale); // Afficher la somme des elements du tableau
// }
//
// functionarray(ArrayNumber); // Faire appel a la fonction



//---------------------------------------------------------------------------------------------------------------------------------------------------------------------
//Exercice 7
//Créez une fonction qui prend en paramètre un tableau de nombres et qui renvoie le nombre
//d’éléments pairs de ce tableau.



// let ArrayNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20] // Sequence
// function functionarray(tab) {
//   let i = 0; // Variable intermediaire utilisé lors de lenumeration
//   let valeurFinale = 0; // Variable intermediaire utilisé pour stocker une valeur
//   let sum = 0; // Variable qui va contenir la somme du résultat.
//   let currentElement; // Variable intermediaire utilisé ors du traitement sequentiel
//   let arrayNumberAddition = tab; // Stokage du tableau dans une variable
//   while (i < tab.length) { // la boucle se finira quand le i sera égale a la taille du tableau
//     currentElement = tab[i] // Prendre un element du tableau par son indice
//     sum=0 // Remettre le sum à O
// if ( currentElement % 2 == 0){
//  sum=valeurFinale+currentElement // addition qui permet d'avoir le résultat intermediaire
//   valeurFinale=sum // stocker le résultat dans la variable valeurFinale
// }
// i++ // passer a l'indice suivant
// }
// console.log(valeurFinale) // Affiche la somme des elements pair du tableau
// }
// functionarray(ArrayNumber); // Faire appel a la fonction



//---------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Exercice 8
//Créez une fonction qui prend en paramètre un tableau de nombres et qui renvoie la valeur maximum
//de ce tableau.


// let ArrayNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 100, 11, 12, 1310, 14, 15, 16, 17, 18, 19, 20] // Sequence
// function functionarray(tab) {
//   let i = 0; // Variable intermediaire utilisé lors de lenumeration
//  let valeurFinale = 0; // Variable intermediaire utilisé pour stocker une valeur
//  let currentElement; // Variable intermediaire utilisé ors du traitement sequentiel
//
//
//  while ( i<tab.length ){ // la boucle se finira quand le i sera égale a la taille du tableau
// currentElement = tab[i] // Prendre un element du tableau par son indice
// if (currentElement > valeurFinale) {
// valeurFinale= currentElement // stocker le résultat dans la variable valeurFinale
// }
// i++ // passer a l'indice suivant
// currentElement =0 // Remettre à 0 la variable intermediaire
//  }
//  console.log(valeurFinale) // Afficher la plus grande valeurs du tableau
// }
// functionarray(ArrayNumber); // Faire appel a la fonction




//---------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Exercice 9
/*Créez une fonction qui prend en paramètre un tableau de nombres et qui affiche la valeur maximum
et minimum de ce tableau. */

// let ArrayNumber = [0,1, 2, 3, 4, 5, 6, 7, 8, 9, 100, 11, 12, 1310, 14, 15, 16, 17, 18, 19, 20,-0.1] // Sequence
// function functionarray(tab) {
//   let i = 0; // Variable intermediaire utilisé lors de lenumeration
//   let valeurFinaleGrand = 0; // Variable intermediaire utilisé pour stocker une valeur
//   let valeurFinalePetit =0; // Variable intermediaire utilisé pour stocker une valeur
//   let currentElement; // Variable intermediaire utilisé ors du traitement sequentiel
//
//
//   while ( i<tab.length ){ // la boucle se finira quand le i sera égale a la taille du tableau
//  currentElement = tab[i] // Prendre un element du tableau par son indice
//  if (currentElement > valeurFinaleGrand) { // Si mon element du tableau est plus grand que la valeurFinaleGrand alors :
//  valeurFinaleGrand= currentElement // stocker le résultat dans la variable valeurFinale
//  }
//  else if (currentElement < valeurFinalePetit) { // Si mon element du tableau est plus petit que la valeur valeurFinalePetit
// valeurFinalePetit = currentElement // stocker le résultat dans la variable valeurFinalePetit
//  }
//  i++ // passer a l'indice suivant
//  currentElement =0 // Remettre à 0 la variable intermediaire
//  }
//   console.log(valeurFinaleGrand) // Afficher la plus grande valeurs du tableau
//   console.log(valeurFinalePetit) // Afficher la plus petite valeurs du tableau
//  }
//  functionarray(ArrayNumber); // Faire appel a la fonction


//---------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Exercice 10
/*Créez une fonction qui prend en paramètre un tableau de nombres et qui renvoie vrai si ce tableau
est ordonné dans l’ordre croissant, faux si ce n’est pas le cas. */

// let arrayNumber = [0,1, 2, 3, 4, 5, 6, 7, 8, 9, 100, 11, 12, 1310, 14, 15, 16, 17, 18, 19, 20,-0.1] // Sequence
// let arrayNumber2 = [100,200,300] // Séquence 2
//
// function functionarray(tab) {
//    let i = 0; // Variable intermediaire utilisé lors de lenumeration
// let x =0; // Variable intermediaire utilisé pour stocker une valeur
//    let currentElement; // Variable intermediaire utilisé ors du traitement sequentiel
//
//    while ( i<tab.length ){ // la boucle se finira quand le i sera égale a la taille du tableau
//   currentElement = tab[i] // Prendre un element du tableau par son indice
//  if (currentElement > x) { // Si mon element du tableau est plus grand que le précédent
//  x= currentElement // stocker le résultat dans la variable x
//  }
//  else {
//    console.log("Tableau qui n'est pas ordonné dans l'ordre croissant ")
//  }
//  i++
// }
// console.log("Tableau qui est ordonné dans l'ordre croissant")
// }
//   functionarray(arrayNumber2); // Faire appel a la fonction
//   functionarray(arrayNumber); // Faire appel a la fonction


//---------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Exercice 11
/*Créez une fonction qui prend en paramètre un tableau de nombres et qui retourne un autre tableau
de nombres constitué des éléments du tableau passé en paramètre. Dans le tableau retourné, chaque
élément n'a qu'une seule occurrence. */

// let arrayNumber = [0, 1, 1, 2, 2, 3, 3, 4, 5, 6, 7, 8, 9, 9, 100, 100, 11, 12, 1310, 14, 1310,1310, 15, 16, 17, 18, 19, 20, -0.1] // Sequence
//
// function functionArray(tabs) {
//   let i = 0; // Variable intermediaire utilisé lors de lenumeration
//   let currentElement; // Variable intermediaire utilisé ors du traitement sequentiel
//   let secondarray = []; // Création du deuxieme tableau
//   while (i < tabs.length) { // la boucle se finira quand le i sera égale a la taille du tableau
//     currentElement = tabs[i] // Prendre un element du tableau par son indice
//     if (secondarray.indexOf(currentElement) === -1) { // index of renvoie le premier indice pour lequel on trouve un élément donné dans un tableau. Si l'élément cherché n'est pas présent dans le tableau, la méthode renverra -1.
//       secondarray.push(currentElement); // Envoie le l'indice dans le second tabeau
//     }
//     i++
//     }
//     return secondarray
//   }
//
//   console.log(functionArray(arrayNumber))


//----------------------------------------------------------------------------------------------------------------------------------------------------------------------
//Exercice 12 :
//Créez une fonction qui prend en paramètre un tableau de nombres et qui retourne un autre tableau
//de nombres constitué des éléments du tableau passé en paramètre. Dans le tableau retourné, l'ordre
//des éléments est inversé.

// let arrayLetter = ['a', 'b', 'c', 'd', 'e']; // Sequence
//
// function functionArray(tabs) {
//
//   let i = 0; // Variable intermediaire utilisé lors de l'enumeration
//   let currentElement; // Variable intermediaire utilisé lors du traitement sequentiel
//   let secondTabs = [];
//
//   while (i < tabs.length) { // la boucle se finira quand le i sera égale a la taille du tableau
//     tabs.reverse(); // Commencer par le début de mon tableau
//     currentElement = tabs[i] // Prendre un element du tableau par son indice
//     secondTabs.push(currentElement); // Mettre dans mon deuxiéme tableau
//       i++ // Ajouter 1 à i
//   }
//
//   return secondTabs // On retourne l'element au deuxiéme talbeau
// }
//
// console.log(functionArray(arrayLetter))


//------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Exercice 13
/* Créez une fonction qui prend en paramètres deux tableaux de nombres et qui retourne un tableau
correspondant à la concaténation des deux tableaux d'entiers passés en paramètres. */

// let array1 = [1,2,3,4,5,6,7,8,9,10];
// let array2 = [31,32,33,34,35,36,37,38,39,40];
//
// function concatenateTwoArrays(array1, array2) {
//   let i = 0;
//   let currentElmt;
//   let concatenateArrays = [];
//
//   while (i < array1.length) {
//     currentElmt = array1[i];
//     i++;
//     concatenateArrays.push(currentElmt);
//   }
//
//   i = 0;
//
//   while (i < array1.length) {
//     currentElmt = array2[i];
//     i++;
//     concatenateArrays.push(currentElmt);
//   }
//
//   return concatenateArrays;
// }
//
//
// let concatenateArrays = concatenateTwoArrays(array1, array2);
//
// function displayElementsArray(array) {
//   let i = 0;
//   let currentElmt;
//   while (i < array.length) {
//     currentElmt = array[i];
//     i++;
//     console.log(currentElmt);
//   }
// }
//
// displayElementsArray(concatenateArrays);


//----------------------------------------------------------------------------------------------------------------------------------------------------------------------

//Exercice 14 :
/*Créez une fonction qui prend en paramètre un tableau de chaînes de caractères, qui copie dans un
nouveau tableau tous les éléments du tableau passé en paramètre commençant par une voyelle.*/

// let array = ["allelouya", "benedicte", "conssomation", "dechet", "fourApain", "haricot", "ignoble", "yaourt"]; //Sequence
//
//
// function functionArray(table) {
//  let currentElement;
//  let secondTable = []
//  let i = 0; //for déclaration de i
//  while ( i < table.length) { // tant que i n'est pas au dernier indice du tableau
//    currentElement = table[i]; // var intermédiaire de traitement séqentiel prend la valeur de l'indice.
//    if (currentElement.charAt(0) === "a") { //Si la premiere lettre de l'élément de currentElement vaut a
//      secondTable.push(currentElement); // ajouter l'élémentcourant dans le tableau de la fonction
//    }
//    if (currentElement.charAt(0) === "e") { // si l'element courant est "e"
//      secondTable.push(currentElement); // Envoyer cet element dans le second tableau
//    }
//    if (currentElement.charAt(0) === "i") { //si l'element courant est "i"
//      secondTable.push(currentElement); // Envoyer cet element dans le second tableau
//    }
//    if (currentElement.charAt(0) === "o") { //si l'element courant est "o"
//      secondTable.push(currentElement); // Envoyer cet element dans le second tableau
//    }
//    if (currentElement.charAt(0) === "u") { //si l'element courant est "u"
//      secondTable.push(currentElement); // Envoyer cet element dans le second tableau
//    }
//    if (currentElement.charAt(0) === "y") { //si l'element courant est "y"
//      secondTable.push(currentElement); // Envoyer cet element dans le second tableau
//    }
//    i++ // i prend plus 1
//  }
//  console.log(secondTable);
// };
// console.log(functionArray(array))

// Exercice 14.1  ------------------------------------------------------------------------------------------------------------------------------
/* Créez une fonction qui prend en paramètre une chaîne de caractères, qui renvoie vrai si la chaîne est
un palindrome, ou qui renvoie faux si ce n’est pas le cas. */

// let arrayPalindrome =["php","radar","koala","izi"]
// function functionPalidrome(tabs) {
//   let currentElement; // Variable intermediaire utilisé ors du traitement sequentiel
//     let secondTable = []
//     let i = 0; // Variable intermediaire utilisé lors de l'enumeration
//     while ( i < table.length) {  //tant que i n'est pas au dernier indice du tableau
//
// }
// }


// Exercice 14.2 ----------------------------------------------------------------------------------------------------------------------------------
/*Créez une fonction qui prend en paramètre une chaîne de caractères, qui renvoie vrai si la chaîne est
un palindrome, ou qui renvoie faux si ce n’est pas le cas. */

// Exercice 15
/* Créez une fonction qui prend en paramètre deux chaînes de caractères, qui renvoie vrai si la 1ère
chaîne est un anagramme de la 2ème chaîne, ou qui renvoie faux si ce n’est pas le cas. */

// let word = "Joker";
// let wordSecond = "Harley Quinn";
//
// function anagram(string1, string2) { // Creation fonction
//   if (string1.length !== string2.length) { // Si la longeur du mot 1 est pas égale au mot 2
//     return false; // Cela retourne un faux
//   } else { // Sinon
//     let string1Split = string1.split(""); // La méthode split() permet de diviser une chaîne de caractères à partir d'un séparateur pour fournir un tableau de sous-chaînes.
//     let string2Split = string2.split(""); // on l'applique au 2 mots
//     string1Split.sort(); //La méthode sort() permet de trier numériquement les éléments d'un tableau typé, à même ce tableau.
//     string2Split.sort(); // On l'applique aux 2 mots
//     let i = 0;   // Variable intermediaire utilisé lors de lenumeration
//     while (i < string1Split.length) { // la boucle temps que i est inférieur au nombre de caractere du premier mots
//       if(string1Split[i] !== string2Split[i]){ // Si le nombre de l'element i du tableau est pas égale au deuxiéme element du 2 eme tableau
//         return false; // Cela retourne un faux
//       }
//       i++;  // On rajoute 1 à i
//     }
//     return true; // On retroune un booleen vrai
//   }
// }
//
// console.log(anagram(word, wordSecond));
