/*In un array sono contenuti i nomi degli invitati alla festa del
grande Inzaghi, chiedi all’utente il suo nome e comunicagli se
può partecipare o no alla festa */

var invitati = ["Andrea Inzaghi", "Mario Rossi", "Luca Bianchi", "Paolo Brambilla"];

var accesso = prompt("Nome?");
for(var i = 0; i < invitati.length; i++){
  if(accesso === invitati[i]){
    alert("puoi accedere!");
    document.getElementById("testo").innerHTML = invitati.join("<br>");
    accesso = 1;
  }
}

if( accesso != 1){
  alert("Non puoi accedere!");
}
