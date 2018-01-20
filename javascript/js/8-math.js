'use strict';

var potega = Math.pow(10, 2);
console.log(potega);

// liczba losowa
var randomNumber = Math.round(Math.random() * 100);
console.log(randomNumber);

var resztaZDzielenia = 6 % 4;
console.log(resztaZDzielenia);


var liczba = 1;
console.log(liczba);
console.log(++liczba);
console.log(++liczba);


//operatory przypisania
var number = 100;
console.log(number);

number += 20;
console.log(number);

number *= 2;
console.log(number);


//operatory porownania
console.log(2 === 2);
console.log(3 !== 2);

console.log('2' === 2);
console.log(3 !== 2);

console.log(3 > 3);
console.log(3 >= 3);

//operatory logiczne
console.log((2 == 2) && (3 < 2));
console.log((2 == 2) && (3 > 2));

console.log((2 == 2) || (3 < 2));
console.log((2 == 2) || (3 < 2));
console.log((2 !== 2) || (3 < 2));

console.log(!(2 == 2));
