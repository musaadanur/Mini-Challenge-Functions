/* sonsuz dongu
let i=0;
for(;;){
    console.log("sonsuz"+i);
    i++;
    if(i>61) break;
} */

/*
// for
for(let i=0; i<5; i++){
    console.log("merhaba"+i);
}
// while
let i = 0;
while (i < 5) {
   console.log(i); // 0'dan 4'e kadar olan sayıları yazdırır
   i++; // Her iterasyondan sonra i'yi artır
}
// do while
let i = 0;
do {
   console.log(i); // 0'dan 4'e kadar olan sayıları yazdırır
   i++; // Her iterasyondan sonra i'yi artır
} while (i < 5);
*/

/* for...in bir nesnenin özellikleri 
veya bir dizinin indeksleri üzerinde yineleme yapmak için

const dizi = [1,2,3,4];
for (const key in dizi) 
    console.log(key + ": " + dizi[key]);
*/

/* for...of yinelemeli (iterable) nesneler üzerinde 
            Değerler üzerinde çalışır 
const numbers = [1, 2, 3, 4, 5];
for (const num of numbers) {
   console.log(num); // 1'den 5'e kadar olan sayıları yazdırır
}
*/

// break: dongu sonlandırır - continue: Mevcut iterasyonu atlar 
/*
for (let i = 0; i < 5; i++) {
    if (i === 3) {
       break; // i 3 olduğunda döngüyü sonlandır
    }
    console.log(i); // 0, 1, 2'yi yazdırır
 }

 for (let i = 0; i < 5; i++) {
    if (i === 3) {
       continue; // i 3 olduğunda bu iterasyonu atla
    }
    console.log(i); // 0, 1, 2, 4'ü yazdırır
 }
*/