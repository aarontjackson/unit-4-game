  $(document).ready(function(){
    console.log("ready!");

  // Global variables
    var wins = 0;
    var losses = 0;
    var totalScore = 0;
    var randomResult;

    // Game Method
    //random number that the user must match
    randomResult = Math.floor((Math.random() * 120) + 19);

    $(".recorder").html(randomResult);

    //random number generated for the 4 crystals
    for (var index = 0; index < 4; index++) {
        var random = Math.floor((Math.random() * 12) + 1); 
        console.log(random);

        //creation of crystal class for user to select crystals to equal sum
        var crystal = $("<div>");
            crystal.attr({
                "class": 'crystal',
                "randomNumber": random
            });
        $(".crystals").append(crystal);
    }
    $(".crystal").on("click", function(){

        console.log($(this).attr("randomNumber"));

    });
}); 

