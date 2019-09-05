$(document).ready(function () {
    console.log("ready!");

    // Global variables
    var wins = 0;
    var losses = 0;
    var totalScore = 0;
    var randomResult;

    // Game Method
    //random number that the user must match
    var gameManager = function () {

        //clear previous crystal game
        $(".crystals").empty();

        var images = [
            "https://live.staticflickr.com/450/19963570582_82c6d30769_m.jpg",
            "https://live.staticflickr.com/445/19348619254_ca95104376_m.jpg",
            "https://live.staticflickr.com/3931/15562691802_0919545858_m.jpg",
            "https://live.staticflickr.com/8029/7996396245_0afbda86ae_m.jpg"
        ];

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
            crystal.css({
                "background-image":"url('" + images[index] + "')",
                "background-size":"cover"
            });

            $(".crystals").append(crystal);
        }
    }

    gameManager();

    //Event delegation "on-click"
    $(document).on("click", ".crystal", function () {

        //user total score documents as an integer
        var crystalSelector = parseInt($(this).attr("randomNumber"));

        totalScore += crystalSelector;

        $("#totalScore").html(totalScore);

        console.log(totalScore);

        //adds a loss to the user record and resets the game
        if (totalScore > randomResult) {

            losses++;

            $("#losses").html(losses);

            totalScore = 0;

            gameManager();
        }

        //adds a win to the user record and resets the game
        else if (totalScore === randomResult) {

            wins++;

            $("#wins").html(wins);

            totalScore = 0;

            gameManager();
        }

    });
});

