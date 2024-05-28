function indexPrime(param1) {
    //write your code here
    var daftarPrima = [], n = 2;
    daftarPrima.push(n);
    param1--;
    while (param1 > 0) {
        n++;
        if (daftarPrima.every(prim => n % prim != 0)) {
            daftarPrima.push(n)
            param1--;
            //console.log(param1,n);
        }
    }
    return n;
}

console.log(indexPrime(4)) //result => 7
console.log(indexPrime(500)) //result => 3571
console.log(indexPrime(37786)) //result => 450881