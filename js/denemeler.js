console.log("hayy");

// fonksiyonlar /* */ 
function getBread(){
    return console.log("ekmek alındı");
};
getBread();

// function declaration, expression, arrow function(hoist edilmez)
// parameter, argument(deger)

() => {}; // arrow func
const fn1 = () => {};
fn1();

// pure function side effect uretmeyen fonksiyona denir

const arr1=[1,2,3];
const result= arr1.find((i) => i===2);//predicate func

function variadic(...args){ // variadic func
}

// diziler
/*
push() Dizinin sonuna bir öğe ekler.
pop() Dizinin sonundaki öğeyi siler.
shift() Dizinin başındaki öğeyi siler.
unshift() Dizinin başına bir öğe ekler.
concat() İki veya daha fazla diziyi birleştirir.
slice() Dizinin bir kısmının bir kopyasını oluşturur.
splice() Belirli bir indeksle diziden öğe ekler veya çıkarır.
forEach() Her bir dizi elemanı üzerinde bir fonksiyon çalıştırır.
map() Her bir dizi elemanına uygulanan fonksiyonun sonucuyla yeni bir dizi oluşturur.
filter() Belirli bir testi geçen elemanlarla yeni bir dizi oluşturur.
reduce() Diziyi tek bir değere indirger.
sort() Diziyi sıralar.
reverse() Dizinin sırasını tersine çevirir.
includes() Bir öğenin dizide olup olmadığını kontrol eder.
indexOf() Dizideki bir öğenin indeksini return eder. Oge mevcut degilse -1 return eder.
find() Belirli bir koşulu karşılayan ilk öğeyi bulur.
join() Tüm dizi öğelerini birleştirerek bir string oluşturur.
*/
const meyveler = ['elma', 'muz', 'kiraz','tursu'];
const [ilk, ikinci,ucuncu] = meyveler; // Destructuring:
console.log(ilk);  // "elma"
console.log(ucuncu); // "kiraz"
meyveler.push('havuc');
console.log(meyveler.length);

// Stringler 
const str = "HelloWorld";
str[0] === "H";

// Objects
const araba = {
    marka: "Tesla",
    model: "Model 3",
    drive: function() {
      console.log("Sürüyor...");
    }
  };
console.log(araba.marka); // "Tesla"
araba.drive(); // "Sürüyor..."


// Manipulating Objects
const user = {
name: "Alice",
sayHello: () => console.log("Hello"),
};

user.email = "alice@example.com"; // Dot notation kullanarak email eklendi
user["country"] = "USA"; // Bracket notation kullanarak Country eklendi

console.log(user);
delete user.country; // country fieldini user objesinden sil
console.log(user);

// Spread Syntax 
// kullanici objesi kopyaKullanici degiskenine kopyalaniyor
const kopyaKullanici = { ...user }; 
console.log(kopyaKullanici);

// Nesneleri Birleştirme - 
// birlesmis" degiskeni kullanici ve
// detaylar objelerinin kopyalarindan olusturuluyor
const kullanici = { isim: "Alice" };
const detaylar = { yas: 25, ulke: "ABD" };
const birlesmis = { ...kullanici, ...detaylar };


// Belirli özellikleri hariç tutarak 
// yeni bir nesne oluşturur
const { isim, ...kalan } = kullanici;
console.log(kalan); // isim fieldi hariç yeni obje oluşturur.


// object destructuring
// nesnenin fieldlarina degisken olarak erisilmesi 
const user2 = { namee: "Alice", agee: 25 };
const { namee, agee } = user2;
console.log(namee); // "Alice"

//////////////// Object Class Methods ///////////////
// Object.entries() ->
// Object.keys() -> 
// Object.values() ->
// [key, value] Syntax ->
const kullanici61 = { isim: "Alice", yas: 25, ulke: "ABD" };
const entries = Object.entries(kullanici61); // anahtar-değer çiftlerini içeren bir dizi döndürür
console.log(entries); // Çıktı: [ ['isim', 'Alice'], ['yas', 25], ['ulke', 'ABD'] ]

const keys = Object.keys(kullanici61); // Nesnenin anahtarlarını içeren bir dizi döndürür.
console.log(keys); // Çıktı: ['isim', 'yas', 'ulke']

const values = Object.values(kullanici61);
console.log(values); // Çıktı: ['Alice', 25, 'ABD']

for (const [key, value] of Object.entries(kullanici61)) {
    console.log(key, value); 
  }
// Çıktı:
// isim Alice
// yas 25
// ulke ABD



