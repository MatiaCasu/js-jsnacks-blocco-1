/* Crea un array vuoto. Chiedi per 6 volte all’utente di inserire
un numero, se è dispari inseriscilo nell’array */


var lista = [];

for(i=0; i < 10; i++){
  var n = parseInt(prompt("Inserisci un numero!"));
  var pari= n % 2;
  if (pari !== 0){
    lista.push(n);
  }
}

document.getElementById("testo").innerHTML = lista.join("<br>");
