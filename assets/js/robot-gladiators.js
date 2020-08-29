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
}


var shop = function() {
    console.log("entered the shop");
};

startGame();