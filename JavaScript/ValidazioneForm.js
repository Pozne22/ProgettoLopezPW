function Modulo() {
// Variabili associate ai campi del modulo
var nome = document.modulo.nome.value;
var cognome = document.modulo.cognome.value;
var password = document.modulo.password.value;
var conferma = document.modulo.conferma.value;
var nascita = document.modulo.nascita.value;
var telefono = document.modulo.telefono.value;
var email = document.modulo.email.value;
var homepage = document.modulo.homepage.value;
var firma = document.modulo.firma.value;
// Espressione regolare dell'email
var email_reg_exp = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-]{2,})+.)+([a-zA-Z0-9]{2,})+$/;
//Effettua il controllo sul campo NOME
if ((nome == "") || (nome == "undefined")) {
alert("Il campo Nome è obbligatorio.");
document.modulo.nome.focus();
return false;
}
//Effettua il controllo sul campo COGNOME
else if ((cognome == "") || (cognome == "undefined")) {
alert("Il campo Cognome è obbligatorio.");
document.modulo.cognome.focus();
return false;
}
//Effettua il controllo sul campo PASSWORD
else if ((password == "") || (password == "undefined")) {
alert("Il campo Password è obbligatorio.");
document.modulo.password.focus();
return false;
}
//Effettua il controllo sul campo CONFERMA PASSWORD
else if ((conferma == "") || (conferma == "undefined")) {
alert("Il campo Conferma password è obbligatorio.");
document.modulo.conferma.focus();
return false;
}
//Verifica l'uguaglianza tra i campi PASSWORD e CONFERMA PASSWORD
else if (password != conferma) {
alert("La password confermata è diversa da quella scelta, controllare.");
document.modulo.conferma.value = "";
document.modulo.conferma.focus();
return false;
}
//Effettua il controllo sul campo DATA DI NASCITA
else if (document.modulo.nascita.value.substring(2,3) != "/" ||
document.modulo.nascita.value.substring(5,6) != "/" ||
isNaN(document.modulo.nascita.value.substring(0,2)) ||
isNaN(document.modulo.nascita.value.substring(3,5)) ||
isNaN(document.modulo.nascita.value.substring(6,10))) {
alert("Inserire nascita in formato gg/mm/aaaa");
document.modulo.nascita.value = "";
document.modulo.nascita.focus();
return false;
}
else if (document.modulo.nascita.value.substring(0,2) > 31) {
alert("Impossibile utilizzare un valore superiore a 31 per i giorni");
document.modulo.nascita.select();
return false;
}
else if (document.modulo.nascita.value.substring(3,5) > 12) {
alert("Impossibile utilizzare un valore superiore a 12 per i mesi");
document.modulo.nascita.value = "";
document.modulo.nascita.focus();
return false;
}
else if (document.modulo.nascita.value.substring(6,10) < 1900) {
alert("Impossibile utilizzare un valore inferiore a 1900 per l'anno");
document.modulo.nascita.value = "";
document.modulo.nascita.focus();
return false;
}
//Effettua il controllo sul campo TELEFONO
else if ((isNaN(telefono)) || (telefono == "") || (telefono == "undefined")) {
alert("Il campo Telefono è numerico ed obbligatorio.");
document.modulo.telefono.value = "";
document.modulo.telefono.focus();
return false;
}
else if (!email_reg_exp.test(email) || (email == "") || (email == "undefined")) {
alert("Inserire un indirizzo email corretto.");
document.modulo.email.select();
return false;
}
//INVIA IL MODULO
else {
document.modulo.action = "elabora_dati.asp";
document.modulo.submit();
}
}