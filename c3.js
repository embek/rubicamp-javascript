function romawi(n) {
    //write your code here
    var i = 0, rom = '', digit;
    do {
        i++;
        digit = n % 10;
        //console.log(digit, i, n);
        switch (digit) {
            case 0:
            case 1:
            case 2:
            case 3:
                for (let j = 0; j < digit; j++) {
                    if (i == 1) rom = "I" + rom;
                    else if (i === 2) rom = "X" + rom;
                    else if (i == 3) rom = "C" + rom;
                    else if (i == 4) rom = "M" + rom;
                }
                break;
            case 4:
                if (i == 1) rom = "IV" + rom;
                else if (i == 2) rom = "XL" + rom;
                else if (i == 3) rom = "CD" + rom;
                break;
            case 5:
            case 6:
            case 7:
            case 8:
                for (let j = 0; j < digit - 5; j++) {
                    if (i == 1) rom = "I" + rom;
                    else if (i == 2) rom = "X" + rom;
                    else if (i == 3) rom = "C" + rom;
                }
                if (i == 1) rom = "V" + rom;
                else if (i == 2) rom = "L" + rom;
                else if (i == 3) rom = "D" + rom;
                break;
            case 9:
                if (i == 1) rom = "IX" + rom;
                else if (i == 2) rom = "XC" + rom;
                else if (i == 3) rom = "CM" + rom;
                break;
            default:
                break;
        }
        n = (n - digit) / 10;
    } while (n > 0);
    return rom;
}

console.log("Script Testing untuk Konversi Romawi\n");
console.log("input | expected | result");
console.log("----- |--------- | -------");
console.log("4     | IV       |", romawi(4));
console.log("9     | IX       |", romawi(9));
console.log("13    | XIII     |", romawi(13));
console.log("1453  | MCDLIII  |", romawi(1453));
console.log("1646  | MDCXLVI  |", romawi(1646));

console.log(romawi(3459))