console.log("It's Working");

// defining our Hero class
class Hero {
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.weapons = {sprinkleSpray: 5, sugarShock: 10};
        this.catchphrases = ["I\'m fresher than day old pizza", "You can\'t count my calories"]
    }

    talkSass = () => {
         console.log(this.catchphrases[Math.floor(Math.random()*2)]);
    }

    announceHealth = () => console.log(`Current Health: ${this.health}`);

    fight = () => console.log(`I'm ready to rumble!`);

}

// Defining our Enemy class

class Enemy {
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.weapons = {pepperoniStars: 5, cheeseGrease: 10};
        this.catchphrases = ["I\'m youtube famous", "I\'m more dangerous than an uncovered sewer"];
    }

    talkSmack = () => {
         console.log(this.catchphrases[Math.floor(Math.random()*2)]);
    }

    announceHealth = () => console.log(`Current Health: ${this.health}`);
    fight = () => console.log(`I'm ready to rumble!`);

}
let dougie = new Hero("Dougie");

console.log(dougie);

let pizzaRat = new Enemy("Pizza Rat");
console.log(pizzaRat);

// our protagonists have their first confrontation

const warOfWords = () => {
    dougie.talkSass();

    pizzaRat.talkSmack();

    dougie.announceHealth();

    pizzaRat.announceHealth();
}

warOfWords();