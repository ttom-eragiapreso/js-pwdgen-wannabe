// Chiedi all’utente il suo nome,
// poi chiedi il suo cognome,
// poi chiedi il suo colore preferito
// Infine scrivi sulla pagina nomecognomecolorepreferito22


let userName = prompt("Come ti chiami?");
let userSurname = prompt("Qual'è il tuo cognome?");
let userFavouriteColour = prompt("Qual'è il tuo colore preferito?");

document.getElementById("password").innerHTML = `${userName}${userSurname}${userFavouriteColour}22`;