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

    attack: alienShip => {
            console.log("Starfleet is attacking");
            if (Math.random() < this.accuracy){
                console.log("Starfleet got a hit!");
                alienShip.hull -= this.firepower;
            } else {
                console.log("Darn, Starfleet missed");
            }
    }
    
};



// Define AlienShip class
// need to recalculate hull strength after each hit.
// after each recalculation, need to check if the ship is destroyed.

class AlienShip{
    name = "bad guy";
    constructor (){
        this.hull = Math.floor(Math.random() * 4) + 3;
        this.firepower = Math.floor(Math.random() * 3) + 2;
        this.accuracy = (Math.floor(Math.random() * 3) + 6) / 10;
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

    attack() {
        console.log("Alien Ship attacking");
        // Check for hit or miss:
        if (Math.random() < this.accuracy) {
          console.log("Alien ship scored a hit!");
          playerShip.hull -= this.firepower;
          console.log(`Good Guys remaning hull strength: ${playerShip.hull}`);
        } else {
          console.log("Alien ship missed");
        }
      }
    
}

console.log(ussSchwarzenegger);
console.log(AlienShip);

/** Welcome player to the game
 * General Instructions given
 * mobilize the alienFleet.
 */

//  capture player's response after each salvo.
let playerChoice = null;

  // this will hold all the ships of the alien fleet.
 let alienFleet = [];
 let alienShip = new AlienShip();


// start the game here.  Our team fires the first salvo.  Ask if they wish to continue.

ussSchwarzenegger.attack(alienShip);

if (alienShip.hull < 0){
    // console.log("Alien attacker has been destroyed");
    playerChoice = prompt("Alien attacker has been destroyed.  Attack or Retreat?");
    if (playerChoice === "Retreat"){
        console.log("Return to homebase and regroup.");
        // break;
    }
}