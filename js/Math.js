/*
(Opsiyonel) 🧠 Mini Challenge: Math
Bir Çemberin Alanını Hesaplama
Yarıçapı verilen bir çemberin alanını hesaplayan 
bir fonksiyon yazın. Kullanılacak formül:

π = PI Sayisi, Alan = π × r²
*/

function circleArea(radius) {
    return Math.PI * Math.pow(radius, 2); // π * r² formülü kullanıldı
}

// Test 
console.log(circleArea(5)); // 78.53981633974483