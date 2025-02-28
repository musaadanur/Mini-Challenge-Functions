/*
🧠 Challenge: Heceleme Programi
Verilen Türkçe string parametresini hecelerine 
ayiran bir fonksiyon yazin.

Bu parametre daima kelime olacaktir.

Ipucu: Bir kelimeyi hecelerine ayirmak 
icin sesli harflere dikkat etmelisiniz.
*/// unluHarfler = ['a', 'e', 'ı', 'i', 'o', 'ö', 'u', 'ü'];


const sesliMi = harf => ['a', 'e', 'ı', 'i', 'o', 'ö', 'u', 'ü'].includes(harf);

function hecele(kelime) {
  let sonuc = '';
  let i = 0;

  while (i < kelime.length) {
    const harf = kelime[i];
    sonuc += harf;

    if (sesliMi(harf)) {
      const sonraki = kelime[i + 1];
      const diger = kelime[i + 2];

      if (sonraki && diger && !sesliMi(sonraki) && !sesliMi(diger)) {
        sonuc += sonraki + '-';
        i++;
      } else {
        sonuc += '-';
      }
    }

    i++;
  }

  return sonuc.endsWith('-') ? sonuc.slice(0, -1) : sonuc;
}

console.log(hecele('patika')); // pa-ti-ka
console.log(hecele('konstruksiyon')); // kon-struk-si-yon
console.log(hecele('korkunç')); // kor-kunç























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