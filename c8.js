function pola(str) {
    //write your code here
    bilangan = str.split(" ");
    for (let i = 0; i < 10; i++) {
        depan = parseInt(bilangan[0].replace("#", i));
        tengah = parseInt(bilangan[2]);
        belakang = depan * tengah;
        cocok=belakang.toString().match(bilangan[4].replace("#", "."));
        if (cocok != null) return [i,parseInt(cocok[0][bilangan[4].search("#")])];
    }
}

console.log(pola("42#3 * 188 = 80#204"));
// result: [8, 5]

console.log(pola("8#61 * 895 = 78410#5"));
// [7,9]