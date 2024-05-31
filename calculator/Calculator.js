export const PI = 22 / 7;
export class Calculator {
    constructor() {
        this.x = 1;
    }
    add(value) {
        this.x += value;
        return this;
    }
    substract(value) {
        this.x -= value;
        return this;
    }
    divide(value) {
        this.x /= value;
        return this;
    }
    // tambahkan method lain yang perlu 
    multiply(value) {
        this.x *= value;
        return this;
    }
    exponent(value) {
        this.x = this.x ** value;
        return this;
    }
    square(value) {
        this.x = this.x ** 2;
        return this;
    }
    squareRoot() {
        this.x = this.x ** (1 / 2);
        return this;
    }
    result() {
        console.log(this.x);
    }
}

export default Calculator;