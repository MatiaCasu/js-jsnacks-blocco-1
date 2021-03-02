/*L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore.*/

// Numeri da confrontare
var n1 = parseInt(prompt("Inserisci un numero!"));
var n2 = parseInt(prompt("Inserisci il secondo numero!"));
// Numeri da confrontare

if(n1 > n2){
  console.log(n1);
}
else if( n1 < n2){
  console.log(n2);
}
else{
  console.log("numeri uguali");
}
