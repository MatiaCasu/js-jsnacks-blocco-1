/*Il software deve chiedere per 10 volte all’utente di inserire
un numero. Il programma stampa la somma di tutti i numeri
inseriti*/
var aggiungi = 0;
for(var i = 0; i < 3; i++){
  var nAggiunto = parseInt(prompt("Inserisci numero"));
  aggiungi += nAggiunto;
}

document.getElementById("testo").innerHTML = aggiungi;
