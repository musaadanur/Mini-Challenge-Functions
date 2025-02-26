let numbers = [1,3,2,-4];
let strings = ['B','C','D','D'];
strings.push('Push'); // sona ekler
strings.unshift('Unshift'); // basa ekler
console.log(strings); 

// belirli yere eleman ekleme
// 2.insdise - 0 eleman sil - deger
strings.splice(2,0,'Splice1');
console.log(strings);

strings.pop(); // son elemanı siler
strings.shift(); // baştaki elemanı siler

numbers.sort(); // sıralar
numbers.reverse(); // tersten sıralar

//anlamadım
const reduced = numbers.reduce(function(total,value){ 
    return total + value;
},0);

// dizi birleştirme
const concated = numbers.concat([5,6]);
console.log(concated); 

// Every - dizi içindeki tüm elemanlar için koşulu sına
const isOK = numbers.every(function(value){
    if(value>0){ return true; }
});
console.log(isOK);

// Some - dizi içindeki bazı elemanlar için koşulu sına
const isSomeOK = numbers.some(function(value){
    if(value>2){ return true; }
});
console.log(isSomeOK);


// dizinin belirli bir kısmını böl
const sliced = strings.slice(1,3); // 1. ve 2. indisi alır


// Join - elemanları metine çeviriyo tek satır
const joined = strings.join(', ');
console.log(joined);

//arama
const finded = strings.find(function(value){ 
    if(value === 'A') return value; // buldugu ilk A yı getirir
});

// Dizi içindeki tüm elemanları ara
const filtered = strings.filter(function(value){ 
    if(value === 'A') return value; // tüm A ları getirir
});


// dizi içindeki tüm elemanlar için işlem yap
const mapped = strings.map(function(value){ 
    return "-"+value+"-"; // tüm elemanlara - - yazar
});



