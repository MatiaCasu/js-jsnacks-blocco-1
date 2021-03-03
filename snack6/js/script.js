/*Stampa il cubo dei primi N numeri, dove N è un numero
indicato dall’utente.*/

var n = parseInt(prompt("Inserisci un numero"));

for (var i = 1; i < n; i++) {
  cubi = i * i * i;
  console.log(cubi);
}
