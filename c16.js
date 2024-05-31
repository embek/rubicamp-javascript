class Tyre {
    constructor(brand, size) {
        this.brand = brand;
        this.size = size;
    }
}

class Car {
    constructor(varian) {
        this.varian = varian;
        this.door;
        this.seat;
        this.tyre;
        this.sn;
        this.warranty;
        this.year;
    }
}

class Agya extends Car {
    constructor(varian) {
        super(varian);
        this.door = 5;
        this.seat = 5;
        this.tyre = new Tyre('Dunlop', 15);
    }
}

class Rush extends Car {
    constructor(varian) {
        super(varian);
        this.door = 5;
        this.seat = 5;
        this.tyre = new Tyre('Bridgestone', 17);
    }
}

class CarFactory {
    constructor() {
        this.cars = [];
        this.cars.push(new Agya('Agya'));
        this.cars.push(new Rush('Rush'));
    }

    randomInt(min, max) {
        return min + Math.floor(Math.random() * (max - min));
    }

    randomHex(panjang) {
        let hasil = '';
        let asal = 'a0b194c82d2737e6941f5';
        for (let i = 0; i < panjang; i++) {
            hasil = hasil + asal[this.randomInt(0, asal.length - 1)]
        }
        return hasil;
    }

    randomSn = () => this.randomHex(8) + '-' + this.randomHex(4) + '-' + this.randomHex(4) + '-' + this.randomHex(4) + '-' + this.randomHex(12);

    randomCar(year) {
        let sembarang = this.randomInt(0, this.cars.length - 1);
        // console.log(this.cars.length, sembarang);
        this.cars.push(new Car(this.cars[sembarang].varian));
        this.cars[this.cars.length - 1].door = this.cars[sembarang].door;
        this.cars[this.cars.length - 1].seat = this.cars[sembarang].seat;
        this.cars[this.cars.length - 1].tyre = this.cars[sembarang].tyre;
        this.cars[this.cars.length - 1].year = year;
        this.cars[this.cars.length - 1].sn = this.randomSn();
        this.cars[this.cars.length - 1].warranty = this.randomInt(1, 5);
        // console.log(`------------------\n${JSON.stringify(this.cars[this.cars.length - 1])}`);
    }

    produce(year) {
        let produksiTotal = this.cars.length;
        let produksiBaru = this.randomInt(5, 10);
        for (let i = produksiTotal; i < produksiTotal + produksiBaru; i++) this.randomCar(year);
    }

    print(index) {
        console.log(`no. ${parseInt(index) - 1}`);
        console.log(`varian     : ${this.cars[index].varian}`);
        console.log(`sn         : ${this.cars[index].sn}`);
        console.log(`door       : ${this.cars[index].door}`);
        console.log(`seat       : ${this.cars[index].seat} seater`);
        console.log(`tyre       : ${this.cars[index].tyre.brand} ${this.cars[index].tyre.size} inch`);
        console.log(`year       : ${this.cars[index].year}`);
        console.log(`warranty   : ${this.cars[index].warranty} year${this.cars[index].warranty > 1 ? 's' : ''}\n`);
    }

    result() {
        console.log(`hasil produksi :\n`)
        for (let i = 2; i < this.cars.length; i++) {
            this.print(i);
        }
    }

    guaranteeSimulation(simulationYear) {
        console.log(`hasil simulasi garansi semua mobil pada tahun ${simulationYear}:\n`);
        for (let i = 2; i < this.cars.length; i++) {
            this.print(i);
            console.log(`status on ${simulationYear} : this guarantee status is ${(simulationYear - this.cars[i].year) > this.cars[i].warranty ? 'expired' : 'active'} \n`);
        }

    }
}


const toyota = new CarFactory()
toyota.produce(2020)
toyota.produce(2022)
toyota.result()
toyota.guaranteeSimulation(2025)