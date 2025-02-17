function selectColor(number) {
    if (number < 0 || number > 50) return "Geçersiz sayı";
    
    const colors = ["mavi", "bordo", "yeşil", "sarı", "turuncu"]; 
    
    let index = Math.floor(number / 10);

    return colors[index];
}

console.log(selectColor(11)); // bordo
console.log(selectColor(6)); // mavi
console.log(selectColor(-1)); // Geçersiz sayı