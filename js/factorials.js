/*
🧠 Challenge: Factorials
Parametre olarak verilen sayinin faktoriyelini 
return eden bir fonksiyon yazin.

Faktoriyel, bir sayinin kendisi ve kendisinden 
onceki butun pozitif sayilarin carpimina denir.

5! = 5 x 4 x 3 x 2 x 1 = 120.

Fonksiyonu yazdiktan sonra farkli sayilarla 
fonksiyonunuzu test edin.

Not: 0! 1'e esittir.
*/

function facto(num){
    if (num === 0 || num === 1) return 1;
    else if (num>1)
    {
        let top=1;
        for(let i=1; i<=num; i++){    //
            top= i*top; 
        }
        return top;
    }
    else return "Pozitif sayı gir!";
}
console.log(facto(5));
console.log(facto(6));