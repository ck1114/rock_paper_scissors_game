var compSelects;

$(document).ready(startGame);

function startGame(){
    console.log("Game has started");
    $(".imageOption").click(optionClicked);
    $("button").click(reset);
    $("#compRock").hide();
    $("#compPaper").hide();
    $("#compScissor").hide();
    compChoice();
}

function reset(){
    $("#rock").show();
    $("#paper").show();
    $("#scissor").show();
    $("#compRock").hide();
    $("#compPaper").hide();
    $("#compScissor").hide();
    $("img").removeClass("clicked");
    $("h2").remove();
    compChoice();
}

function compChoice(){
    compSelects = Math.floor((Math.random()*100));
    if (compSelects < 33){
        compSelects = "rock";
    }
    if (compSelects  < 66){
        compSelects = "paper";
    }
    if(compSelects <= 99){
        compSelects = "scissor";
    }
    return compSelects;
}

function whoWins (player, comp){
    var winStatement = $("<h2>",{
        text: "You win!"
    });
    var lossStatement = $("<h2>",{
        text: "You lose!"
    });
    var tieStatement = $("<h2>",{
        text: "You tie!"
    });

    if(player === comp){
        if(comp === "scissor"){
            $("#compScissor").show();
        }
        if(comp === "paper"){
            $("#compPaper").show();
        }
        if(comp === "rock"){
            $("#compRock").show();
        }
        $(".response").append(tieStatement);
        console.log("You tie!");
    }
    if(player === "rock"){
        if(comp === "scissor"){
            $("#compScissor").show();
            $(".response").append(winStatement);
            console.log("rock beats scissor. You win!");
        }
        if(comp === "paper"){
            $("#compPaper").show();
            $(".response").append(lossStatement);
            console.log("paper beats rock. You lose!");
        }
    }
    if(player === "scissor"){
        if(comp === "paper"){
            $("#compPaper").show();
            $(".response").append(winStatement);
            console.log("scissor beats paper. You win!");
        }
        if(comp === "rock"){
            $("#compRock").show();
            $(".response").append(lossStatement);
            console.log("rock beats scissor. You lose!");
        }
    }
    if(player === "paper"){
        if(comp === "rock"){
            $("#compRock").show();
            $(".response").append(winStatement);
            console.log("paper beats rock. You win!");
        }
        if(comp === "scissor"){
            $("#compScissor").show();
            $(".response").append(lossStatement);
            console.log("scissor beats paper. You lose!");
        }
    }
}

function optionClicked(){
    if($(this).hasClass("clicked")){
        return;
    }
    console.log("player has selected one of three options");
    $(this).addClass("clicked");
    console.log(this);
    var player =  $(this)[0]['id'];
    if (player === "rock"){
        console.log("player has selected ROCK");
        $("#scissor").hide();
        $("#paper").hide();
        whoWins(player, compSelects);
    }
    if (player === "scissor"){
        console.log("player has selected SCISSOR");
        $("#rock").hide();
        $("#paper").hide();
        whoWins(player, compSelects);
    }
    if(player === "paper"){
        console.log("player has selected PAPER");
        $("#rock").hide();
        $("#scissor").hide();
        whoWins(player, compSelects);
    }

}


