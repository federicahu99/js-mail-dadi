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

/* Dadi  
1-Creo due generatori casuli di numeri da 1 a 6.
2-Assegno i numeri a due player.
3-Chi ha il numero più alto otterrà la vittoria.
3-Porto gli lementi nel Dom
*/

// Prendo elementi dal DOM 
let btnComputer = document.getElementById('bot-btn');
let btnPlayer = document.getElementById('player-btn');

// Creo generatori casuali
bot = Math.floor (Math.random(1 , 6) * 6 + 1);
player = Math.floor (Math.random(1 , 6) * 6 + 1);
console.log('dado-bot:' + bot,'dado-player:' + player);


// Dichiaro il vincitore o il pareggio 
if(bot < player) {
    document.getElementById('winner').innerText = 'Hai vinto!'
} else if (player < bot) {
    document.getElementById('winner').innerText = 'Hai perso!'
} else {
    document.getElementById('winner').innerText = 'Pareggio!'
}