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

// Callback (Function as a Parameter)
function process(callback) {
    console.log("İşlem başlıyor...");
    callback(); // Parametre olarak alınan fonksiyon çağrılıyor
}
function done() {
    console.log("İşlem tamamlandı!");
}
process(done);

//setTimeout ile Callback Kullanımı
setTimeout(() => {
    console.log("Bu mesaj 2 saniye sonra görünecek.");
}, 2000);

