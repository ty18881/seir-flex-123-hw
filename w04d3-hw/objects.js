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

    printStats = () => {
        console.log(`Name: ${this.name}`);
        console.log(`Owner: ${this.owner}`);
        console.log(`Price: ${this.price}`);
        
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
        this.height = 0;
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

    getPersonStats = () => {
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
        console.log(`Weight: ${this.weight}`);
        console.log(`Height: ${this.height}`);
        console.log(`Mood: ${this.mood}`);
        console.log(`Bank Account: ${this.bankAccount}`);
        console.log(`Number of Hamsters: ${this.hamsters.length}`);
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

/**Creating Timmy's Story */

//1.  new person Timmy.

let timmy = new Person("Timmy");

// 2.  Age Timmy by five years

timmy.ageUp();

console.log(`Timmy's Current Age: ${timmy.getAge()}`);

// 3.  Timmy's bummed so he eats five times.
for (let i =0; i<5; i++){
    timmy.eat();
}

timmy.getPersonStats();

// 4.  Timmy exercises five times.

for (let i =0; i<5; i++){
    timmy.exercise();
}

timmy.getPersonStats();

// 5.  Age Timmy by nine years

for (let i =0; i<9; i++){
    timmy.ageUp();
}

timmy.getPersonStats();

// 6.  Create a hamster names Gus

let gus = new Hamster("Gus");

gus.printStats();

// 7.  Set Gus' owner to Timmy

gus.owner ="Timmy";

gus.printStats();

// 8.  Have Timmy buy Gus

timmy.buyHamster(gus);

timmy.getPersonStats();

// 9.  Age Timmy by 15 Years

for (let i =0; i<15; i++){
    timmy.ageUp();
}

timmy.getPersonStats();

// 10.  Have Timmy eat twice

timmy.eat();
timmy.eat();

timmy.getPersonStats();

// 11.  Have Timmy exercise twice.

timmy.exercise();
timmy.exercise();

timmy.getPersonStats();
