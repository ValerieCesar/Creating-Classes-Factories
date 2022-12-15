// Hamster
class Hamster {
    constructor(name) {
        this.name = name;
        this.owner = '';
        this.price = 15;
    }
    wheelRun() {
        console.log('squeak squeak');
    }
    eatFood() {
        console.log('nibble nibble');  
    }
    getPrice() {
        return this.price;
    }
}

const hamster1 = new Hamster('Biscuit');
const hamster2 = new Hamster('Bunny');
// console.log(hamster1.getPrice());