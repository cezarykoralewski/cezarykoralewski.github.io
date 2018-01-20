'use strict';

// deklaracja zmiennej przechowującej tablice

var emptyArray = [];
console.log(emptyArray);

var exampleArray = [1, 'Cześć', true, null];
console.log(exampleArray);

// przypisywanie elementow tablicy

var arrayElement = exampleArray[1];
console.log(arrayElement);

exampleArray[3] = 60;
console.log(exampleArray);

exampleArray[1] = 'Pa';
console.log(exampleArray);

exampleArray[10] = false;
console.log(exampleArray);

// metody tablicowe

exampleArray.push('Hello'); // dodanie na końcu
console.log(exampleArray);

exampleArray.pop(); // ucięcie ostatniego
console.log(exampleArray);

var lastArrayElement = exampleArray.pop();
console.log(lastArrayElement);

console.log(exampleArray);

exampleArray.unshift('Siema');
console.log(exampleArray);

exampleArray.shift();
console.log(exampleArray);

exampleArray.shift(); // ucięcie pierwszego
console.log(exampleArray);

exampleArray.unshift(1); // wstawienie na początek
console.log(exampleArray);

// wstaw elementy na 2 i 3 indeksie exampleArray

exampleArray.splice(2, -1, "Cezary");
exampleArray.splice(3, 0, "Koralewski");
console.log(exampleArray);

//długość tablicy
console.log(exampleArray.lenght);

//tablica dwuwymiarowa

var tablicaDwuwymiarowa = [['Cześć', 'kolego'],
                           ['Cezary', 'Koralewski']];
console.log(tablicaDwuwymiarowa[0][1]);

//odwracanie i sortowanie
exampleArray.reverse();
console.log(exampleArray);

exampleArray.sort();
console.log(exampleArray);
