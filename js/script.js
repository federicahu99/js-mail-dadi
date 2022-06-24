/*
1-Invento lista di email.
2-Chiedo email all'utente.
3-Mi assicuro che l'email inserito sia presente in lista.
4-mostro il risultato in console.
*/

/* Invento lista email */
const emailList = ['ciao@gmail.com', 'ciao@libero.com', 'ciao@tiscali.com', 'ciao@icloud.com'];

/* Chiedo all'utent l'email */
let userEmail = prompt('Qual è il tuo indirizzo email?');

/*for (let i = userEmail; i < emailList.length; i++) {
    console.log(i)
}*/

/* Controllo che l'email inserito sia in lista */ 
if (userEmail = emailList) {
    console.log('user ' + ${userEmail} + ': ' + 'permesso di accesso autorizzato.' );
} else (userEmail != emailList) {
    console.log('Permesso di accesso non autorizzato.');
} 