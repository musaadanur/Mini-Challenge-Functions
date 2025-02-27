/*
String, tek tırnak ('), çift tırnak (") veya ters 
tırnak (`) içinde yazılmış karakter dizileridir.
Stringlerdeki karakterlere array elementlerine 
erisiyormus gibi [] syntaxini kullanarak erisebiliriz.
*/
const str2 = "HelloWorld";
str2[0] === "H";
console.log(str2[5]); // W basar

const isim = "Ahmet";
const selamlama = `Merhaba, ${isim}`;
console.log(selamlama);

// String Methods Cheatsheet
// 1. charAt(index)
const str = "Muz";
console.log(str.charAt(2)); // "z"

// 2. toUpperCase() - toLowerCase()
console.log(str.toUpperCase()); // "MUZ"

// 3. trim()
// String'in başındaki ve sonundaki boşlukları kaldırır.
console.log(str.trim()); // "Muz"

// 4. split(separator)
// String'i belirtilen ayırıcıya göre bir diziye böler.
const str55 = "Köpek,Kedi,Kuş";
console.log(str55.split(",")); // ["Köpek", "Kedi", "Kuş"]

// 5. slice(start, end) 
// String'in bir kısmını çıkarır.
const str14 = "ppAnanas";
console.log(str14.slice(2, 5)); // "Ana"

// 6. replace(search, replacement)
// String'in bir kısmını başka bir değerle değiştirir.
const str11 = "Kod yazmayı seviyorum";
console.log(str11.replace("seviyorum", "bayılıyorum")); // "Kod yazmayı bayılıyorum"

// 7. includes(substring)
// String'in belirtilen substring'i içerip içermediğini kontrol eder.
const str12 = "Çilekli Milkshake";
console.log(str12.includes("shake")); // true

// 8. indexOf(substring)
// Belirtilen ilk substring'in pozisyonunu döndürür.
const str15 = "Salatalık Salatası";
console.log(str15.indexOf("a")); // 1

// 9. concat(string2, string3, ...)
// Birden fazla string'i birleştirir.
const str66 = "Günaydın";
const str67 = "Dünya";
console.log(str66.concat(" ", str67)); // "Günaydın Dünya"

// 10. substring(start, end)
// Belirtilen iki index arasındaki string'i döndürür.
const str44 = "Yabanmersini";
console.log(str44.substring(0, 5)); // "Yaban"

// 11. repeat(count)
//String'i belirtilen sayı kadar tekrarlar.
const str77 = "Evet! ";
console.log(str77.repeat(3)); // "Evet! Evet! Evet! "

// 12. startsWith(prefix)
// String'in belirtilen string ile başlayıp başlamadığını kontrol eder.
const str33 = "Avokado";
console.log(str33.startsWith("Avo")); // true

// 13. endsWith(suffix)
// String'in belirtilen string ile bitip bitmediğini kontrol eder.
const str88 = "Karpuz";
console.log(str88.endsWith("uz")); // true
