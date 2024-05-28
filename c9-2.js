function spiral(param1) {
    // Your code here
    var pos = [0, 0, 0, 0], arr = [];
    for (let i = 0; i < Math.floor((param1 + 1) / 2); i++) {
        pos[0] = i * (param1 + 1);
        pos[1] = (i + 1) * (param1 - 1)
        pos[2] = param1 ** 2 - pos[0] - 1;
        pos[3] = param1 ** 2 - pos[1] - 1;
        for (let j = 0; j < 4; j++) {
            selisih = pos[(j + 1) % 4] - pos[j];
            lompat = param1 - 2 * i - 1;
            tambah = selisih / lompat;
            // console.log(param1,i,selisih,lompat, tambah);
            if (lompat != 0) {
                for (let k = pos[j]; k < pos[(j + 1) % 4]; k += tambah) arr.push(k);
                for (let k = pos[j]; k > pos[(j + 1) % 4]; k += tambah) arr.push(k);
            } else {
                arr.push(pos[j]);
                break;
            }
        }
    }
    console.log(arr);
}

spiral(5);
spiral(6);
spiral(7);
spiral(11);