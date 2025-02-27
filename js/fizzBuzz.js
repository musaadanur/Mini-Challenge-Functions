/*
🧠 Challenge: FizzBuzz
1'den 101'e kadar olan sayilardan;

a. 3'e tam bolunenleri Fizz,

b. 5'e tam bolunenleri Buzz,

c. hem 3'e hem 5'e tam bolunenleri de FizzBuzz 
   seklinde konsola loglayan bir fonksiyon yazin.

Bu islemi bir loop kullanarak yapin. Bolunmeyi 
hesaplamak icin modulo % operatorunu kullanabilirsiniz.
*/

for (let i = 1; i < 102; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(i + " FizzBuzz");
    }
    else if (i % 3 === 0) {
        console.log(i + " Fizz");
    }
    else if (i % 5 === 0) {
        console.log(i + " Buzz");
    }
    else console.log(i + " :(");
}