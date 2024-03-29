console.log("it's working");

// Create USS Schwarzenegger

let ussSchwarzenegger = {
name: "good guy",
hull:  20,
firepower:  5,
accuracy:  0.7,
isDestroyed:  false,

calcHullStrength: function(attackerFirepower) { 
    this.hull-= attackerFirepower;
},

checkIsDestroyed: function() {
    if (this.hull <= 0){
        this.isDestroyed = true;
    } else {
        this.isDestroyed = false;
    }

    },

    
}

console.log(ussSchwarzenegger);

// Define AlienShip class
// need to recalculate hull strength after each hit.
// after each recalculation, need to check if the ship is destroyed.

class AlienShip{
    name = "bad guy";
    constructor (hull, firepower, accuracy){
        this.hull = hull;
        this.firepower = firepower;
        this.accuracy = accuracy;
        this.isDestroyed = false;
    }
    

    // calculate hull strength
    calcHullStrength(attackerFirepower) {
        this.hull -= attackerFirepower;
    }

    // check if ship is Destroyed
    checkIsDestroyed() {
        if (this.hull <= 0) {
            this.isDestroyed = true;
            return this.isDestroyed;
        } else {
            this.isDestroyed = false;
            return this.isDestroyed;
        }
    }

    
}
console.log(AlienShip);

// Create game object

// Start the Game
// Prompt user for their name.
// Perhaps some general directions on how play works
// ask them if they wish to play.
// IF YES, then start.
// create alien ships

alert("Welcome to Space Battle.");
// let userWantsToPlay = prompt("would you like to play?");

// let firstAlienShip = new AlienShip(3, 2, .6);

let firstAlienShip = new AlienShip(6, 4, .8);

// Turn by turn logic
// ship initiates attack
// determine if attack was successful by comparing attacker accuracy with the random number generated.
// if attackerAccuracy > random Number that is a HIT => the game tracks hits and misses
// individual ships decrement their hull strength accordingly.
// confirm target's hull strength is still above zero.
// confirm game should continue.

// if attackerAccuracy < random number ==> MISS
// target becomes the attacker
// game continues 
// BACK TO "ship initiates attack" step to repeat the loop.

// We always begin with the Aliens on the offensive.
// this looks like a beginGame function.



let alienFleet = [];

alienFleet.push( new AlienShip(3, 2, .6));
alienFleet.push( new AlienShip(4, 3, .7));

let alienFleetStrength = alienFleet.length;

let numBadGuys = alienFleet.length;

let currAttacker = alienFleet[0];
let currTarget = ussSchwarzenegger;
let isTargetDistroyed = false;
let currShotAccuracy = 0;
let goodGuyDestroyed = false;
let allBadGuysDestroyed = false;
let numBadGuysDestroyed = 0;


// while all players still have hull strength, keep playing.
// this looks like the beginning of a playGame function.


while ( goodGuyDestroyed === false && alienFleet.length > 0 ){ 
    

    console.log(`Current Target = ${currTarget.name}`);
    console.log(`Current Attacker = ${currAttacker.name}`);

    currShotAccuracy = Math.random(); 
    console.log(`Current Shot: ${currShotAccuracy}`);

    if (currShotAccuracy <= currAttacker.accuracy) {
        console.log(`Direct Hit on ${currTarget.name}`);
        currTarget.calcHullStrength(currAttacker.firepower);
        console.log(`Hull Strength down to ${currTarget.hull}`);
        isTargetDistroyed = currTarget.checkIsDestroyed();

        // there's only one good guy so if it gets destroyed, game is over.
        // if a bad guy gets destroyed, game continues.

        if (isTargetDistroyed){
            console.log(`Target: ${currTarget.name} has been destroyed`);
            if (currTarget.name === "good guy"){
                goodGuyDestroyed = true;
            } else { // maybe can remove alien ships from the array as they are destroyed.
                    alienFleet.splice(0,1);
                    
            }
        }
        
    } else {
        console.log("Dodged a bullet!");
    }

// switch attackers then go back and do it all again.
// if currTarget == alien ship && currTarget was destroyed ==> move on to the next alien ship for the next attack round.
// pick one at random from the remaining ships in alienFleet.

// if (alienFleet.length < alienFleetStrength){
//     newAlienSelector = Math.floor(Math.random() * alienFleet.length);
//     currAttacker = alienFleet[newAlienSelector];
//     currTarget = ussSchwarzenegger;
// } else {
    tempTarget = currAttacker;
    currAttacker = currTarget;
    currTarget = tempTarget;
// }




}



// Retreat option

// End game logic