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
        return this.catchphrases[Math.floor(Math.random()*3 +1)];
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
        return this.catchphrases[Math.floor(Math.random()*3 +1)];
    }

    announceHealth = () => console.log(`Current Health: ${this.health}`);
    fight = () => console.log(`I'm ready to rumble!`);

}
let dougie = new Hero("Dougie");

console.log(dougie);

let pizzaRat = new Enemy("Pizza Rat");
console.log(pizzaRat);