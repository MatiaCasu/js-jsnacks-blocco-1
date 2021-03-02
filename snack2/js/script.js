var p1 = prompt("Inserisci una parola!");
var p2 = prompt("Inserisci la seconda parola!");


if(p1.length > p2.length){
  console.log(p1);
}
else if( p1.length < p2.length){
  console.log(p2);
}
else{
  console.log("parole uguali");
}
