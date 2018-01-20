'use strict';
var number = 10;

// WARUNEK IF

if (number > 5) {
    console.log('Liczba jest większa od 5.');
}

// WARUNEK IF-ELSE
if (number < 3) {
    console.log('Liczba jest mniejsza od 3.');
} else {
    console.log('Liczba jest większa od 3.');
}

// WARUNEK ELSE-IF
if (number < 10) {
    console.log('Liczba jest mniejsza od 3.');
} else if (number == 10) {
    console.log('Liczba jest rowna 10');
} else if (number >= 10 && number <= 20) {
    console.log('Liczba jest z przedziału 10-20');
} else {
    console.log('Liczba jest większa od 20');
}

//SWITCH

var color = 'blue';

switch (color) {
    case 'red':
        console.log('Kolor czerwony');
        break;

    case 'green':
        console.log('Kolor zielony');
        break;

    default:
        console.log('Kolor ani zielony ani czerwony');
}
