class Apa {
    constructor(value) {
        this.nilai = 10 * value;
        this.wkwk = [];
    }
    this.aa = this.wkwk.length;
    nilaiAwal() {
        this.wkwk.push(this.nilai / 5);
    }
}

class Bebe extends Apa {
    // constructor(){
    //     super();
    // }
}

b = new Bebe(3);
console.log(b.nilai);

b = new Bebe(4);
b.nilaiAwal();
console.log(b.wkwk);
console.log(b.aa);