function weirdMultiply(sentence) {
    //write your code here
    if (sentence < 10) return sentence;
    else {
        let hasil = 1;
        while (sentence > 0) {
            hasil *= sentence % 10;
            sentence = Math.floor(sentence / 10);
        }
        return weirdMultiply(hasil);
    }
}



console.log(weirdMultiply(39)); // -> 3 * 9 = 27 -> 2 * 7 = 14 -> 1 * 4 = 4
console.log(weirdMultiply(999)); // -> 9 * 9 * 9 = 729 -> 7 * 2 * 9 = 126 -> 1 * 2 * 6 = 12 -> 1 * 2 = 2
console.log(weirdMultiply(3)); // -> 3 karena telah satu digit