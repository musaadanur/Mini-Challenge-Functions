/*
Function Declaration
sayHello adında bir fonksiyon yazın.
Bu fonksiyon bir isim parametresi almalı ve şu şekilde 
bir selamlama mesajı döndürmeli: "Merhaba, [isim]!". 
Fonksiyonu "Alice" ismiyle çağırın ve sonucu konsola yazdırın.
*/
function sayHello(isim){
    return "Merhaba,"+ isim +"!";
}
console.log(sayHello("Alice"));

/*
Function Expression
multiply isminde bir değişkene atanmış bir 
fonksiyon ifadesi oluşturun. Bu fonksiyon iki 
sayı almalı ve bu sayıların çarpımlarının sonucunu 
döndürmeli. Fonksiyonu 5 ve 3 ile çağırın, 
ardından sonucu konsola yazdırın.
*/
const multiply = function(a, b) {
    return a * b;
};
console.log(multiply(5, 3));


/*
Arrow Functions
divide adında bir ok fonksiyonu yazın. 
Bu fonksiyon iki sayı almalı ve bu sayıların 
bölme sonucunu döndürmeli. Fonksiyonu 10 ve 2 ile 
test edin, sonucu konsola yazdırın.
*/
const divide = (a, b) => a / b;
console.log(divide(10, 2));

/*
Varsayılan Parametreler
greetUser adında bir fonksiyon oluşturun. 
Bu fonksiyon bir name ve surname parametresi almalı. 
name parametresinin varsayılan değeri "Misafir" olmalı.

Fonksiyon "Hoş geldin, [isim] [soyisim]!" mesajını 
döndürmeli. Bu mesajı + ile oluşturun.

Fonksiyonu hem argüman olmadan hem de John Doe 
ismiyle çağırarak test edin. Sonuçları konsola yazdırın.
*/
function greetUser (surname,name="Misafir"){
    return "Hoş geldin,"+name+" "+surname+"!";
} 
console.log(greetUser());
console.log(greetUser("Doe","John"));



