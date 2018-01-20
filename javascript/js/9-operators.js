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

console.log((2 == 2) && (2 > 1) || (1 > 2));

var parzystaCzyNieparzysta = (number % 2 == 0) ? 'parzysta' : 'nieparzysta';
console.log(parzystaCzyNieparzysta);
