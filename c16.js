function randomInt(min, max) {
    return min + Math.floor(Math.random() * (max - min));
}
function randomHex(panjang) {
    hasil = '';
    asal = 'a0b19c82d37e64f5';
    for (let i = 0; i < panjang; i++) {
        hasil = hasil + asal[randomInt(0, asal.length - 1)]
    }
    return hasil;
}

const randomSn = () => randomHex(8) + '-' + randomHex(4) + '-' + randomHex(4) + '-' + randomHex(4) + '-' + randomHex(12);

class Tyre {
    constructor(brand, size) {
        this.brand = brand;
        this.size = size;
    }
}
const tyre = [];
tyre.push(new Tyre('Dunlop', 15));
tyre.push(new Tyre('Bridgestone', 17));

class Car {
    constructor(varian, door, seat, tyre) {
        this.varian = varian;
        this.door = door;
        this.seat = seat;
        this.tyre = tyre;
        this.sn = randomSn();
        this.warranty = randomInt(1, 5);
        this.year;
    }
}

const car = [];
car.push(new Car('Agya', 5, 5, tyre[0]));
car.push(new Car('Rush', 5, 5, tyre[1]));

function randomCar(year) {
    sembarang = randomInt(0, car.length - 1);
    car.push(new Car(car[sembarang].varian, car[sembarang].door, car[sembarang].seat, car[sembarang].tyre));
    car[car.length - 1].year = year;
    return car.slice(-1)[0];
}



console.log(randomSn(), tyre);

class CarFactory {
    constructor() {
        this.cars = [];
    }
    produce(year) {
        let produksiTotal = this.cars.length;
        let produksiBaru = randomInt(3,10);
        for (let i = produksiTotal; i < produksiTotal + produksiBaru; i++) this.cars.push(randomCar(year));
    }

    print(index) {
        console.log(`no. ${index}`);
        console.log(`varian : ${this.cars[index].varian}`);
        console.log(`sn : ${this.cars[index].sn}`);
        console.log(`door : ${this.cars[index].door}`);
        console.log(`seat : ${this.cars[index].seat} seater`);
        console.log(`tyre : ${this.cars[index].tyre.brand} ${this.cars[index].tyre.size} inch`);
        console.log(`year : ${this.cars[index].year}`);
        console.log(`warranty : ${this.cars[index].warranty} year${this.cars[index].warranty > 1 ? 's' : ''}\n`);
    }

    result() {
        for (let x in this.cars) {
            this.print(x);
        }
    }

    guaranteeSimulation(simulationYear) {
        console.log(`hasil simulasi garansi semua mobil pada tahun ${simulationYear}:\n`)
        for (let x in this.cars) {
            this.print(x);
            console.log(`status on ${simulationYear} : this guarantee status is ${(simulationYear-this.cars[x].year)>this.cars[x].warranty?'expired':'active'} \n`)
        }

    }
}



const toyota = new CarFactory()
toyota.produce(2020)
toyota.produce(2022)
toyota.result()
toyota.guaranteeSimulation(2024)