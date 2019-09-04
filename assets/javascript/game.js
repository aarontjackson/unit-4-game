// $( document ).ready(function() {
//     console.log("ready!");

    // game interface script
    let wins = 0;
    let losses = 0;
    let totalScore = 0;
    let randomResult;
    let crystal;

    // Game Method
    function gameManager() {
        randomResult = Math.floor((Math.random() * 120) + 19);
    }
    $(".recorder").text(randomResult);

    // Crystal Method
    for (let c = 0; c < 4; c++){
        let random = Math.floor((Math.random() * 12) + 1);  
        return crystal = random;
    } 
    $('#crystal').append(crystal); 

    $(document).on("click", "#crystal", function () {
        let result = parseInt($(this));
        totalScore += result;

        if(totalScore > randomResult) {
            console.log("You lost!");
            losses++;
            $("#losses").text(losses);
            totalScore = 0;
        }
        else if(totalScore === randomResult){
            win++;
            $("#wins").text(losses);
            totalScore = 0;
        }
    });
