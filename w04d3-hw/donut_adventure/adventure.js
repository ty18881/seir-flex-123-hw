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

    announceHealth = () => console.log(`${this.name} Current Health: ${this.health}`);

// 1.  Upgraded fight method - accesses weapons and logs hitpoints.
    // fight = () => console.log(`I'm ready to rumble!`);

    selectWeapon = (weapons) => {
        let weaponKeys = Object.keys(weapons);
        console.log(`Keys for weapons object: ${weaponKeys}`);
        return weapons[weaponKeys[Math.floor(Math.random()*2)]];
    }
// 3.  Third upgrade to fight method - update enemy health and display revised health value.

    fight = (enemy) => {
        // console.log(this.weapons);
     
        // random weapon selection to keep things interesting.

        let weaponHit = this.selectWeapon(this.weapons);
        console.log(`Oooh burn:  Hit you with ${weaponHit}`);
        enemy.health-= weaponHit;
        console.log(`our enemy: ${enemy.name} new health: ${enemy.health}`);
    }

    

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

    announceHealth = () => console.log(`${this.name} Current Health: ${this.health}`);

    selectWeapon = (weapons) => {
        let weaponKeys = Object.keys(weapons);
        console.log(`Keys for weapons object: ${weaponKeys}`);
        return weapons[weaponKeys[Math.floor(Math.random()*2)]];
    }

    // 1. Upgrading Fight method to access weapons and log health.

    // fight = () => console.log(`I'm ready to rumble!`);

    // fight = () => {
    //     console.log(this.weapons.pepperoniStars);
    //     console.log(`Hitpoints: ${this.health}`);
    // }

// 2. Second upgrade to fight method - accepts an argument.
// fight = (enemy) => {
//         console.log(this.weapons);
//         console.log(`Hitpoints: ${this.health}`);
//         console.log(`our enemy: ${enemy.name}`);
//     }


// 3.  Third upgrade to fight method - update enemy health and display revised health value.
    fight = (enemy) => {
        // console.log(this.weapons);
    
        // random weapon selection to keep things interesting.

        let weaponHit = this.selectWeapon(this.weapons);
        console.log(`Oooh burn:  Hit you with ${weaponHit}`);
        enemy.health-= weaponHit;
        console.log(`our enemy: ${enemy.name} new health: ${enemy.health}`);
    }
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

// dougie and pizzaRat jawbone in the street
// warOfWords();


// Things have escalated and now our Hero and Enemy begin to fight for real.

// testing dougie's upgraded fight method.

// dougie.fight();

// testing pizzaRat's upgraded fight method.

// pizzaRat.fight();

// testing second upgrade to fight method

dougie.fight(pizzaRat);
pizzaRat.announceHealth();

pizzaRat.fight(dougie);
dougie.announceHealth();

