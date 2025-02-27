/*
🧠 Challenge: Satır Sonu Programi
Tek satir halinde verilen string parametresini, 
bir satirda X sayida kelime olacak sekilde bolecek 
olan bir fonksiyon yazin. Yeni satirlarin ilk karakteri 
whitespace olamaz.

Bir metne satır sonu karakterini eklemek icin '\n' escape 
characterini kullanin.
*/

const metin = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed fermentum enim, eget egestas enim. Donec fringilla bibendum placerat. Vivamus in turpis et sapien pulvinar dictum ut vel nisl. Duis in ante tempor elit dapibus consectetur vel id arcu. Donec elementum euismod purus, a gravida lectus lacinia sed. Curabitur molestie, felis ornare luctus viverra, dui lacus ultricies orci, id dignissim sapien odio pretium nisi. Etiam accumsan elementum ligula, eget finibus urna pharetra et. Praesent sit amet ligula vel erat sodales suscipit vitae vitae metus. Aenean accumsan sapien a ipsum elementum, non lobortis est tincidunt. Etiam auctor tellus et pharetra auctor. Vivamus elit diam, sollicitudin quis nunc quis, porta dapibus augue. Pellentesque in placerat tellus. Etiam rhoncus odio tincidunt auctor tincidunt. Nulla facilisi.";

function satirSonu(metin, satirSayi) {
    let kelimeler = metin.split(" "); // Kelimelere ayırıyoruz
    let satirlar = []; // Satırları tutacağımız bir dizi

    // Kelimeleri belirli aralıklarla satırlara ekliyoruz
    for (let i = 0; i < kelimeler.length; i += satirSayi) {
        // Bir satırda satirSayi kadar kelime olacak şekilde slice ediyoruz
        let satir = kelimeler.slice(i, i + satirSayi).join(" ");
        satirlar.push(satir); // Satırı satırlar dizisine ekliyoruz
    }

    // Satırları \n ile birleştirip döndürüyoruz
    return satirlar.join("\n");
}

console.log(satirSonu(metin, 4)); // Her satırda 3 kelime olacak
