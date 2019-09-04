$(document).ready(function () {
// game interface script
let wins = 0;
let losses = 0;
let totalScore = 0;

// Game Method

let gameManager = {
    setGameStart: function(crystalType) {
        this.resetGame(crystalType);
        this.setTotal();
    },
    resetGame: function(crystalType) {
        switch (crystalType) {
            case "Diamond":
            crystal = new Crystal(crystalType, randomAmount);
            break;
            case "Dragonstone":
            crystal = new Crystal(crystalType, randomAmount);
            break;
            case "Topaz":
            crystal = new Crystal(crystalType, randomAmount);
            break;
            case "Lapis":
            crystal = new Crystal(crystalType, randomAmount);
            break;
            default:
                alert("Select a crystal until you've reached the number");
        }
    },
    setTotal: function() {

    }
  
}

// Crystal Method

//crystal object is globally avaliable
let Crystal;
//crystal object will generate a random number 1 - 12
function Crystal(crystalType, randomAmount) {
    this.crystalType = crystalType;
    this.randomAmount = Math.floor((Math.random() * 12) + 1);
}

   

});
