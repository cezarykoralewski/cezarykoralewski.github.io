'use strict';

//for (var i - 0; i < 10; i++) {
//    //console.log(i);
//}

var randomNumber = Math.round(Math.random() * 10);

while (randomNumber > 5) {
    console.log(randomNumber);
    randomNumber = Math.round(Math.random() * 10);
}

do {
    // console.log(randomNumber);
    randomNumber = Math.round(Math.random() * 10);
} while (randomNumber > 2);


var jakasTablica = [null, 2, 17, 'Cześć', '', -12.3, false, true, 30];

//napisz funkcję, ktora przyjmie tablice jako parametr i zwroci liczbe elementow typu number, ktore sa w tablicy

function countNumbers(arr) {
    var count = 0;

    for (var i = 0; i < arr.lenght; i++) {
        if (typeof arr[i] == 'number') {
            ++count;
        }
    }

    return count;
}

console.log(countNumbers(jakasTablica));

var nowaTablica = [1, 6, null, 'Siema'];
console.log(countNumbers(nowaTablica));

//break i continue
for (var i = 0; i < 10; i++) {
    console.log(i);
    if (i % 5 == 0) {
        break;
    }
}
