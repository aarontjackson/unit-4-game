  $(document).ready(function(){
    console.log("ready!");

  // Global variables
    var wins = 0;
    var losses = 0;
    var totalScore = 0;
    var randomResult;

    // Game Method
    //random number that the user must match
    var gameManager = function() {

        //clear previous crystal game
        $(".crystals").empty();

        //random number generator for crystals
        randomResult = Math.floor((Math.random() * 120) + 19);

        $(".recorder").html(randomResult);
    
        //random number generated for the 4 crystals
        for (var index = 0; index < 4; index++) {
    
            var random = Math.floor((Math.random() * 12) + 1); 
    
            //creation of crystal class for user to select crystals to equal sum
            var crystal = $("<div>");
                crystal.attr({
                    "class": 'crystal',
                    "randomNumber": random
                });

            $(".crystals").append(crystal);
        }
    }

    gameManager();
  
    //Event delegation "on-click"
    $(document).on("click", ".crystal", function() {

        //user total score documents as an integer
        var crystalSelector = parseInt($(this).attr("randomNumber"));

        $("#totalScore").html(totalScore);

        totalScore += crystalSelector;
        console.log(totalScore);

        //adds a loss to the user record and resets the game
        if(totalScore > randomResult) {

             losses++;

            $("#losses").html(losses);

            totalScore = 0;

            $("#wins").html(wins);

            gameManager();
        }

        //adds a win to the user record and resets the game
        else if(totalScore === randomResult) {

            wins++;
        
            $("#wins").html(wins);

            totalScore = 0;

            $("#wins").html(wins);

            gameManager();
        }

    });
}); 

