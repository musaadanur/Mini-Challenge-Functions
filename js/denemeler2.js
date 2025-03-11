const now = new Date(); // geçerli tarih saat
console.log(now); // 2025-03-11T21:40:52.448Z
console.log(now.getFullYear()); // yıl
console.log(now.getMonth()); // Ay (0-11)
console.log(now.getDay()); // günü (0-6)
console.log(now.getHours()); // saat (0-23)
console.log(now.toLocaleDateString()); // Yerel formata uygun tarih 3/12/2025
console.log(Date.now()); //1 Ocak 1970'ten itibaren geçen milisaniye sayısını gösterir


