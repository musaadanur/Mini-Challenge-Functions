/*
//Normal Fonksiyon:
function sayHello(name) {
    return "Merhaba, " + name + "!";
}
console.log(sayHello("Alice"));

//Arrow Function ile:
const sayHello = (name) => "merhaba, " + name + "!";
console.log(sayHello("Alice"));

//Çok Satırlı Arrow Function
const multiply = (a, b) => {
    let result = a * b;
    return result;
};
console.log(multiply(3, 5)); // 15

// Anonymous Functions
const sayHello = function(name) {
    return "Merhaba, " + name + "!";
};
console.log(sayHello("Alice")); // Merhaba, Alice!

//IIFE
(function() {
    console.log("Bu fonksiyon hemen çalıştırıldı!");
})();
// parametreli IIFE
(function(name) {
    console.log("Merhaba, " + name + "!");
})("Alice");

*/

/*
//Rest Parameter
//fonksiyona verilen birden fazla argümanı 
//tek bir diziye toplamanızı sağlar

function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3));   // Çıktı: 6
console.log(sum(10, 20, 30)); // Çıktı: 60
*/

/*
//Predicate Function
const isEven = (num) => num % 2 === 0;

console.log(isEven(4)); // true
console.log(isEven(7)); // false

const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers.filter(isEven);

console.log(evenNumbers); // [2, 4, 6]
*/