'use strict';

//deklaracja funkcji

function example() {
    console.log('To jest przykładowa funkcja');
}

example();

var anonim = function () {
    console.log('To jest funkcja anonimowa');
}

anonim();
console.log(anonim());

// Funkcja z parametrami 

function dodajDwieLiczby(num1, num2) {
    var liczba1 = num1;
    var liczba2 = num2;

    console.log(liczba1 + liczba2);
}

dodajDwieLiczby(15, 30);
dodajDwieLiczby(3, 6);


// Napsiz funkcję, ktora pobiera trzy parametry - imię, nazwisko, wzrost – i wyświetla w konsoli "Moję imię to xyz, moje nazwisko to xyz i mam xyz cm wzrostu"


function userInfo(name, surname, height) {
    console.log('Moję imię to ' + name + ', moje nazwisko to ' + surname + ' i mam ' + height + 'cm wzrostu.');
}

userInfo('Cezary', 'Koralewski', 186);

var wynikDodawania = dodajDwieLiczby(10, 2);

//console.log(wynikDodawania);
