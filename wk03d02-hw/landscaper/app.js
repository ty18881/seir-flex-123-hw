/**Due Jan 8, 2019 - Week 3 Day 2 Landscaper Class Lab */

/**Using just your teeth, you can spend the day cutting laws and make $1.  You can do this as much as you want */

/**if person.wallet >= 5 give option to buy scissors */

/** if you use scissors, you can earn $5 per day as much as you want */

/** 5.  if person.wallet >= 25, option to buy push mower */

/** 6. with push mower, earn $50 per day. */

/** 7. person.wallet >= $250, option to buy fancy mower */

/** 8. fancy mower, earn $100 per day */

/** 9. person.wallet >= $500, option to hire a team to earn $500 per day*/

console.log("Working as expected");

const player = {name: "Player", tool: "teeth", wallet: 0, isWorking: true, lawnCount: 0, dailyWage: 0};

const toolArray = [
    { name: "teeth", earnings: 1, inUse: true},
    { name: "scissors", earnings: 5, inUse: false},
    { name: "push mower", earnings: 50, inUse: true},
    { name: "power mower", earnings: 100, inUse: false},
    { name: "team", earnings: 250, inUse: false}
]

let upgradeTool = "no";
let nextThreshold = 5;

const userName = prompt("Welcome to our Landscaper Game.  What is your name?");
console.log(`Welcome ${userName}`);

player.name = userName;
player.tool = toolArray[0].name;
player.dailyWage = toolArray[0].earnings;

// mowLawns(player, nextThreshold);

/** Function definitions here */

/*
const mowLawns = (currPlayer, nextThreshold) => {

    while ( player.wallet < nextThreshold){
        player.lawnCount+=1;
        player.wallet+= player.dailyWage;
        console.log(`Num Lawns ${player.lawnCount} Money: ${player.wallet}`);
    }

    promptForUpgrade(currPlayer);
}

const promptForUpgrade = (currPlayer) => {
    alert(`Congratulations ${currPlayer.name}!  You've earned ${currPlayer.wallet}!  You have enough to buy a better tool!`);

    let wantUpgrade = prompt("Would you like to buy scissors?  You can earn $5 per day! Y/N");

    if (upgradeTool.toLowerCase() === "yes" || upgradeTool.toLowerCase() === "y"){
        currPlayer.tool = "scissors";
        currPlayer.dailyWage = 5;
        currPlayer.wallet = 0;

    }

}
*/




if (upgradeTool.toLowerCase() === "no" || upgradeTool.toLowerCase() === "n"){
    alert("Thanks for playing!  Goodbye!");
} else if (upgradeTool.toLowerCase() === "yes" || upgradeTool.toLowerCase() === "y"){
    

    alert("Great Choice!  You can now earn $5 per day");

    while ( player.wallet < 25){
        player.lawnCount+=1;
        player.wallet+= player.dailyWage;
        console.log(`Num Lawns ${player.lawnCount} Money: ${player.wallet}`);
    }
   
  /**Player has reached the next level.  Prompt to upgrade to push mower */  
    upgradeTool= prompt("Congratulations!  You have enough money to get better tools.  Would you like to buy a push mower?  You can earn $25 per day!");
    
    
    /**Maybe add option to continue playing with the current tool as well */
//     if (upgradeTool.toLowerCase() === "no" || upgradeTool.toLowerCase() === "n"){
        // alert("Thanks for playing!  Goodbye!");
    // } else if (upgradeTool.toLowerCase() === "yes" || upgradeTool.toLowerCase() === "y"){


        if (upgradeTool.toLowerCase() === "yes" || upgradeTool.toLowerCase() === "y"){
        alert("Great Choice!  You can now earn $25 per day");
        player.tool = "push mower";
        player.dailyWage = 25;
        player.wallet = 0;

    }

    /**Now using a push mower */


} 
/** Need to dry this code out seriously. */





