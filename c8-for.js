function pola(str) {
    //write your code here
    posKali = str.search(/\*/);
    posSama = str.search(/=/);
    depan = str.substring(0, posKali).trim();
    tengah = str.substring(posKali + 1, posSama).trim();
    belakang = str.substring(posSama + 1).trim();
    for (let i = 0; i < 10; i++) {
        numDepan = parseInt(depan.replace("#", i));
        numTengah = parseInt(tengah);
        hasil = numDepan * numTengah;
        for (let j = 0; j < 10; j++) {
            numBelakang = parseInt(belakang.replace("#", j));
            if (numBelakang == hasil) return [i, j];
        }
    }
}

console.log(pola("42#3 * 188 = 80#204"));
// result: [8, 5]

console.log(pola("8#61* 895 = 78410#5"));
// [7,9]