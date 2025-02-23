/*
🧠 Challenge: Find Prime Numbers
Asal sayilar yalnizca kendilerine ve 1'e tam 
bolunen pozitif sayilardir.

a. Parametre olarak verilen sayiya 
en yakin asal sayiyi bulan bir fonksiyon yazin. 

Ornegin fonksiyonunuza 100 sayisi arguman 
olarak verildiginde sonuc olarak 97 sayisi 
return edilmeli.

Input: 100 -> Output: 97 

b. Parametre olarak verilen sayidan buyuk olan 
ilk asal sayinin ve kucuk olan ilk asal sayinin 
toplamini bulan bir fonksiyon yazin.

Input: 100

  -> 100'den kucuk ilk asal sayi: 97

  -> 100'den buyuk ilk asal sayi: 101

Output: 101 + 97
*/

/*
function asalCheck(num){
    let sayac=0;
    // Girilen sayının pozitif ve 1 den büyük olması
    // gerektiği için if kontrolunu yapıyoruz
    if(num>2) 
    {
        for(let i=num; i>2; i--){
            if( num%(i-1) === 0 ){
                sayac ++;
                break;
            }
        }
        if(sayac>0) console.log("asal degil")
        else console.log("asal");    
    }
    else if(num === 2) console.log("asal"); 
    else console.log("dogru deger girin");
    
}
*/

// Asal sayı kontrol 
function asalCheck(num) {
    if (num < 2) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

// A Şıkkı
function primeNum(n) {
    // Eğer sayı zaten asalsa direkt döndür
    if (asalCheck(n)) return n; 

    let lower = n - 1;
    let upper = n + 1;

    while (true) {
        if (asalCheck(lower)) return lower;
        if (asalCheck(upper)) return upper;
        lower--;
        upper++;
    }
}

// B Şıkkı
function sumOfNearestPrimes(n) {
    let lower = n - 1;
    let upper = n + 1;

    // İlk küçük asal sayıyı bul
    while (lower > 1 && !asalCheck(lower)) {
        lower--;
    }

    // İlk büyük asal sayıyı bul
    while (!asalCheck(upper)) {
        upper++;
    }

    return lower + upper;
}

console.log(primeNum(14)); // Çıktı -> 13
console.log(sumOfNearestPrimes(4)); // Çıktı -> 8



