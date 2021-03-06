console.log("it's working");
/**I had to start over.  I didn't read the spec carefully and coded myself into a corner where
 * I couldn't prompt the user to retreat or attack without some seriously ugly code.
 * So I went with the code Ira shared during the code-a-long as my base.
 */

let playerShip = {
  hull: 20,
  firepower: 5,
  accuracy: 0.7,
  // Adding missles
  missles: ["tube 1", "tube 2", "tube 3"],
  // Add methods for battle here
  attack: enemyShip => {
    console.log("Player attacking Alien ship");
    // Check for hit success based on playerShip accuracy:
    if (Math.random() < playerShip.accuracy) {     
      console.log("Attack hit!");
      enemyShip.hull -= playerShip.firepower;
    } else {
      console.log("Attack missed!");
    }
    console.log(enemyShip);
    
  },

  reinforceShields: () => {
    console.log(`Current Shield Value: ${playerShip.hull}`);
    playerShip.hull += Math.floor(Math.random() * 7);
    console.log(`New Shield value: ${playerShip.hull}`);
  },
  
  

};


  // Define an AlienShip class
  class AlienShip {
    constructor() {
      // Make hull random between 3 and 6
      this.hull = Math.floor(Math.random() * 4 + 3);
      // Make random between 2 and 4
      this.firepower = Math.floor(Math.random() * 3 + 2);
      // TODO: Make random between .6 and .8
      this.accuracy = Math.floor(Math.random() * 3 + 6) * 0.1;
    }
    attack() {
      console.log("Alien Ship attacking");
      // Check for hit or miss:
      if (Math.random() < this.accuracy) {
        console.log("Alien ship hit player!");
        playerShip.hull -= this.firepower;
        console.log(`Player Ship hull remaining: ${playerShip.hull}`);
      } else {
        console.log("Alien ship missed");
      }
    }
  }

  // Define a game object
  let gameState = {
    playerIsAlive: () => {
      // return true if player is alive
      return playerShip.hull > 0;
    },
    checkWin: () => {
      // return true if player has won the game
      // win = all alien ships are destroyed.
      return enemies.length === 0;
    }
  };

  
  // Start the game
  console.log("Generating enemy ships");
  
  // developing a fleet of alien ships
  // BONUS 1:  random number of ships have been sent to attack.
  // want to make sure we have at least two ships.

  let numEnemies = Math.floor(Math.random() * 30 +2);
  // let numEnemies = 6;
  enemies = [];
  for (let i = 0; i < numEnemies; i++) {
    enemies.push(new AlienShip());
  }
  console.log(enemies);

  let targetedEnemy = 0; 
  let userInput = "0";
  
  // while (gameState.playerIsAlive()) {

  
 while (gameState.playerIsAlive() && !gameState.checkWin()) {
  
  
  // BONUS 2:  Select specific enemy ship to target for attack

    
    
    userInput = prompt(`You have ${enemies.length} to attack.  Which one do you want to target for attack? Choose a number between 0 and ${enemies.length-1}`, "0");

    console.log(`User Input: ${userInput}`);
    

    // if the input can be parsed to a number and it is in range, then use that for the enemy target.
    if (!isNaN(parseInt(userInput)) && parseInt(userInput) >= 0 && (parseInt(userInput) < enemies.length) ) { 
        targetedEnemy = parseInt(userInput);

    } else { // else just select the first item in the enemies list.
      targetedEnemy = 0;
    }

    console.log(`Targeting ship number ${targetedEnemy} for our next attack`);

    playerShip.attack(enemies[targetedEnemy]);

  // check if the enemy has been destroyed.

  if (enemies[targetedEnemy].hull <= 0){
    console.log("enemy has been destroyed");

    //prompt fighter to continue or retreat.

    let response = prompt("Enemy Ship Destroyed:  Attack or Retreat");
    if (response === "retreat"){
      alert("Return to base and regroup.  Game Over");
      break;
    } else if (response === "attack") {
      console.log("Continue Playing");
      // remove the alien ship we just destroyed from the array.
      console.log(`Before removing destroyed ship: ${enemies}`);

      // enemies.shift(); 

      // If the attack was successful, we want to remove the item that we targeted for the attack.

      enemies.splice(targetedEnemy,1);
      console.log(`After removing destroyed ship: ${enemies}`);
      // console.log(enemies);
      // check if player has won the game.

    }
  } else {
    // Enemy now has a turn to attack.
    console.log("Aliens are charging their weapons.  Brace for attack");

    // BONUS 3:  reinforcing shields in anticipation of the next attack.
    playerShip.reinforceShields();
    console.log(`Hull integrity now at ${playerShip.hull}`);

    console.log(`First Enemy Attack in the sequence`);
    enemies[0].attack();

// BONUS 5:  Aliens send more than one ship at a time to attack.  Not sure if this is a good candidate for a callback function???
// for this, I'm going to assume two ships attack at a time, one after another.  Only do this if we have more than one enemy ship remaining.
// another variation is to have all the enemies attack at the same time but I'm not sure how to make that work.
    
    if (enemies.length > 1){
      playerShip.reinforceShields();
      console.log(`Second Enemy Attack in the sequence`);
      enemies[1].attack();
    }
  }
}

if (enemies.length === 0){
  console.log("Congratulations! You've successfully fended off the invading forces.  A grateful Galaxy thanks you!");
} else if (!gameState.playerIsAlive) {
  console.log("We'll remember you fondly.  Thank you for your service");
}
console.log("Game Over!  Thanks for playing");

  