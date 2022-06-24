/*
1-Invento lista di email.
2-Chiedo email all'utente.
3-Mi assicuro che l'email inserito sia presente in lista.
4-mostro il risultato in console.
*/

/* Invento lista email */
const emailList = ['ciao@gmail.com', 'ciao@libero.com', 'ciao@tiscali.com', 'ciao@icloud.com', 'ciao@hotmail.com'];
console.table(emailList);

/* Chiedo all'utent l'email */
let i = prompt('Qual è il tuo indirizzo email?');
console.log(i)

/* Controllo che l'email inserito sia in lista + mostro in console l'esito */ 
for (let i = 0; i < emailList.length; i++) {
    if (i == emailList) {
        console.log(i + ': ' + 'permesso di accesso autorizzato.');
    }
    else {
        console.log(i + ': ' + 'Permesso di accesso non autorizzato.');
    }
}




/*
if (userEmail != emailList) {
    console.log( userEmail + ': ' + 'Permesso di accesso non autorizzato.');
} else if (
    console.log(userEmail + ': ' + 'permesso di accesso autorizzato.'));
    */