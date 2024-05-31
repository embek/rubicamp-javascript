class Tyre {
    constructor(brand, size) {
        this.brand = brand;
        this.size = size;
    }
}

const dunlop = new Tyre('Dunlop', 15);
const bridgestone = new Tyre('Bridgestone', 17)

class Car {
    constructor(varian, door, seat, tyre) {
        this.varian = varian;
        this.door = door;
        this.seat = seat;
        this.tyre = tyre;
        this.sn;
        this.warranty;
        this.year;
    }
}

class Agya extends Car {

}

class Rush extends Car {

}

class CarFactory {
    constructor() {
        this.cars = [];
        this.cars.push(new Agya('Agya', 5, 5, dunlop));
        this.cars.push(new Rush('Rush', 5, 5, bridgestone));
    }

    randomInt(min, max) {
        return min + Math.floor(Math.random() * (max - min));
    }

    randomHex(panjang) {
        let hasil = '';
        let asal = 'a0b19c82d37e64f5';
        for (let i = 0; i < panjang; i++) {
            hasil = hasil + asal[this.randomInt(0, asal.length - 1)]
        }
        return hasil;
    }

    randomSn = () => this.randomHex(8) + '-' + this.randomHex(4) + '-' + this.randomHex(4) + '-' + this.randomHex(4) + '-' + this.randomHex(12);

    randomCar(year) {
        let sembarang = this.randomInt(0, this.cars.length - 1);
        // console.log(this.cars.length, sembarang);
        this.cars.push(new Car(this.cars[sembarang].varian, this.cars[sembarang].door, this.cars[sembarang].seat, this.cars[sembarang].tyre));
        this.cars[this.cars.length - 1].year = year;
        this.cars[this.cars.length - 1].sn = this.randomSn();
        this.cars[this.cars.length - 1].warranty = this.randomInt(1, 5);
    }

    produce(year) {
        let produksiTotal = this.cars.length;
        let produksiBaru = this.randomInt(5, 10);
        for (let i = produksiTotal; i < produksiTotal + produksiBaru; i++) this.randomCar(year);
    }

    print(index) {
        console.log(`no. ${parseInt(index) + 1}`);
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
        for (let x in this.cars) {
            this.print(x);
        }
    }

    guaranteeSimulation(simulationYear) {
        console.log(`hasil simulasi garansi semua mobil pada tahun ${simulationYear}:\n`)
        for (let x in this.cars) {
            this.print(x);
            console.log(`status on ${simulationYear} : this guarantee status is ${(simulationYear - this.cars[x].year) > this.cars[x].warranty ? 'expired' : 'active'} \n`)
        }

    }
}


const toyota = new CarFactory();
toyota.produce(2020)
toyota.produce(2022)
toyota.result()
toyota.guaranteeSimulation(2025)