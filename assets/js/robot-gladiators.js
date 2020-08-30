var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function(enemyName) { 
    while(enemyHealth > 0 && playerHealth > 0) {

        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

        if (promptFight === "fight" || promptFight === "FIGHT" || promptFight === "Fight") 
        {
            enemyHealth = enemyHealth - playerAttack;
            console.log(
                playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
            );
  
            // check enemy's health
            if (enemyHealth <= 0) {
             window.alert(enemyName + " has died!");
             break;
            } 
            else {
                window.alert(enemyName + " still has " + enemyHealth + " health left.");
            }

            // remove player's health by subtracting the amount set in the enemyAttack variable
            playerHealth = playerHealth - enemyAttack;
            console.log(
                enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");

            // check player's health
            if (playerHealth <= 0) {
                window.alert(playerName + " has died!");
                break;
            } 
            else {
                window.alert(playerName + " still has " + playerHealth + " health left.");
            }

        } 
        else if (promptFight === "skip" || promptFight === "SKIP" || promptFight === "Skip") {
                // confirm user wants to skip
                var confirmSkip = window.confirm("Are you sure you'd like to quit?");
          
            // if yes (true), leave fight
            if (confirmSkip) {
              window.alert(playerName + " has decided to skip this fight. Goodbye!");
              // subtract money from playerMoney for skipping
              playerMoney = playerMoney - 10;
              console.log("playerMoney", playerMoney);
              break;
            }
            // if no (false), ask question again by running fight() again
            else {
              fight();
            }
        }  
        else {
        window.alert("You need to pick a valid option. Try again!");
        }
    }
}
var startGame = function() {
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;

    for (var i = 0; i < enemyNames.length; i++) {
        if (playerHealth > 0) {
            window.alert("Welcome to Robot Gladiators! " + (i + 1) );
            var pickedEnemyName = enemyNames [i];
            enemyHealth = 50;
        //debugger;
        fight(pickedEnemyName);

        if (playerHealth > 0 && i < enemyNames.length-1)
            var storeConfrim = window.confirm("The fight is over, visit the store before the next round?");

            if(storeConfrim) {
                shop();
            }
        }
        else {
            window.alert("You have lost your robot in balle! Game Over!");
            break;   
        }
    }
 endGame();
}
var endGame = function () {
    if (playerHealth > 0) {
        window.alert("Great job, you've survive the game! You now have a score of " + playerMoney + ". ");
    }
    else {
    window.alert("You've lost your robot in battle.");
    }
    var playerAgainConfirm = window.confirm("Would you like to play again?");
        if (playerAgainConfirm) {
            startGame();
        }
        else {
            window.alert("Thank you for playing Roboto Gladiators! come back soon!");
        }
<<<<<<< HEAD
        var playerAgainConfirm = window.confirm("Would you like to play again?");
            if (playerAgainConfirm) {
                startGame();
            }
            else {
              window.alert("Thank you for playing Roboto Gladiators! come back soon!");
            }
    }  
} 
var shop = function() {
    var shopOptionPrompt = window.prompt(
        "Would you like to REFILL your health, UPGRADE your attack, or Leave the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
    )
    switch (shopOptionPrompt) {
        case "REFILL": 
        case "refill":
        case "Refill":    
            if(playerMoney >= 7) { 
                window.alert("Refilling player's health by 20 for 7 dollars.");
                playerHealth = playerHealth + 20;
                playerMoney = playerMoney - 7;
            }
          else {
                window.alert("You don't have enough money!");
          }
            break;

        case "upgrade":
        case "UPGRADE":
        case "Upgrade":        
            if (playerMoney >= 7) {
                window.alert("Upgrading player's attack by 6 for 7 dollars.");
                playerAttack = playerAttack + 6;
                playerMoney = playerMoney - 7;
            }
            else {
                window.alert("You do not have enough money!");
            }

            break;

        case "leave":
        case "LEAVE":
        case "Leave":        
            window.alert("Leaving the store.");
            break;
        
        default:
            window.alert("You did not pick a valid option. Try again.")
            
            shop();
            break;
    }       
}
  startGame();
=======
}


var shop = function() {
    console.log("entered the shop");
};

startGame();
>>>>>>> 8a32581596d65a007e6c806e8a0943ad5954981c
