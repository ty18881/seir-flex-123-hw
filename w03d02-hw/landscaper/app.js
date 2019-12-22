console.log("Working as expected");

const player = {name: "Player", tool: "teeth", wallet: 0, isWorking: true, lawnCount: 0, dailyWage: 1};

let upgradeTool = "no";

/**Using just your teeth, you can spend the day cutting laws and make $1.  You can do this as much as you want */

/**if person.wallet >= 5 give option to buy scissors */

/** if you use scissors, you can earn $5 per day as much as you want */

/** 5.  if person.wallet >= 25, option to buy push mower */

/** 6. with push mower, earn $50 per day. */

/** 7. person.wallet >= $250, option to buy fancy mower */

/** 8. fancy mower, earn $100 per day */

/** 9. person.wallet >= $500, option to hire a team. You can then make $250 per day */

/* you win by reaching $1000 in your wallet and you have your team working for you.*/


const userName = prompt("Welcome to our Landscaper Game.  What is your name?");
console.log(`Welcome ${userName}`);

player.name = userName;

while ( player.wallet < 5){
    player.lawnCount+=1;
    player.wallet+= player.dailyWage;
    console.log(`Num Lawns ${player.lawnCount} Money: ${player.wallet}`);
}

upgradeTool= prompt("Congratulations!  You have enough money to get better tools.  Would you like to buy scissors?  You can earn $5 per day!");


if (upgradeTool.toLowerCase() === "yes" || upgradeTool.toLowerCase() === "y"){
    player.tool = "scissors";
    player.dailyWage = 5;
    player.wallet = 0;

    alert("Great Choice!  You can now earn $5 per day"); // fix this message to use the value from the array.

}
   
while ( player.wallet < 25){
    player.lawnCount+=1;
    player.wallet+= player.dailyWage;
    console.log(`Num Lawns ${player.lawnCount} Money: ${player.wallet}`);
} 


/**Player has reached the next level.  Prompt to upgrade to push mower */  
    upgradeTool= prompt("Congratulations!  You have enough money to get better tools.  Would you like to buy a push mower?  You can earn $25 per day!");
    
    
    /**Maybe add option to continue playing with the current tool as well */
    
    if (upgradeTool.toLowerCase() === "yes" || upgradeTool.toLowerCase() === "y"){
        alert("Great Choice!  You can now earn $25 per day");
        player.tool = "push mower";
        player.dailyWage = 25;
        player.wallet = 0;

    }

    /**Now using a push mower */

    while ( player.wallet < 250){
        player.lawnCount+=1;
        player.wallet+= player.dailyWage;
        console.log(`Num Lawns ${player.lawnCount} Money: ${player.wallet}`);
    }

    /**Player has reached the next level.  Prompt to upgrade to power mower */  
    upgradeTool= prompt("Congratulations!  You have enough money to get better tools.  Would you like to buy a power mower?  You can earn $100 per day!");
    
    
    /**Maybe add option to continue playing with the current tool as well */
    
    if (upgradeTool.toLowerCase() === "yes" || upgradeTool.toLowerCase() === "y"){
        alert("Great Choice!  You can now earn $100 per day");
        player.tool = "power mower";
        player.dailyWage = 100;
        player.wallet = 0;

    }
    
    while ( player.wallet < 500){
        player.lawnCount+=1;
        player.wallet+= player.dailyWage;
        console.log(`Num Lawns ${player.lawnCount} Money: ${player.wallet}`);
    }

/**Player has reached the next level.  Prompt to upgrade to team of starving students*/  
upgradeTool= prompt("Congratulations!  You have enough money to get better tools.  Would you like to hire a team?  You can earn $250 per day!");
    
    
/**Maybe add option to continue playing with the current tool as well */

if (upgradeTool.toLowerCase() === "yes" || upgradeTool.toLowerCase() === "y"){
    alert("Great Choice!  You can now earn $250 per day");
    player.tool = "power mower";
    player.dailyWage = 250;
    player.wallet = 0;

}

while ( player.wallet < 500){
    player.lawnCount+=1;
    player.wallet+= player.dailyWage;
    console.log(`Num Lawns ${player.lawnCount} Money: ${player.wallet}`);
}

alert(`Congratulations ${player.name}!  You've won the landscaping game!  You earned ${player.wallet} mowing for ${player.lawnCount} days`);



