/*Stampa il cubo dei primi N numeri, dove N è un numero
indicato dall’utente.*/

var n = parseInt(prompt("Inserisci un numero"));

for (var i = 1; i < n; i++) {
  if(isNaN(n)){
    alert("Non hai inserito un numero!");
  }
  else{
  cubi = i * i * i;
  console.log(cubi);
  document.getElementById("testo").innerHTML = cubi;
  }
}
