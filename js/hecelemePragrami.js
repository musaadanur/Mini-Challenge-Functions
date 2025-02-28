/*
🧠 Challenge: Heceleme Programi
Verilen Türkçe string parametresini hecelerine 
ayiran bir fonksiyon yazin.

Bu parametre daima kelime olacaktir.

Ipucu: Bir kelimeyi hecelerine ayirmak 
icin sesli harflere dikkat etmelisiniz.
*/// unluHarfler = ['a', 'e', 'ı', 'i', 'o', 'ö', 'u', 'ü'];


// Sesli harf olup olmadığını kontrol eden fonksiyon
const sesliMi = harf => ['a', 'e', 'ı', 'i', 'o', 'ö', 'u', 'ü'].includes(harf);

function hecele(kelime) {
  let sonuc = ''; // Hecelenmiş kelimeyi saklayacak değişken
  let i = 0; // Döngü sayacı

  while (i < kelime.length) {
    const harf = kelime[i]; 
    sonuc += harf; // Harfi sonuca ekle

    // Eğer harf sesli ise kontrol et
    if (sesliMi(harf)) {
      const sonraki = kelime[i + 1]; // Bir sonraki harf
      const diger = kelime[i + 2]; // İki sonraki harf

      // Eğer iki ünsüz yan yana gelirse, ilkini önceki heceye, ikincisini sonraki heceye ekle
      if (sonraki && diger && !sesliMi(sonraki) && !sesliMi(diger)) {
        sonuc += sonraki + '-'; // İlk ünsüzü ekleyip heceyi ayır
        i++; // Bir adım ileri git
      } else {
        sonuc += '-'; // Normal heceleme
      }
    }

    i++; // Bir sonraki harfe geç
  }

  // Eğer son karakter '-' ise, onu kaldır
  return sonuc.endsWith('-') ? sonuc.slice(0, -1) : sonuc;
}

console.log(hecele('patika')); // pa-ti-ka
























/* hocanın yaptığı daha doğru çalışıyor

const isVowel = letter => {
  const vowels = ['a', 'e', 'ı', 'i', 'o', 'ö', 'u', 'ü'];
  return vowels.includes(letter);
}

function a (word) {
  let copyWord = word;

  let i = 0;
  let result = '';
  let count = 0;
  
  while(i < copyWord.length) {
    const letter = copyWord[i];
    
    if (isVowel(letter)) {
      result += letter;

      const nextLetter = copyWord[i + 1];
      const otherLetter = copyWord[i + 2];

      if (nextLetter && otherLetter && !isVowel(nextLetter) && !isVowel(otherLetter)) {
        result += nextLetter + '-';
        i++;
      } else result += '-';

      count++;
    } else {
      result += letter;
    }

    i++;
  }

  // son harften once '-' varsa sil veya son harf '-' ise sil
  const resultStrLastIdx = result.length - 1;
  const lastChar = result[resultStrLastIdx];

  const hasHyphenBeforeLast = result[resultStrLastIdx - 1] === '-';
  const hasHyphenAtLast = lastChar === '-';
  
  if (hasHyphenBeforeLast) result = result.slice(0, resultStrLastIdx - 1) + lastChar;
  else if (hasHyphenAtLast) result = result.slice(0, resultStrLastIdx);
  
  console.log(word, '--->', result);
  return result;
}

a('patika');
a('korkunç');
a("türkçe");

*/