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
let email = prompt('Qual è il tuo indirizzo email?');
let flag = false;

/* Controllo che l'email inserito sia in lista */ 
for (let i = 0; i < emailList.length; i++) {

    if (email === emailList[i]) {
        flag = true;
    }
}

/* mostro in console l'esito */

if (flag == false) {
    console.log(email + ': accesso non autorizzato')
} else {
    console.log(email + ': accesso autorizzato')
}