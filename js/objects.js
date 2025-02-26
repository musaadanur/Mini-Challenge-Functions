/*
1- Nesne Özellik Erişimi
Aşağıdaki person nesnesinden name ve age 
özelliklerine erişin ve loglayın.
*/
const person = { name: "John", age: 30, country: "USA" };
console.log(person.name+" "+person.age);

/*
2- Yeni Özellik Ekleme
person nesnesine bir city özelliği ekleyin 
ve güncellenmiş nesneyi loglayın.
*/
person.city = "trabzon"; // ama bu yontemi tercih etme
console.log(person.city);

/*
3- Özellik Güncelleme
person nesnesindeki age özelliğini değiştirin 
ve güncellenmiş nesneyi loglayın.
*/
person.age=61;
console.log(person.age);

/*
4- Özellik Silme
person nesnesindeki country özelliğini 
kaldırın ve güncellenmiş nesneyi loglayın.
*/
delete person.country;
console.log(person);

/*
5- Nesne Destructuring
Aşağıdaki nesneden name ve country 
özelliklerini destructure edin ve loglayın:
*/
const person2 = { name: "John", age: 30, country: "USA" };
const {name, country} = person2;
console.log(name+" "+country); 

/*
6- Nesne Anahtarları ve Değerleri
person2 nesnesi verildiğinde, Object.keys() ile tüm 
anahtarları ve Object.values() ile tüm değerleri alın. 
Her ikisini de loglayın.
*/
const personKey = Object.keys(person2);
const personValues = Object.values(person2);
console.log("Keys:"+personKey+" // Values:"+personValues);

/*
7- İki Nesneyi Birleştirme
Aşağıdaki iki nesneyi person ve address birleştirip
tek bir nesne olarak loglayın
*/
const person61 = { name: "John", age: 30 };
const address61 = { city: "New York", country: "USA" };
const birlesmis61 = {...person61, ...address61};
console.log(birlesmis61);

/*
8- İç İçe Nesne Erişimi
Aşağıdaki iç içe nesne user verildiğinde, address 
nesnesi içindeki city değerini erişip loglayın:
*/
const user = { name: "John", 
               address: { city: "New York", 
                          country: "USA"
                        }
             };
console.log(user.address.city);

/*
9- for...in ile Nesne İterasyonu
Aşağıdaki person nesnesini for...in döngüsü ile iterate
edin ve her bir anahtarı ve karşılık gelen değeri loglayın.
*/
const person25 = { name: "John", age: 30, country: "USA" };
for(const key in person25){
    console.log(key + ": "+ person25[key]);
}

/*
10- Özelliğin Var Olup Olmadığını Kontrol Etme
Aşağıdaki person nesnesine göre, city özelliği varsa değerini 
loglayın; yoksa "City not found" yazısını loglayın.
*/
const person06 = { name: "John", age: 30, country: "USA" };
if ("city" in person06){
    console.log(person06.city);
} else console.log("City not found");