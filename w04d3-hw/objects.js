class Hamster {
    constructor(name){
        this.name = name;
        this.owner ="";
        this.price = 15;
    }

    wheelRun = () => console.log("Squeak, squeak");

    eatFood = () => console.log("nibble, nibble");

    getPrice = () => {
        return this.price;
    }


}

// testing the master class
let myHamster = new Hamster("Sparky");
console.log(`Hamster: ${myHamster.name} ${myHamster.price}`);

class Person {
    constructor(name){
        this.name = name;
        this.age = 0;
        this.weight = 0;
        this.mood = 0;
        this.hamsters = [];
        this.bankAccount = 0;
    }
    getName = () => {
        return this.name;
    }

    getAge = () => {
        return this.age;
    }

    getWeight = () => {
        return this.weight;
    }

    greet = () => console.log(`Hello there ${this.name}`);

    eat = () => {
        this.weight+= 1;
        this.mood += 1;
    }

    exercise = () => {
        this.weight-=1;
    }

    ageUp = () => {
        this.age += 1;
        this.height += 1;
        this.weight += 1;
        this.mood -= 1;
        this.bankAccount += 10;
    }

    buyHamster = (hamster) => {
        this.mood += 10;
        this.bankAccount =- hamster.getPrice();
        this.hamsters.push(hamster);
    }
}

// testing the new Person class out

let taraYoung = new Person("Tara");

console.log(`Person name: ${taraYoung.getName()}`);

console.log(`Person Age: ${taraYoung.getAge()}`);

console.log(`Person Weight: ${taraYoung.getWeight()}`);

taraYoung.greet();

taraYoung.eat();

console.log(`Person Weight: ${taraYoung.getWeight()} Person Mood: ${taraYoung.mood}`);

taraYoung.ageUp();

console.log(`New Age: ${taraYoung.getAge()} 
New Height:${taraYoung.height}
New Weight: ${taraYoung.getWeight()}
New Mood: ${taraYoung.mood}
New Bank Balance: ${taraYoung.bankAccount}`);

taraYoung.buyHamster(myHamster);

console.log(`I have a new pet:  ${taraYoung.hamsters[0].name}`);

