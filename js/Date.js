/*
(Opsiyonel) 🧠 Mini Challenge: Date
Yaş Hesaplama
Bir doğum tarihini parametre olarak alan ve 
kişinin yaşını hesaplayan bir fonksiyon yazın.
*/

function calculateAge(date) {
    // Doğum tarihini Date objesine çevir
    let birthDate = new Date(date);
    
    // Geçerli bir tarih olup olmadığını kontrol et
    if (isNaN(birthDate)) {
        return "Geçersiz tarih formatı!";
    }

    // Şu anki tarihi al
    let today = new Date();

    // Yaş hesaplama
    let age = today.getFullYear() - birthDate.getFullYear();

    // Ay ve gün kontrolü (Doğum günü henüz gelmediyse yaşı 1 azalt)
    let monthDiff = today.getMonth() - birthDate.getMonth();
    let dayDiff = today.getDate() - birthDate.getDate();

    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--;
    }

    return age;
}

// **Testler**
console.log(calculateAge("1995-07-27")); 


/*
Bir Tarihin Hafta Sonu Olup Olmadığını Kontrol Etme
Verilen bir tarihin hafta sonuna (Cumartesi veya Pazar) denk
gelip gelmediğini kontrol eden bir fonksiyon yazın.
*/

function isWeekend(date) {
    // Tarihi Date objesine çevir
    let givenDate = new Date(date);

    // Geçerli bir tarih olup olmadığını kontrol et
    if (isNaN(givenDate)) {
        return "Geçersiz tarih formatı!";
    }

    // Gün numarasını al (0 = Pazar, 1 = Pazartesi, ..., 6 = Cumartesi)
    let dayOfWeek = givenDate.getDay();

    // Eğer gün Cumartesi (6) veya Pazar (0) ise true döndür
    return dayOfWeek === 0 || dayOfWeek === 6;
}

// **Testler**
console.log(isWeekend("2025-03-12"));  // false 
console.log(isWeekend("2025-03-15"));  // true 
