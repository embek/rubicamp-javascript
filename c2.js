function deretKaskus(n) {
    //write code here
    var x, arr = [];
    for (let i = 1; i <= n; i++) {
        x = 3 * i;
        if (x % 30 == 0) {
            arr.push("KASKUS");
        } else if (x % 5 == 0) {
            arr.push("KAS");
        } else if (x % 6 == 0) {
            arr.push("KUS");
        } else arr.push(x)
    }
    return arr;
}

console.log(deretKaskus(10));