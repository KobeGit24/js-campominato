alert('CAMPO MINATO !!')
var level = parseInt(prompt("inserisci il grado di difficolta': digita 0 (range 1-100) per un grado di difficolta' basso, digita 1 (1-80) per un grado medio, digita 2 (1-50) per un grado alto"));
var computer = [];
var numMaxComp = 16;
var numComp = 0;
var user = [];

if (level==2) {
    for (var i = 0; i < numMaxComp; i++) {
        numComp = random(1,50);
        if (!isInarray(numComp, computer)) {
            computer.push(numComp);    
        } else {
            computer.push(numComp+1);
        }
    } 

    i=0;
    count = 0; //numero di giocate del giocatore prima di decretare il verdetto
    do {
    var userNumber = parseInt(prompt('inserisci un numero da 1 a 50'));
    if (userNumber < 1 || userNumber > 50 || isNaN(userNumber)) {
        alert("inserisci solo numeri e che non siano superiori o minori al massimo scelto");
            var userNumber = parseInt(prompt('inserisci un numero da 1 a 50'));
   } else if (isInarray(userNumber, user)) {
       alert("numero gia' esistente! inserisci un altro numero");
       var userNumber = parseInt(prompt('inserisci un numero da 1 a 50'));
   }
    user.push(userNumber); 
    count ++;
    i++;
    } while (!isInarray(userNumber, computer) && i<5);

} else if (level==1) {
    for (var i = 0; i < numMaxComp; i++) {
        numComp = random(1,80);
        if (!isInarray(numComp, computer)) {
            computer.push(numComp);    
        } else {
            computer.push(numComp+1);
        }
    } 

    i=0;
    count = 0; //numero di giocate del giocatore prima di decretare il verdetto
    do {
    var userNumber = parseInt(prompt('inserisci un numero da 1 a 80'));
    if (userNumber < 1 || userNumber > 80 || isNaN(userNumber)) {
        alert("inserisci solo numeri e che non siano superiori o minori al massimo scelto");
        var userNumber = parseInt(prompt('inserisci un numero da 1 a 80'));
   } else if (isInarray(userNumber, user)) {
       alert("numero gia' esistente! inserisci un altro numero");
       var userNumber = parseInt(prompt('inserisci un numero da 1 a 80'));
   }
    user.push(userNumber); 
    count ++;
    i++;
    } while (!isInarray(userNumber, computer) && i<5);

} else if (level==0) {
    for (var i = 0; i < numMaxComp; i++) {
        numComp = random(1,100);
        if (!isInarray(numComp, computer)) {
            computer.push(numComp);    
        } else {
            computer.push(numComp+1);
        }
    } 

    i=0;
    count = 0; //numero di giocate del giocatore prima di decretare il verdetto
    do {
    var userNumber = parseInt(prompt('inserisci un numero da 1 a 100'));
    if (userNumber < 1 || userNumber > 100 || isNaN(userNumber)) {
         alert("inserisci solo numeri e che non siano superiori o minori al massimo scelto");
             var userNumber = parseInt(prompt('inserisci un numero da 1 a 100'));
    } else if (isInarray(userNumber, user)) {
        alert("numero gia' esistente! inserisci un altro numero");
        var userNumber = parseInt(prompt('inserisci un numero da 1 a 100'));
    }
    user.push(userNumber); 
    count ++;
    i++;
    } while (!isInarray(userNumber, computer) && i<5);
}

console.log(computer);
console.log(user);


if (isInarray(userNumber, computer)) {
    console.log('hai perso!!', 'hai giocato ' + count + ' volte');   
} else {
    console.log('hai vinto!!','hai giocato ' + count + ' volte');   
}

// FUNZIONI 

function random(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function isInarray(val, array) {
    for (var i = 0; i < array.length; i++) { 
        if (array[i] == val ) {
            return true;
        } 
    } 
    return false;
}