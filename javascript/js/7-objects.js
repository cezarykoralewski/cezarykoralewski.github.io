'use strict';

//var lukasz = {
//    customerName: "Łukasz Kowalski",
//    phoneNumber: 666999555,
//    orderConfirmation: function () {
//        console.log(this.customerName + ' właśnie złożył zamowienie.');
//    }
//}
//
//var dominika = {
//    customerName: "Dominika Nowak",
//    phoneNumber: 555444333,
//    orderConfirmation: function () {
//        console.log(this.customerName + ' właśnie złożył zamowienie');
//    }
//}
//
//console.log(dominika.customerName);
//console.log(dominika['customerName']);
//
//lukasz.orderConfirmation();

class Customer {
    constructor(customerName, phoneNumber) {
        this.name = customerName;
        this.phone = phoneNumber;
    }

    orderConfirmation() {
        console.log(this.name + ' właśnie złożył zamowienie');
    }
}

var currentCustomer = new Customer('Łukasz Badocha', 666999666);

console.log(currentCustomer);
console.log(currentCustomer.name);

currentCustomer = new Customer('Dominika Nowak', 888777666);

console.log(currentCustomer);
console.log(currentCustomer.phone);

//BMI
class Osoba {
    constructor(height, weight) {
        this.height = height;
        this.weight = weight;
    }

    liczBMI() {
        return this.weight / (this.height * this.height);
    }

    bmiMessage() {
        if (this.liczBMI() > 26) {
            console.log('Nadwaga');
        } else if (this.liczBMI() < 26 && this.liczBMI() > 18) {
            console.log('Norma');
        } else {
            console.log('Niedowaga');
        }
    }
}

//function Osoba(height, weight) {
//    this.height = height;
//    this.weight = weight;
//    this.liczBMI = function () {
//        return this.weight / Math.pow(this.height, 2);
//    }
//}

var lukasz = new Osoba(1.72, 100);
console.log(lukasz.liczBMI());

var dominika = new Osoba(1.86, 20);
console.log(dominika.liczBMI());



lukasz.bmiMessage();
dominika.bmiMessage();
