var computer = [];
var user = [];

for (var i = 0; i < 16; i++) {
    computer.push(random(1,100));
}
console.log(computer);

i=0;
count = 0;
do {
    var userNumber = parseInt(prompt('inserisci un numero da 1 a 100'));
    user.push(userNumber);
    count ++;
    i++;
} while (!isInarray(userNumber, computer) && i<5);

console.log(user);
console.log(count);


if (isInarray(userNumber, computer)) {
    console.log('hai perso');   
} else {
    console.log('hai vinto');   
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