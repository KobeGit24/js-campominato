alert('CAMPO MINATO !!');

var level = parseInt(prompt("inserisci il grado di difficolta': digita 0 (range 1-100) per un grado di difficolta' basso, digita 1 (1-80) per un grado medio, digita 2 (1-50) per un grado alto"));

var computer = [];
var numMaxComp = 16;
var numComp = 0;
var user = [];
var option = 5; // quantita' di giocate valide
var levelMax; // massimale di ogni range a seconda della scelta dell'utente

if (level>=2) {
    levelMax=50;
    while (computer.length < numMaxComp) {
        numComp = random(1,levelMax);
        if (!isInArray(numComp, computer)) {
            computer.push(numComp);    
        } 
    } 

    do {
    var userNumber = parseInt(prompt('inserisci un numero da 1 a 50'));
    if (isInRange(1,levelMax,userNumber) || isInArray(userNumber, user)) {
     alert("ATTENZIONE!! Inserisci solo numeri consentiti e diversi da quelli gia' inseriti");} 
    else {
    user.push(userNumber);
    }
    } while (!isInArray(userNumber, computer) && user.length < option);

} else if (level==1) {
    levelMax=80;
    while (computer.length < numMaxComp) {
        numComp = random(1,levelMax);
        if (!isInArray(numComp, computer)) {
            computer.push(numComp);    
        }
    }

    do {
        var userNumber = parseInt(prompt('inserisci un numero da 1 a 80'));
        if (isInRange(1,levelMax,userNumber) || isInArray(userNumber, user)) {
         alert("ATTENZIONE!! Inserisci solo numeri consentiti e diversi da quelli gia' inseriti");} 
        else {
        user.push(userNumber);
    }
    } while (!isInArray(userNumber, computer) && user.length < option);

} else if (level==0 || isNaN(level)) {
    levelMax=100;
    while (computer.length < numMaxComp) {
        numComp = random(1,levelMax);
        if (!isInArray(numComp, computer)) {
            computer.push(numComp);    
        }
    } 

    do {
        var userNumber = parseInt(prompt('inserisci un numero da 1 a 100'));
        if (isInRange(1,levelMax,userNumber) || isInArray(userNumber, user)) {
         alert("ATTENZIONE!! Inserisci solo numeri consentiti e diversi da quelli gia' inseriti");
        } else {
        user.push(userNumber); 
    }
    } while (!isInArray(userNumber, computer) && user.length < option);
}

if (isInArray(userNumber, computer)) {
    document.getElementById('result').innerHTML = "HAI PERSO !!";
    document.getElementById('count').innerHTML = "Hai totalizzato " + "<span class=point>" + (user.length -1) + "</span>" + " punti"; 
} else {
    document.getElementById('result').innerHTML = "HAI VINTO !!";
    document.getElementById('count').innerHTML = "Hai totalizzato " + "<span class=point>" + user.length + "</span>" + " punti";   
}

// FUNZIONI 

function random(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function isInArray(val, array) {
    for (var i = 0; i < array.length; i++) { 
        if (array[i] == val ) {
            return true;
        } 
    } 
    return false;
}

function isInRange(min,max,num) {
    if (num < min || num > max || isNaN(num)) {
        return true;
    }
    return false;
}