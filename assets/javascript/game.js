// $( document ).ready(function() {
//     console.log("ready!");

    // Global variables
    let wins = 0;
    let losses = 0;
    let totalScore = 0;
    let randomResult;
    let crystal;

    // Game Method
    function gameManager() {

        $("#crystal").empty();

        randomResult = Math.floor((Math.random() * 120) + 19);
   
        $(".recorder").text(randomResult);

    
         for (let c = 0; c < 4; c++){

            let random = Math.floor((Math.random() * 12) + 1);  

            return crystal = random;

        $('#crystal').append(crystal); 
    } 
}
gameManager();

    //Crystal Event Method
    $(document).on("click", "#crystal", function () {

        let result = parseInt($(this));

        totalScore += result;

        $(".gemCounter").text("Total Score: " + totalScore);

        if(totalScore > randomResult) {

            losses++;

            $("#losses").text(losses);

            totalScore = 0;

            gameManager();

        }
        else if(totalScore === randomResult){

            win++;

            $("#wins").text(losses);

            totalScore = 0;

            gameManager();
        }

        gameManager();
    });
