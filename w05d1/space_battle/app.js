console.log("it's working");
/**I had to start over.  I didn't read the spec carefully and coded myself into a corner where
 * I couldn't prompt the user to retreat or attack without some seriously ugly code.
 * So I went with the code Ira shared during the code-a-long as my base.
 */

let playerShip = {
  hull: 20,
  firepower: 5,
  accuracy: 0.7,
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
    // if (Math.random() < alien[0].accuracy) {
    // console.log('You have been hit!');
  }
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
  // enemy = new AlienShip();
  // console.log(enemy);

  
  // developing a fleet of alien ships
  // random number of ships have been sent to attack.
  // want to make sure we have at least two ships.

  let numEnemies = Math.floor(Math.random() * 30 +2);
  enemies = [];
  for (let i = 0; i < numEnemies; i++) {
    enemies.push(new AlienShip());
  }
  console.log(enemies);
  
  // while (gameState.playerIsAlive()) {

  
 while (gameState.playerIsAlive() && !gameState.checkWin()) {
  
  
  // attack the first ship in the alien fleet.

  //PROBLEM (I think):  if we reach this point after we destroy a ship, we end up attacking the same alien ship twice in a row.
  // if we miss after destroying the previous ship, we skip one of the enemy's turns to attack.

    playerShip.attack(enemies[0]);

  // check if the enemy has been destroyed.

  if (enemies[0].hull <= 0){
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
      enemies.shift(); 
      console.log(`After removing destroyed ship: ${enemies}`);
      // console.log(enemies);
      // check if player has won the game.

    }
  } else {
    // Enemy now has a turn to attack.
    enemies[0].attack();
  }
}

if (enemies.length === 0){
  console.log("Congratulations! You've successfully fended off the invading forces.  A grateful Galaxy thanks you!");
} else if (!gameState.playerIsAlive) {
  console.log("We'll remember you fondly.  Thank you for your service");
}
console.log("Game Over!  Thanks for playing");

  