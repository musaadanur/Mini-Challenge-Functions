/*
1. map() Challenge
Orijinal dizideki her sayıyı iki katına çıkaran 
yeni bir dizi oluşturun.
*/
let arrays = [1,2,3];
let x2Arrays = arrays.map(function(num) {
    return num * 2;
});
console.log(x2Arrays);
// arrow function ile
// let doubled = arrays.map(num => num * 2);
// console.log(doubled); // Çıktı: [2, 4, 6]


/*
2. forEach() Challenge
Dizideki tüm öğeleri "This is X" mesajıyla yazdırın.
Input: ['🍎', '🍌', '🍓']
Output:
This is 🍎
This is 🍌
This is 🍓
*/
let fruits = ['🍎', '🍌', '🍓'];
fruits.forEach(element => {
    console.log("This is "+element);
});


/*
3. filter() Challenge
Orijinal diziden yalnızca 10'dan büyük sayılardan
oluşan yeni bir dizi oluşturun.
Input: [5, 12, 8, 21] Output: [12, 21]
*/
let numbers = [5, 12, 8, 21];
let filteredNumbers = numbers.filter(value => {
    if(value>10) return value;
});
console.log(filteredNumbers);
// daha kısa yazımı
// let filteredNumbers = numbers.filter(value => value > 10);


/*
4. find() Challenge
Dizideki muz meyvesını bulun.

Example:
Input: ['🍎', '🍌', '🍓', '🍍']Output: '🍌'
*/
let fruits2 = ['🍎', '🍎', '🍌', '🍍'];
let findBanana = fruits2.find(element=>{
    if(element === '🍌') return element;
});
console.log(findBanana);

/*
5. includes() Challenge
Dizinin içinde "🍎" meyvesinin olup olmadığını kontrol edin.

Input: ['🍎', '🍌', '🍓']Output: true
*/
let fruits3 = ['🍎', '🍌', '🍓'];
let appleFruits = fruits3.includes('🍎');
console.log(appleFruits)


/*
6. slice() Challenge
Orijinal dizinin ilk iki elemanından oluşan yeni bir dizi oluşturun.

Input: [1, 2, 3, 4, 5] Output: [1, 2]
*/
let arrays61 = [1, 2, 3, 4, 5];
let zeroFirstIndex = arrays61.slice(0,2);
console.log(zeroFirstIndex);


/*
7. push() Challenge
Dizinin sonuna yeni bir "🍉" meyvesi ekleyin.

Input: ['🍎', '🍌']Output: ['🍎', '🍌', '🍉']
*/
let fruits58 = ['🍎', '🍌'];
fruits58.push('🍉');
console.log(fruits58);


/*
8. pop() Challenge
Dizinin sonundaki meyveyi silin.

Input: ['🍎', '🍌', '🍉'] Output: ['🍎', '🍌']
*/
fruits58.pop();
console.log(fruits58);