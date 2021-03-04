/*Chiedi un numero di 4 cifre all’utente e calcola la somma
di tutte le cifre che compongono il numero*/

var n = prompt("Digita un numero di 4 cifre");
var add = 0;

for (var i = 0; i < 4; i++) {
  n[i] = i;
  add += parseInt(n[i]);
}

n = "<li>" + "Il tuo numero è: " + n + "</li>"
add = "<li>" + "La somma delle sue cifre è: " + add + "</li>";

var ulList = "<ul>" + n + add + "</ul>";
document.getElementById("ulList").innerHTML = ulList;
